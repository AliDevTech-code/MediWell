/* ============================================================
   MediWell — Articles: home, listing and single article
   ============================================================ */

(function () {
  'use strict';

  const byDate = ARTICLES.slice().sort(function (a, b) { return b.date.localeCompare(a.date); });

  /* ---------- Home page ---------- */
  function renderHome() {
    const mainEl = document.getElementById('featured-main');
    const sideEl = document.getElementById('featured-side');
    const gridEl = document.getElementById('home-articles');
    if (!mainEl || !sideEl || !gridEl) return;

    const featured = byDate.filter(function (a) { return a.featured; });
    const lead = featured[0] || byDate[0];
    const side = featured.slice(1, 4);

    const cat = mwCategory(lead.category);
    mainEl.style.background = 'linear-gradient(150deg, ' + cat.color + ', ' + shade(cat.color) + ' 65%, #155e75)';
    mainEl.innerHTML =
      '<div>' +
        '<span class="thumb-chip">' + escapeHtml(lead.category) + '</span>' +
        '<h3>' + escapeHtml(lead.title) + '</h3>' +
        '<p>' + escapeHtml(lead.excerpt) + '</p>' +
        '<div class="article-meta">' +
          '<span>' + mwIcon('calendar') + mwDate(lead.date) + '</span>' +
          '<span>' + mwIcon('clock') + lead.readTime + ' min read</span>' +
        '</div>' +
        '<a class="btn" href="article.html?id=' + encodeURIComponent(lead.id) + '">Read the guide ' + mwIcon('arrow') + '</a>' +
      '</div>';

    sideEl.innerHTML = side.map(function (a) {
      const c = mwCategory(a.category);
      return '<a class="mini-card reveal" href="article.html?id=' + encodeURIComponent(a.id) + '">' +
        '<span class="mini-thumb" style="background:' + c.tint + ';color:' + c.color + '">' + mwIcon(a.icon) + '</span>' +
        '<span><b>' + escapeHtml(a.title) + '</b><small>' + escapeHtml(a.category) + ' · ' + a.readTime + ' min read</small></span>' +
      '</a>';
    }).join('');

    gridEl.innerHTML = byDate.slice(0, 3).map(mwArticleCard).join('');
    if (window.mwObserve) window.mwObserve();
  }

  /* ---------- Articles listing ---------- */
  function renderListing() {
    const gridEl = document.getElementById('article-grid');
    if (!gridEl) return;

    const searchEl = document.getElementById('search-input');
    const chipsEl = document.getElementById('category-chips');
    const countEl = document.getElementById('results-count');
    const resetEl = document.getElementById('reset-filters');

    let activeCat = 'All';
    let query = '';

    const cats = ['All'].concat(CATEGORIES.map(function (c) { return c.name; }));
    chipsEl.innerHTML = cats.map(function (c) {
      return '<button class="chip' + (c === 'All' ? ' active' : '') + '" type="button" data-cat="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>';
    }).join('');

    function apply() {
      const q = query.trim().toLowerCase();
      const results = byDate.filter(function (a) {
        const catMatch = activeCat === 'All' || a.category === activeCat;
        const text = (a.title + ' ' + a.excerpt + ' ' + a.category + ' ' + a.content).toLowerCase();
        return catMatch && (!q || text.indexOf(q) !== -1);
      });

      countEl.textContent = results.length + (results.length === 1 ? ' article' : ' articles') +
        (activeCat !== 'All' ? ' in ' + activeCat : '') +
        (q ? ' matching “' + query.trim() + '”' : '');

      if (!results.length) {
        gridEl.innerHTML =
          '<div class="empty-state" style="grid-column:1/-1">' + mwIcon('search') +
            '<h3>No articles found</h3>' +
            '<p>Try a different keyword or browse another category.</p>' +
          '</div>';
        return;
      }
      gridEl.innerHTML = results.map(mwArticleCard).join('');
      if (window.mwObserve) window.mwObserve();
    }

    chipsEl.addEventListener('click', function (e) {
      const chip = e.target.closest('[data-cat]');
      if (!chip) return;
      activeCat = chip.getAttribute('data-cat');
      chipsEl.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      apply();
    });

    let debounce;
    searchEl.addEventListener('input', function () {
      query = searchEl.value;
      clearTimeout(debounce);
      debounce = setTimeout(apply, 160);
    });

    if (resetEl) {
      resetEl.addEventListener('click', function () {
        activeCat = 'All';
        query = '';
        searchEl.value = '';
        chipsEl.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('active', c.getAttribute('data-cat') === 'All'); });
        apply();
      });
    }

    apply();
  }

  /* ---------- Single article ---------- */
  function renderArticle() {
    const rootEl = document.getElementById('article-root');
    if (!rootEl) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const article = ARTICLES.find(function (a) { return a.id === id; });

    if (!article) {
      rootEl.innerHTML =
        '<div class="empty-state" style="margin:40px 0">' + mwIcon('search') +
          '<h3>Article not found</h3>' +
          '<p>This article may have moved. Browse all health topics instead.</p>' +
          '<a class="btn btn-primary" style="margin-top:20px" href="articles.html">Browse articles</a>' +
        '</div>';
      return;
    }

    const cat = mwCategory(article.category);
    document.title = article.title + ' | MediWell';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://mediwell-sigma.vercel.app/article.html?id=' + encodeURIComponent(article.id));
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', article.excerpt);

    document.getElementById('crumb-cat').textContent = article.category;
    document.getElementById('crumb-cat').href = 'articles.html?category=' + encodeURIComponent(article.category);
    document.getElementById('crumb-title').textContent = article.title;

    const related = byDate.filter(function (a) {
      return a.id !== article.id && a.category === article.category;
    }).concat(byDate.filter(function (a) {
      return a.id !== article.id && a.category !== article.category;
    })).slice(0, 4);

    const takeaways = (article.takeaways || []).map(function (t) {
      return '<li>' + escapeHtml(t) + '</li>';
    }).join('');

    rootEl.innerHTML =
      '<article class="article-main">' +
        '<div class="article-hero-band" style="background:linear-gradient(135deg,' + cat.color + ',' + shade(cat.color) + ')">' + mwIcon(article.icon) + '</div>' +
        '<span class="eyebrow" style="margin-bottom:14px;background:' + cat.tint + ';color:' + cat.color + '">' + escapeHtml(article.category) + '</span>' +
        '<h1>' + escapeHtml(article.title) + '</h1>' +
        '<div class="article-byline">' +
          '<span>' + mwIcon('calendar') + mwDate(article.date) + '</span>' +
          '<span>' + mwIcon('clock') + article.readTime + ' min read</span>' +
          '<span>' + mwIcon('shield') + 'Reviewed by the MediWell editorial team</span>' +
        '</div>' +
        '<div class="article-content">' + article.content + '</div>' +
        (takeaways ? '<div class="takeaways"><h3>Key takeaways</h3><ul>' + takeaways + '</ul></div>' : '') +
        '<div class="disclaimer"><strong>Medical disclaimer:</strong> This article is for general education only and is not a substitute for professional medical advice, diagnosis or treatment. Always consult a qualified healthcare provider about your individual situation.</div>' +
      '</article>';

    document.getElementById('related-list').innerHTML = related.map(function (a) {
      return '<li><a href="article.html?id=' + encodeURIComponent(a.id) + '"><span class="dot"></span><span>' + escapeHtml(a.title) + '</span></a></li>';
    }).join('');
  }

  /* ---------- Boot ---------- */
  renderHome();
  renderListing();
  renderArticle();

  // Keep the reveal observer available to dynamically added cards.
  window.mwObserve = function () {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    els.forEach(function (el) { io.observe(el); });
  };
  window.mwObserve();

  // Support category links such as articles.html?category=Nutrition
  const catParam = new URLSearchParams(window.location.search).get('category');
  if (catParam && document.getElementById('category-chips')) {
    const chip = Array.from(document.querySelectorAll('#category-chips [data-cat]')).find(function (c) {
      return c.getAttribute('data-cat') === catParam;
    });
    if (chip) chip.click();
  }
})();
