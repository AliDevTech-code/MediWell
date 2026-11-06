/* ============================================================
   MediWell — Shared UI behaviour
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const THEME_KEY = 'mediwell-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* ignore */ }
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('[data-theme-toggle]');
    if (toggle) {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    }
  });

  /* ---------- Mobile navigation ---------- */
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Active nav link ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const activePath = path === 'article.html' ? 'articles.html' : path;
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href === activePath) link.classList.add('active');
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Newsletter ---------- */
  document.querySelectorAll('[data-newsletter]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const msg = form.parentElement.querySelector('[data-newsletter-msg]');
      if (!input || !input.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        if (msg) {
          msg.textContent = 'Please enter a valid email address.';
          msg.style.color = '#fecaca';
        }
        if (input) input.focus();
        return;
      }
      try {
        const list = JSON.parse(localStorage.getItem('mediwell-subscribers') || '[]');
        if (!list.includes(input.value.trim().toLowerCase())) {
          list.push(input.value.trim().toLowerCase());
          localStorage.setItem('mediwell-subscribers', JSON.stringify(list));
        }
      } catch (err) { /* ignore */ }
      if (msg) {
        msg.textContent = "You're in! Health tips will arrive in your inbox.";
        msg.style.color = '#bbf7d0';
      }
      form.reset();
    });
  });
})();

/* ---------- Shared helpers (global) ---------- */
function mwIcon(name, cls) {
  const path = ICONS[name] || ICONS.activity;
  return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + path + '</svg>';
}

function mwCategory(name) {
  return CATEGORIES.find(function (c) { return c.name === name; }) || CATEGORIES[0];
}

function mwDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function mwArticleCard(article) {
  const cat = mwCategory(article.category);
  return (
    '<article class="article-card reveal">' +
      '<a class="article-thumb" href="article.html?id=' + encodeURIComponent(article.id) + '" style="background:linear-gradient(135deg,' + cat.color + ',' + shade(cat.color) + ')" aria-label="' + escapeHtml(article.title) + '">' +
        '<span class="thumb-chip">' + escapeHtml(article.category) + '</span>' +
        mwIcon(article.icon) +
      '</a>' +
      '<div class="article-body">' +
        '<div class="article-meta">' +
          '<span>' + mwIcon('calendar') + mwDate(article.date) + '</span>' +
          '<span>' + mwIcon('clock') + article.readTime + ' min read</span>' +
        '</div>' +
        '<h3><a href="article.html?id=' + encodeURIComponent(article.id) + '">' + escapeHtml(article.title) + '</a></h3>' +
        '<p>' + escapeHtml(article.excerpt) + '</p>' +
        '<a class="read-link" href="article.html?id=' + encodeURIComponent(article.id) + '">Read article ' + mwIcon('arrow') + '</a>' +
      '</div>' +
    '</article>'
  );
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (ch) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
  });
}

/* Darken a hex colour by ~18% for gradient depth */
function shade(hex) {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  const r = Math.max(0, ((num >> 16) & 255) - 34);
  const g = Math.max(0, ((num >> 8) & 255) - 34);
  const b = Math.max(0, (num & 255) - 34);
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
