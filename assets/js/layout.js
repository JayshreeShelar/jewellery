/* =====================================================================
   AURUM ERP — COMMON HEADER + SIDEBAR  (shared by every page)
   Lives in assets/js/nav-sidebar.js, which every page already loads, so the
   sidebar and header are now defined ONCE here. Edit the menu / header here
   and all pages update — no need to touch the HTML of each page.
   ===================================================================== */
const LAYOUT_NAV = [
  ['WORKSPACE', [['dashboard', '▦', 'Dashboard'], ['sales', '↗', 'Sales & Orders', '8'], ['purchase', '↙', 'Purchase'], ['inventory', '◇', 'Inventory & Products'], ['rates', '₹', 'Gold / Silver Rates'], ['karigar', '⚒', 'Karigar / Job Work', '3', 'orange']]],
  ['FINANCE', [['payments', '▤', 'Payments & Accounts'], ['expenses', '₹', 'Expenses'], ['gst', '▧', 'GST & Documents'], ['customers', '♙', 'Customers'], ['suppliers', '♧', 'Suppliers']]],
  ['INSIGHTS & ADMIN', [['reports', '▥', 'Reports'], ['users', '♙', 'Users & Roles'], ['settings', '⚙', 'Settings']]]
];
const layoutEsc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function layoutSidebar() {
  return `<div class="brand"><div class="brand-mark">✦</div><div class="brand-text"><strong>AURUM<span>ERP</span></strong><small>JEWELLERY MANAGEMENT</small></div><button class="collapse" id="collapseBtn" title="Collapse sidebar">‹</button></div>
<nav id="navigation">${LAYOUT_NAV.map(([label, items]) => `<div class="nav-label">${label}</div>` + items.map(([k, ic, t, badge, cls]) => `<button class="nav-item" data-page="${k}"><span>${ic}</span> ${layoutEsc(t)}${badge ? ` <em${cls ? ` class="${cls}"` : ''}>${badge}</em>` : ''}</button>`).join('')).join('')}</nav>
<div class="sidebar-bottom"><div class="help-icon">?</div><div><b>Need a hand?</b><small>Explore your demo workspace</small></div><span>↗</span></div>`;
}

function layoutAlerts() {
  const d = k => data[k] || [], n = (k, s) => d(k).filter(r => r.status === s).length;
  return [
    [n('karigar', 'Overdue'), '!', 'overdue karigar job(s)', 'Review metal reconciliation', 'karigar', '#f5e2dd', '#a44848'],
    [n('inventory', 'Low Stock'), '◇', 'product(s) low on stock', 'Check replenishment', 'inventory', '#f5e7c5', '#8d5b08'],
    [n('sales', 'Pending') + n('payments', 'Pending'), '₹', 'pending customer payment(s)', 'Follow up with customers', 'payments', '#faead0', '#a35e0a'],
    [n('purchase', 'Pending') + n('expenses', 'Pending'), '✓', 'approval(s) pending', 'Purchases and expenses', 'purchase', '#e4ecf3', '#455f77']
  ].filter(a => a[0] > 0);
}
function layoutHeader() {
  const al = layoutAlerts(), total = al.reduce((t, a) => t + a[0], 0);
  return `<button class="mobile-menu" id="mobileMenu" aria-label="Open menu">☰</button>
<div class="breadcrumbs"><span>Workspace</span><b>/</b><strong id="crumbTitle">Dashboard</strong></div>
<div class="lay-wrap top-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg><input id="globalSearch" type="search" autocomplete="off" placeholder="Search customers, invoices, products…" aria-label="Search"><kbd>/</kbd><div class="lay-menu lay-search-menu" id="searchMenu"></div></div>
<div class="top-actions"><span class="top-date">${layoutEsc(today)}</span><span class="demo-pill"><i></i> DEMO DATA</span>
<button class="icon-btn" id="rateTop" title="Today's rates">₹</button>
<div class="lay-wrap"><button class="icon-btn notification" id="notifyBtn" title="Notifications" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9a6 6 0 1 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>${total ? '<i></i>' : ''}</button>
 <div class="lay-menu lay-notify" id="notifyMenu"><div class="lay-menu-head"><b>Notifications</b><span>${total} need attention</span></div>${al.length ? al.map(a => `<button class="lay-item" data-lgoto="${a[4]}"><span class="lay-ico" style="background:${a[5]};color:${a[6]}">${a[1]}</span><span><b>${a[0]} ${a[2]}</b><small>${a[3]}</small></span></button>`).join('') : '<div class="lay-empty">You are all caught up.</div>'}</div></div>
<div class="lay-wrap top-user-wrap"><button class="top-user" id="adminMenuToggle" type="button" aria-haspopup="true" aria-expanded="false"><div class="avatar small">AS</div><div><b>Admin User</b><small>Admin</small></div><span class="admin-chevron">⌄</span></button>
 <div class="lay-menu admin-dropdown" id="adminDropdown"><div class="lay-menu-head"><b>Admin User</b><span>Administrator · admin@aurum.demo</span></div><button class="lay-item" data-lgoto="settings"><span class="lay-ico">⚙</span><span><b>Settings</b></span></button><button class="lay-item" data-lgoto="users"><span class="lay-ico">♙</span><span><b>Users &amp; Roles</b></span></button><button class="lay-item admin-logout" id="logoutButton" type="button"><span class="lay-ico out">↪</span><span><b>Logout</b></span></button></div></div></div>`;
}

