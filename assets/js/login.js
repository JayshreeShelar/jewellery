/* =====================================================================
   AURUM ERP · assets/js/login.js   (used only by index.html)
   Demo sign-in: the credentials below live in the browser, so this is NOT
   real security. Replace checkLogin() with a call to your Spring Boot
   /api/auth/login endpoint when the backend is ready.
   On success the session is saved under the key "aurumAuth" — the same key
   assets/js/layout.js reads to guard every inner page.
   ===================================================================== */
(function () {
  'use strict';
  var AUTH_KEY = 'aurumAuth';
  var HOME = 'dashboard/dashboard.html';

  var ACCOUNTS = [
    { email: 'admin@aurumerp.com',    password: 'Aurum@123',    name: 'Admin User',    role: 'Administrator' },
    { email: 'manager@aurumerp.com',  password: 'Manager@123',  name: 'Store Manager', role: 'Store Manager' },
    { email: 'accounts@aurumerp.com', password: 'Accounts@123', name: 'Accounts Head', role: 'Accountant' }
  ];

  function $(s) { return document.querySelector(s); }
  function stored() {
    try { return JSON.parse(localStorage.getItem(AUTH_KEY) || sessionStorage.getItem(AUTH_KEY) || 'null'); } catch (e) { return null; }
  }

  /* only allow going back to a relative *.html page inside this project */
  function nextPage() {
    var n = new URLSearchParams(location.search).get('next') || '';
    return /^[\w\-&%.\/]+\.html$/.test(n) && n.indexOf('..') === -1 && n.charAt(0) !== '/' && n !== 'index.html' ? n : HOME;
  }

  if (stored()) { location.replace(nextPage()); return; }       // already signed in

  var form = $('#loginForm'), email = $('#loginEmail'), pw = $('#loginPassword'), msg = $('#loginMsg'), btn = $('#loginBtn');

  function showMsg(text, ok) {
    msg.textContent = text; msg.hidden = !text; msg.classList.toggle('ok', !!ok);
    if (text && !ok) { form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake'); }
  }
  function checkLogin(u, p) {
    u = u.trim().toLowerCase();
    return ACCOUNTS.filter(function (a) { return (a.email === u || a.email.split('@')[0] === u) && a.password === p; })[0] || null;
  }

  $('#togglePw').addEventListener('click', function () {
    var show = pw.type === 'password';
    pw.type = show ? 'text' : 'password'; this.textContent = show ? 'Hide' : 'Show'; this.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  });

  [].forEach.call(document.querySelectorAll('.lf-chip'), function (c) {
    c.addEventListener('click', function () { email.value = c.dataset.u; pw.value = c.dataset.p; showMsg(''); pw.focus(); });
  });

  $('#forgotLink').addEventListener('click', function (e) {
    e.preventDefault(); showMsg('Demo build: ask your administrator to reset the password.', true);
  });

  [email, pw].forEach(function (i) { i.addEventListener('input', function () { showMsg(''); }); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!email.value.trim()) { showMsg('Please enter your email or username.'); email.focus(); return; }
    if (!pw.value) { showMsg('Please enter your password.'); pw.focus(); return; }
    btn.classList.add('loading'); btn.disabled = true;
    setTimeout(function () {                                    // small delay = realistic feel
      var acc = checkLogin(email.value, pw.value);
      if (!acc) { btn.classList.remove('loading'); btn.disabled = false; showMsg('Incorrect email or password. Please try again.'); pw.select(); return; }
      var session = JSON.stringify({ name: acc.name, email: acc.email, role: acc.role, at: Date.now() });
      try {
        localStorage.removeItem(AUTH_KEY); sessionStorage.removeItem(AUTH_KEY);
        ($('#rememberMe').checked ? localStorage : sessionStorage).setItem(AUTH_KEY, session);
      } catch (err) { showMsg('Your browser blocked storage, so sign-in cannot be saved.'); btn.classList.remove('loading'); btn.disabled = false; return; }
      showMsg('Signed in. Opening your workspace…', true);
      location.replace(nextPage());
    }, 550);
  });

  email.focus();
})();
