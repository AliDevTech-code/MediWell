/* ============================================================
   MediWell — Contact form validation
   Messages are stored locally so the demo is fully functional
   without a backend. Connect to a form service or API to go live.
   ============================================================ */

(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) return;

  const alertBox = document.getElementById('form-alert');
  const fields = {
    name: form.querySelector('#contact-name'),
    email: form.querySelector('#contact-email'),
    subject: form.querySelector('#contact-subject'),
    message: form.querySelector('#contact-message')
  };

  function emailValid(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  }

  function setError(input, hasError, message) {
    const wrap = input.closest('.field');
    if (!wrap) return;
    wrap.classList.toggle('invalid', hasError);
    const err = wrap.querySelector('.field-error');
    if (err && message) err.textContent = message;
  }

  function validate() {
    let ok = true;

    if (!fields.name.value.trim() || fields.name.value.trim().length < 2) {
      setError(fields.name, true, 'Please enter your name (at least 2 characters).');
      ok = false;
    } else {
      setError(fields.name, false);
    }

    if (!emailValid(fields.email.value)) {
      setError(fields.email, true, 'Please enter a valid email address.');
      ok = false;
    } else {
      setError(fields.email, false);
    }

    if (!fields.subject.value.trim()) {
      setError(fields.subject, true, 'Please choose a subject.');
      ok = false;
    } else {
      setError(fields.subject, false);
    }

    if (fields.message.value.trim().length < 10) {
      setError(fields.message, true, 'Please write at least 10 characters.');
      ok = false;
    } else {
      setError(fields.message, false);
    }

    return ok;
  }

  Object.keys(fields).forEach(function (key) {
    fields[key].addEventListener('input', function () {
      const wrap = fields[key].closest('.field');
      if (wrap && wrap.classList.contains('invalid')) validate();
    });
    fields[key].addEventListener('change', function () {
      const wrap = fields[key].closest('.field');
      if (wrap && wrap.classList.contains('invalid')) validate();
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validate()) {
      alertBox.className = 'form-alert error show';
      alertBox.textContent = 'Please fix the highlighted fields and try again.';
      return;
    }

    const payload = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim().toLowerCase(),
      subject: fields.subject.value.trim(),
      message: fields.message.value.trim(),
      date: new Date().toISOString()
    };

    try {
      const messages = JSON.parse(localStorage.getItem('mediwell-messages') || '[]');
      messages.push(payload);
      localStorage.setItem('mediwell-messages', JSON.stringify(messages));
    } catch (err) { /* storage may be unavailable — still show success */ }

    alertBox.className = 'form-alert success show';
    alertBox.textContent = 'Thank you, ' + payload.name.split(' ')[0] + '! Your message has been received. We aim to reply within 2 working days.';

    form.reset();
    Object.keys(fields).forEach(function (key) { setError(fields[key], false); });
  });

  // Pre-select a subject from ?subject=...
  const subjectParam = new URLSearchParams(window.location.search).get('subject');
  if (subjectParam) {
    const option = Array.from(fields.subject.options).find(function (o) {
      return o.value.toLowerCase() === subjectParam.toLowerCase();
    });
    if (option) fields.subject.value = option.value;
  }
})();