function layoutSearchItems(q) {
  q = q.trim().toLowerCase(); if (!q) return [];
  const pages = LAYOUT_NAV.flatMap(g => g[1]).filter(i => i[2].toLowerCase().includes(q)).map(i => ({ t: i[2], s: 'Open module', k: i[0], ic: i[1] }));
  const recs = []; Object.keys(data).forEach(k => (data[k] || []).forEach(r => { if ([r.ref, r.name, r.detail].some(v => String(v || '').toLowerCase().includes(q))) recs.push({ t: r.name, s: `${r.ref} · ${(meta[k] || { title: k }).title}`, k, ic: iconBy[k] || '•' }) }));
  return pages.concat(recs).slice(0, 7);
}
function layoutClose() { $$('.lay-menu.show').forEach(m => m.classList.remove('show')); $$('[aria-expanded="true"]').forEach(b => b.setAttribute('aria-expanded', 'false')) }
function layoutGo(k) { layoutClose(); render(k); $('#sidebar').classList.remove('mobile-open'); $('#mobileOverlay').classList.remove('show') }
function layoutBind() {
  const toggle = (btn, menu) => btn.onclick = e => { e.stopPropagation(); const open = !menu.classList.contains('show'); layoutClose(); if (open) { menu.classList.add('show'); btn.setAttribute('aria-expanded', 'true') } };
  toggle($('#notifyBtn'), $('#notifyMenu')); toggle($('#adminMenuToggle'), $('#adminDropdown'));
  $$('[data-lgoto]').forEach(b => b.onclick = () => layoutGo(b.dataset.lgoto));
  $('#logoutButton').onclick = () => { layoutClose(); toast('Logged out (demo mode — no login screen yet).') };
  const inp = $('#globalSearch'), menu = $('#searchMenu');
  inp.oninput = () => { const r = layoutSearchItems(inp.value); menu.innerHTML = inp.value.trim() ? (r.length ? r.map(x => `<button class="lay-item" data-lgoto="${x.k}"><span class="lay-ico">${x.ic}</span><span><b>${layoutEsc(x.t)}</b><small>${layoutEsc(x.s)}</small></span></button>`).join('') : '<div class="lay-empty">No results found.</div>') : ''; menu.classList.toggle('show', !!inp.value.trim()); $$('#searchMenu [data-lgoto]').forEach(b => b.onclick = () => { inp.value = ''; layoutGo(b.dataset.lgoto) }) };
  inp.onkeydown = e => { if (e.key === 'Enter') { const f = $('#searchMenu [data-lgoto]'); if (f) { e.preventDefault(); inp.value = ''; layoutGo(f.dataset.lgoto) } } else if (e.key === 'Escape') { inp.value = ''; layoutClose(); inp.blur() } };
}
function renderLayout() {
  const sb = $('#sidebar'), hd = document.querySelector('header.topbar'); if (!sb || !hd) return;
  sb.innerHTML = layoutSidebar(); hd.innerHTML = layoutHeader(); layoutBind();
}
document.addEventListener('click', e => { if (!e.target.closest('.lay-wrap')) layoutClose() });
document.addEventListener('keydown', e => { if (e.key === 'Escape') layoutClose(); if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) { const i = $('#globalSearch'); if (i) { e.preventDefault(); i.focus() } } });
renderLayout();
/* ===================== END OF COMMON HEADER + SIDEBAR ===================== */