const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const money = n => '₹' + Number(n).toLocaleString('en-IN');
const today = '22 Oct 2026';
const data = {
  sales: [
    { ref: 'INV-2026-1042', name: 'Meera Joshi', detail: 'Gold necklace · 22K', date: '22 Oct 2026', amount: 184500, status: 'Paid' },
    { ref: 'SO-2026-1041', name: 'Shree Ganesh Jewellers', detail: 'Wholesale · 8 items', date: '22 Oct 2026', amount: 326000, status: 'Pending' },
    { ref: 'INV-2026-1040', name: 'Rohan Kulkarni', detail: 'Gold ring · 18K', date: '21 Oct 2026', amount: 42800, status: 'Paid' },
    { ref: 'SO-2026-1039', name: 'Anaya Patil', detail: 'Silver anklets · 925', date: '21 Oct 2026', amount: 12800, status: 'In Progress' },
    { ref: 'INV-2026-1038', name: 'Kavita Deshmukh', detail: 'Gold bangles · 22K', date: '20 Oct 2026', amount: 97200, status: 'Delivered' },
    { ref: 'SO-2026-1037', name: 'Omkar Gold House', detail: 'Wholesale · 12 items', date: '20 Oct 2026', amount: 418000, status: 'Confirmed' }],
  purchase: [
    { ref: 'PUR-2026-0261', name: 'Shree Gold Traders', detail: 'Gold bullion · 24K', date: '22 Oct 2026', amount: 528000, status: 'Pending' },
    { ref: 'PUR-2026-0260', name: 'Silverline Metals', detail: 'Silver grain · 999', date: '21 Oct 2026', amount: 86200, status: 'Completed' },
    { ref: 'PUR-2026-0259', name: 'Mahalaxmi Stones', detail: 'Gemstones & findings', date: '20 Oct 2026', amount: 46500, status: 'Processing' },
    { ref: 'PUR-2026-0258', name: 'Raj Refinery', detail: 'Recycled gold · 22K', date: '19 Oct 2026', amount: 274000, status: 'Completed' }],
  inventory: [
    { ref: 'AU-RNG-2201', name: 'Classic Gold Ring', detail: 'Gold · 22K · 3.8 g', date: 'Main Showroom', amount: 24, status: 'In Stock' },
    { ref: 'AU-NCK-1805', name: 'Temple Necklace', detail: 'Gold · 22K · 28.4 g', date: 'Vault A', amount: 6, status: 'Low Stock' },
    { ref: 'AG-ANK-9250', name: 'Silver Anklets', detail: 'Silver · 925 · 42 g', date: 'Main Showroom', amount: 38, status: 'In Stock' },
    { ref: 'AU-BNG-2208', name: 'Gold Bangles', detail: 'Gold · 22K · 18.6 g', date: 'Workshop', amount: 0, status: 'Low Stock' },
    { ref: 'AG-CHM-9251', name: 'Silver Chain', detail: 'Silver · 925 · 16 g', date: 'Main Showroom', amount: 52, status: 'In Stock' },
    { ref: 'AU-ER-1809', name: 'Diamond Stud Earrings', detail: 'Gold · 18K · 4.2 g', date: 'Vault A', amount: 12, status: 'In Stock' }],
  karigar: [
    { ref: 'JOB-0264', name: 'Suresh Pawar', detail: 'Temple necklace · 22K', date: 'Due 24 Oct', amount: 32.5, status: 'In Progress' },
    { ref: 'JOB-0263', name: 'Mahesh Sonawane', detail: 'Gold bangles · 22K', date: 'Due 23 Oct', amount: 18.6, status: 'Pending' },
    { ref: 'JOB-0262', name: 'Ravi Shinde', detail: 'Ring set · 18K', date: 'Due 21 Oct', amount: 12.2, status: 'Overdue' },
    { ref: 'JOB-0261', name: 'Ganesh Jadhav', detail: 'Silver anklets · 925', date: 'Due 25 Oct', amount: 42, status: 'In Progress' }],
  payments: [
    { ref: 'PAY-0871', name: 'Meera Joshi', detail: 'Customer receipt · UPI', date: '22 Oct 2026', amount: 184500, status: 'Paid' },
    { ref: 'PAY-0870', name: 'Silverline Metals', detail: 'Supplier payment · NEFT', date: '21 Oct 2026', amount: 50000, status: 'Paid' },
    { ref: 'PAY-0869', name: 'Shree Ganesh Jewellers', detail: 'Customer advance · Bank', date: '21 Oct 2026', amount: 75000, status: 'Pending' },
    { ref: 'PAY-0868', name: 'Suresh Pawar', detail: 'Karigar labour · Cash', date: '20 Oct 2026', amount: 12500, status: 'Paid' }],
  customers: [
    { ref: 'CUS-0018', name: 'Meera Joshi', detail: 'Retail · Pune', date: 'Joined 2025', amount: 0, status: 'Active' },
    { ref: 'CUS-0017', name: 'Shree Ganesh Jewellers', detail: 'Wholesale · Pimpri', date: 'Joined 2024', amount: 326000, status: 'Pending' },
    { ref: 'CUS-0016', name: 'Rohan Kulkarni', detail: 'Retail · Chinchwad', date: 'Joined 2025', amount: 0, status: 'Active' },
    { ref: 'CUS-0015', name: 'Omkar Gold House', detail: 'Wholesale · Pune', date: 'Joined 2023', amount: 418000, status: 'Overdue' },
    { ref: 'CUS-0014', name: 'Anaya Patil', detail: 'Retail · Nigdi', date: 'Joined 2026', amount: 12800, status: 'Pending' }],
  suppliers: [
    { ref: 'SUP-0012', name: 'Shree Gold Traders', detail: 'Gold bullion · Pune', date: 'Terms: 15 days', amount: 528000, status: 'Pending' },
    { ref: 'SUP-0011', name: 'Silverline Metals', detail: 'Silver supplier · Mumbai', date: 'Terms: 30 days', amount: 36200, status: 'Active' },
    { ref: 'SUP-0010', name: 'Mahalaxmi Stones', detail: 'Stones & findings · Pune', date: 'Terms: 15 days', amount: 46500, status: 'Pending' },
    { ref: 'SUP-0009', name: 'Raj Refinery', detail: 'Gold refining · Mumbai', date: 'Terms: 7 days', amount: 0, status: 'Active' }],
  gst: [
    { ref: 'GST-1042', name: 'Meera Joshi', detail: 'Sales tax invoice', date: '22 Oct 2026', amount: 184500, status: 'Completed' },
    { ref: 'GST-1038', name: 'Kavita Deshmukh', detail: 'Sales tax invoice', date: '20 Oct 2026', amount: 97200, status: 'Completed' },
    { ref: 'GST-P261', name: 'Shree Gold Traders', detail: 'Purchase invoice', date: '22 Oct 2026', amount: 528000, status: 'Pending' }],
  expenses: [
    { ref: 'EXP-2026-0184', name: 'Showroom Electricity', detail: 'Utilities · Main Showroom', date: '22 Oct 2026', amount: 8450, status: 'Paid' },
    { ref: 'EXP-2026-0183', name: 'Workshop Supplies', detail: 'Consumables · Workshop', date: '21 Oct 2026', amount: 12600, status: 'Pending' },
    { ref: 'EXP-2026-0182', name: 'Courier & Delivery', detail: 'Logistics · Dispatch', date: '20 Oct 2026', amount: 2350, status: 'Paid' }]
};
// Keep demo records between page refreshes; storage errors should never break the UI.
try { const saved = JSON.parse(localStorage.getItem('aurumDemoRecords') || '{}'); Object.keys(saved).forEach(k => { if (Array.isArray(saved[k])) data[k] = saved[k]; }); } catch (e) { console.warn('Demo storage unavailable; using sample data.', e); }
function saveDemoData() { try { localStorage.setItem('aurumDemoRecords', JSON.stringify(data)); } catch (e) { console.warn('Could not persist demo records.', e); } }
const meta = {
  dashboard: { title: 'Dashboard', desc: 'Here’s what’s happening with your jewellery business today.', button: 'Download report' },
  sales: { title: 'Sales & Orders', desc: 'Manage customer orders, invoices, deliveries and returns.', button: '+ Create sales order' },
  purchase: { title: 'Purchase Management', desc: 'Track suppliers, purchase orders, goods receipts and bills.', button: '+ New purchase' },
  inventory: { title: 'Inventory & Products', desc: 'Track jewellery by SKU, tag, metal, purity, weight and location.', button: '+ Add product' },
  rates: { title: 'Gold / Silver Rates', desc: 'Manage daily metal rates and review rate history.', button: '+ Update rates' },
  karigar: { title: 'Karigar / Job Work', desc: 'Manage metal issued, work-in-progress, returns and labour settlements.', button: '+ Create job work' },
  payments: { title: 'Payments & Accounts', desc: 'Track customer receipts, supplier payments, expenses and balances.', button: '+ Record payment' },
  gst: { title: 'GST & Documents', desc: 'Review tax invoices, purchase documents and compliance summaries.', button: '+ Create document' },
  customers: { title: 'Customers', desc: 'Manage retail and wholesale customers, credit terms and outstanding balances.', button: '+ Add customer' },
  suppliers: { title: 'Suppliers', desc: 'Maintain supplier details, payment terms and outstanding balances.', button: '+ Add supplier' },
  reports: { title: 'Reports & Analytics', desc: 'Review sales, stock, metal custody and business performance.', button: 'Export report' },
  users: { title: 'Users & Roles', desc: 'Manage team access and permissions by role.', button: '+ Add user' },
  settings: { title: 'Settings', desc: 'Configure company details, branches, document numbering and preferences.', button: 'Save settings' },
  expenses: { title: 'Expenses', desc: 'Record operating costs and review business expenses by category.', button: '+ Add expense' }
};
const columns = {
  sales: ['Reference', 'Customer / Order', 'Date', 'Total Amount', 'Status'],
  purchase: ['Purchase Ref.', 'Supplier / Items', 'Date', 'Total Amount', 'Status'],
  inventory: ['SKU / Tag', 'Product Details', 'Location', 'Available Qty', 'Stock Status'],
  karigar: ['Job ID', 'Karigar / Work', 'Due Date', 'Metal Weight', 'Job Status'],
  payments: ['Payment Ref.', 'Party / Method', 'Date', 'Amount', 'Status'],
  customers: ['Customer ID', 'Customer / Type', 'Relationship', 'Outstanding', 'Status'],
  suppliers: ['Supplier ID', 'Supplier / Category', 'Terms', 'Outstanding', 'Status'],
  gst: ['Document ID', 'Party / Document', 'Date', 'Taxable / Total', 'Status'],
  expenses: ['Expense ID', 'Expense / Category', 'Date', 'Amount', 'Status']
};
const iconBy = { sales: '↗', purchase: '↙', inventory: '◇', rates: '₹', karigar: '⚒', payments: '▤', gst: '▧', customers: '♙', suppliers: '♧', reports: '▥', users: '♙', settings: '⚙', expenses: '₹' };
function statusClass(s) { let x = s.toLowerCase().replaceAll(' ', '-'); if (['in-stock', 'paid', 'completed', 'delivered', 'active'].includes(x)) return x; if (['pending', 'in-progress', 'processing', 'low-stock', 'confirmed', 'ready'].includes(x)) return x; if (['overdue', 'cancelled', 'low'].includes(x)) return x; return 'draft' }
function tableHTML(key, rows = data[key] || []) { let heads = columns[key] || ['Reference', 'Name', 'Details', 'Value', 'Status']; return `<div class="table-wrap"><table><thead><tr>${heads.map(h => `<th>${h}</th>`).join('')}<th>Action</th></tr></thead><tbody>${rows.map((r, i) => `<tr><td><div class="main-cell">${r.ref}</div></td><td><div class="main-cell">${r.name}</div><div class="sub-cell">${r.detail}</div></td><td>${r.date}</td><td>${key === 'inventory' ? r.amount + ' pcs' : key === 'karigar' ? r.amount + ' g' : money(r.amount)}</td><td><span class="status ${statusClass(r.status)}">${r.status}</span></td><td><button class="text-link row-view" data-key="${key}" data-index="${i}">View ↗</button></td></tr>`).join('')}</tbody></table></div><div class="table-footer"><span>Showing ${rows.length} sample records · Demo data</span><span>Page 1 of 1</span></div>` }
function pageHead(key) { let m = meta[key]; return `<div class="page-head"><div><div class="eyebrow">AURUM ERP / ${key === 'dashboard' ? 'OVERVIEW' : key.toUpperCase()}</div><h1>${m.title}</h1><p>${m.desc}</p></div><div class="head-actions">${key === 'dashboard' ? '<button class="btn secondary" id="dateBtn">▦ &nbsp; Oct 2026</button>' : ''}<button class="btn primary" id="primaryAction">${m.button}</button></div></div>` }
function stat(label, value, icon, trend, foot, accent = 'var(--primary)') { return `<div class="stat-card" style="border-top-color:${accent}"><div class="stat-top"><span class="stat-label">${label}</span><span class="stat-icon">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-bottom"><span class="trend">${trend}</span><span>${foot}</span></div></div>` }
/* =====================================================================
   AURUM ERP — DASHBOARD CONTENT  (replace the old `function dashboard(){...}`
   in assets/js/nav-sidebar.js with everything in this file)
   - KPI cards, filters (period / branch / metal), charts, tables, alerts
   - Snapshot numbers are derived from the saved `data` records;
     the daily trend ledger is generated demo data (no backend yet).
   ===================================================================== */
const dbMoney = n => { n = Number(n) || 0; const a = Math.abs(n); return a >= 1e7 ? '₹' + (n / 1e7).toFixed(2) + ' Cr' : a >= 1e5 ? '₹' + (n / 1e5).toFixed(2) + ' L' : money(Math.round(n)) };
const dbAxis = n => n >= 1e7 ? +(n / 1e7).toFixed(1) + 'Cr' : n >= 1e5 ? +(n / 1e5).toFixed(1) + 'L' : n >= 1e3 ? +(n / 1e3).toFixed(0) + 'K' : String(n);
const dbPct = (a, b) => b ? ((a - b) / b * 100) : 0;
const dbRand = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296 };
const DB_END = new Date(2026, 9, 22), DB_DAYS = 420, DB_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DB_BRANCHES = ['Main Showroom', 'Chinchwad Branch', 'Wholesale Counter'];
const DB_CATS = [
  { k: 'Gold Rings', m: 'Gold', c: '#b77a12', sh: .17, mg: .16 },
  { k: 'Necklaces', m: 'Gold', c: '#30271c', sh: .21, mg: .12 },
  { k: 'Bangles', m: 'Gold', c: '#d3a44b', sh: .18, mg: .11 },
  { k: 'Chains & Others', m: 'Gold', c: '#c77a65', sh: .10, mg: .14 },
  { k: 'Silver Articles', m: 'Silver', c: '#5d7790', sh: .14, mg: .22 },
  { k: 'Diamond Jewellery', m: 'Diamond', c: '#6f8f7a', sh: .20, mg: .24 }];
const DB_PERIODS = { today: { l: 'Today', n: 1, p: 'yesterday' }, '7d': { l: '7 Days', n: 7, p: 'previous 7 days' }, '30d': { l: '30 Days', n: 30, p: 'previous 30 days' }, month: { l: 'This Month', n: 22, p: 'previous 22 days' }, fy: { l: 'FY 2026-27', n: 205, p: 'previous period' } };
const dbState = { period: 'month', branch: 'All', metal: 'All', oStatus: 'All', oQuery: '', iStatus: 'All' };
let dbLedger = null, dbChartPts = [];

/* ---------- demo ledger: day × branch × category ---------- */
function dbBuild() {
  if (dbLedger) return dbLedger;
  const r = dbRand(2026), rows = [], brSh = [.5, .3, .2], brPu = [.7, .15, .15];
  for (let i = 0; i < DB_DAYS; i++) {
    const dt = new Date(DB_END); dt.setDate(DB_END.getDate() - (DB_DAYS - 1 - i));
    const dow = dt.getDay(), wk = (dow === 0 || dow === 6) ? 1.22 : 1, gr = 1 + i / DB_DAYS * .35;
    const sBase = 470000 * wk * gr * (.82 + r() * .36), pBase = 300000 * gr * (i % 5 === 0 ? 2.1 : .55) * (.8 + r() * .4);
    DB_BRANCHES.forEach((br, b) => DB_CATS.forEach(c => {
      const s = sBase * c.sh * brSh[b] * (.85 + r() * .3), p = pBase * (c.m === 'Gold' ? c.sh * 1.25 : c.sh * .55) * brPu[b] * (.85 + r() * .3);
      rows.push({ i, d: dt, br, cat: c.k, m: c.m, s, p, pr: s * c.mg, c: s * (.78 + r() * .14) });
    }));
  }
  // anchor today's total to the headline demo figure (₹6,84,500) and yesterday to +12.8%
  [[DB_DAYS - 1, 684500], [DB_DAYS - 2, 684500 / 1.128]].forEach(([i, target]) => {
    const day = rows.filter(x => x.i === i), tot = day.reduce((t, x) => t + x.s, 0), f = target / tot;
    day.forEach(x => { x.s *= f; x.pr *= f; x.c *= f });
  });
  return dbLedger = rows;
}
const dbMatch = (r, st) => (st.branch === 'All' || r.br === st.branch) && (st.metal === 'All' || r.m === st.metal);
const dbSum = (a, k) => a.reduce((t, r) => t + r[k], 0);
const dbLabel = d => `${String(d.getDate()).padStart(2, '0')} ${DB_MONTHS[d.getMonth()]}`;

function dbCompute(st) {
  const L = dbBuild(), n = DB_PERIODS[st.period].n;
  const cur = L.filter(r => r.i >= DB_DAYS - n && dbMatch(r, st)), prev = L.filter(r => r.i >= DB_DAYS - 2 * n && r.i < DB_DAYS - n && dbMatch(r, st));
  // trend series (min 7 days so “Today” still shows a chart); bucket long ranges
  const w = Math.max(n, 7), days = [];
  for (let i = DB_DAYS - w; i < DB_DAYS; i++)days.push({ i, s: 0, p: 0, pr: 0, c: 0, d: null });
  L.forEach(r => { if (r.i >= DB_DAYS - w && dbMatch(r, st)) { const x = days[r.i - (DB_DAYS - w)]; x.s += r.s; x.p += r.p; x.pr += r.pr; x.c += r.c; x.d = r.d } });
  const size = w > 31 ? Math.ceil(w / 30) : 1, pts = [];
  for (let k = 0; k < days.length; k += size) { const g = days.slice(k, k + size); pts.push({ label: dbLabel(g[0].d) + (size > 1 ? ' – ' + dbLabel(g[g.length - 1].d) : ''), short: dbLabel(g[0].d), s: dbSum(g, 's'), p: dbSum(g, 'p'), pr: dbSum(g, 'pr'), c: dbSum(g, 'c') }) }
  const byCat = DB_CATS.map(c => ({ ...c, v: dbSum(cur.filter(r => r.cat === c.k), 's') })).filter(c => st.metal === 'All' || c.m === st.metal);
  const byBr = DB_BRANCHES.map(b => ({ k: b, v: dbSum(L.filter(r => r.i >= DB_DAYS - n && r.br === b && (st.metal === 'All' || r.m === st.metal)), 's') }));
  return {
    n, cur, prev, pts, byCat, byBr,
    s: dbSum(cur, 's'), ps: dbSum(prev, 's'), p: dbSum(cur, 'p'), pp: dbSum(prev, 'p'),
    pr: dbSum(cur, 'pr'), ppr: dbSum(prev, 'pr'), c: dbSum(cur, 'c'), pc: dbSum(prev, 'c')
  };
}

/* ---------- snapshot figures derived from saved records ---------- */
function dbSnap() {
  const sum = (a, f = x => x.amount) => (a || []).reduce((t, x) => t + (Number(f(x)) || 0), 0), st = (a, s) => (a || []).filter(x => x.status === s);
  const goldG = 2480, silverG = 18600, stones = 420000, rG = 12082, rS = 155.85;
  return {
    dues: sum(data.customers), duesOverdue: sum(st(data.customers, 'Overdue')),
    payables: sum(data.suppliers),
    jobs: (data.karigar || []).filter(j => j.status !== 'Completed'), overdue: st(data.karigar, 'Overdue'),
    low: (data.inventory || []).filter(x => x.status === 'Low Stock'),
    pendSales: st(data.sales, 'Pending'), pendPay: st(data.payments, 'Pending'), pendExp: st(data.expenses, 'Pending'), pendPur: st(data.purchase, 'Pending'),
    goldG, silverG, stones, goldV: goldG * rG, silverV: silverG * rS, stockV: goldG * rG + silverG * rS + stones
  };
}

/* ---------- small SVG / HTML builders ---------- */
function dbSpark(vals, color) {
  if (!vals.length) return ''; const W = 120, H = 34, mx = Math.max(...vals), mn = Math.min(...vals), rg = (mx - mn) || 1;
  const xy = vals.map((v, i) => [vals.length > 1 ? i / (vals.length - 1) * W : W / 2, H - 3 - ((v - mn) / rg) * (H - 8)]);
  const line = xy.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  return `<svg class="db-spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,${H} ${line} ${W},${H}" fill="${color}" opacity=".12"/><polyline points="${line}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>`;
}
function dbWalk(end, seed, n = 14, vol = .06) { const r = dbRand(seed), a = []; let v = end * (1 - vol * 2); for (let i = 0; i < n; i++) { v = v * (1 + (r() - .42) * vol); a.push(v) } const f = end / a[n - 1]; return a.map(x => x * f) }
function dbKpi(label, value, icon, trendPct, foot, spark, color, opts = {}) {
  const up = trendPct >= 0, t = trendPct === null ? `<span class="trend flat">${opts.chip || ''}</span>` : `<span class="trend ${(opts.invert ? !up : up) ? '' : 'down'}">${up ? '↑' : '↓'} ${Math.abs(trendPct).toFixed(1)}%</span>`;
  return `<div class="stat-card db-kpi"${opts.goto ? ` data-goto="${opts.goto}" role="button" tabindex="0"` : ''}><div class="stat-top"><span class="stat-label">${label}</span><span class="stat-icon"${opts.bg ? ` style="background:${opts.bg};color:${opts.fg}"` : ''}>${icon}</span></div><div class="stat-value">${value}</div><div class="db-kpi-foot"><div class="stat-bottom">${t}<span>${foot}</span></div>${dbSpark(spark, color)}</div></div>`;
}
function dbNice(max) { const e = Math.pow(10, Math.floor(Math.log10(max || 1))), f = max / e, m = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10; return m * e }

function dbTrendChart(pts) {
  dbChartPts = []; const W = 640, H = 250, L = 46, R = 14, T = 14, B = 30, iw = W - L - R, ih = H - T - B;
  const top = dbNice(Math.max(...pts.map(p => Math.max(p.s, p.p)), 1)), step = top / 4;
  const X = i => L + (pts.length > 1 ? i / (pts.length - 1) * iw : iw / 2), Y = v => T + ih - (v / top) * ih;
  let g = ''; for (let k = 0; k <= 4; k++) { const y = Y(step * k); g += `<line x1="${L}" x2="${W - R}" y1="${y}" y2="${y}" class="db-grid"/><text x="${L - 8}" y="${y + 3}" text-anchor="end">${dbAxis(step * k)}</text>` }
  const every = Math.max(1, Math.ceil(pts.length / 7)); let xl = ''; pts.forEach((p, i) => { if ((i % every === 0 && (pts.length - 1 - i >= every / 2 || i === pts.length - 1)) || i === pts.length - 1) xl += `<text x="${X(i)}" y="${H - 9}" text-anchor="middle">${p.short}</text>`; dbChartPts.push({ x: X(i), ys: Y(p.s), yp: Y(p.p), p }) });
  const sl = pts.map((p, i) => `${X(i).toFixed(1)},${Y(p.s).toFixed(1)}`).join(' '), pl = pts.map((p, i) => `${X(i).toFixed(1)},${Y(p.p).toFixed(1)}`).join(' ');
  return `<div class="db-chart-wrap" id="dbTrend"><svg class="db-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Sales versus purchases trend">${g}${xl}<polygon points="${L},${T + ih} ${sl} ${X(pts.length - 1)},${T + ih}" fill="#b77a12" opacity=".10"/><polyline points="${pl}" fill="none" stroke="#30271c" stroke-width="2" stroke-dasharray="5 4" stroke-linejoin="round" stroke-linecap="round"/><polyline points="${sl}" fill="none" stroke="#b77a12" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><line class="db-guide" x1="0" x2="0" y1="${T}" y2="${T + ih}"/><circle class="db-dot s" r="4.5" cx="0" cy="0"/><circle class="db-dot p" r="4" cx="0" cy="0"/></svg><div class="db-tip" id="dbTip"></div></div>`;
}
function dbDonut(cats) {
  const tot = dbSum(cats, 'v') || 1; let cum = 0;
  const arcs = cats.map(c => { const p = c.v / tot * 100, a = `<circle cx="21" cy="21" r="15.9155" fill="none" stroke="${c.c}" stroke-width="6" stroke-dasharray="${Math.max(p - .6, 0).toFixed(2)} ${(100 - Math.max(p - .6, 0)).toFixed(2)}" stroke-dashoffset="${(25 - cum).toFixed(2)}"><title>${c.k}: ${dbMoney(c.v)} (${p.toFixed(1)}%)</title></circle>`; cum += p; return a }).join('');
  return `<div class="db-donut-wrap"><div class="db-donut"><svg viewBox="0 0 42 42" role="img" aria-label="Sales by category"><circle cx="21" cy="21" r="15.9155" fill="none" stroke="#f0e6d6" stroke-width="6"/>${arcs}</svg><div class="db-donut-c"><b>${dbMoney(tot)}</b><small>Total sales</small></div></div><ul class="db-legend">${cats.map(c => `<li><i style="background:${c.c}"></i><span>${c.k}</span><b>${(c.v / tot * 100).toFixed(1)}%</b><em>${dbMoney(c.v)}</em></li>`).join('')}</ul></div>`;
}
function dbBars(items, sel) {
  const mx = Math.max(...items.map(i => i.v), 1);
  return `<div class="db-hbars">${items.map(i => `<div class="db-hbar ${sel === i.k ? 'sel' : ''}"><div class="db-hbar-top"><span>${i.k}</span><b>${dbMoney(i.v)}</b></div><div class="db-track"><i style="width:${(i.v / mx * 100).toFixed(1)}%;background:${i.c || '#b77a12'}"></i></div></div>`).join('')}</div>`;
}
function dbStack(items) {
  const tot = dbSum(items, 'v') || 1;
  return `<div class="db-stack">${items.map(i => `<i style="width:${i.v / tot * 100}%;background:${i.c}" title="${i.k}: ${dbMoney(i.v)}"></i>`).join('')}</div><ul class="db-legend slim">${items.map(i => `<li><i style="background:${i.c}"></i><span>${i.k}</span><b>${(i.v / tot * 100).toFixed(0)}%</b><em>${dbMoney(i.v)}</em></li>`).join('')}</ul>`;
}
function dbCols(items) {
  const mx = Math.max(...items.map(i => i.v), 1);
  return `<div class="db-cols">${items.map(i => `<div class="db-col"><b>${dbMoney(i.v)}</b><div class="db-col-bar"><i style="height:${Math.max(i.v / mx * 100, 4).toFixed(1)}%;background:${i.c}"></i></div><span>${i.k}</span></div>`).join('')}</div>`;
}
const dbParse = s => { const m = String(s || '').match(/(\d{1,2})\s+([A-Za-z]{3})\w*\s+(\d{4})/); if (m) return new Date(+m[3], DB_MONTHS.indexOf(m[2]), +m[1]); const iso = String(s || '').match(/^(\d{4})-(\d{2})-(\d{2})$/); return iso ? new Date(+iso[1], +iso[2] - 1, +iso[3]) : new Date(DB_END) };
const dbDayIdx = d => DB_DAYS - 1 - Math.round((DB_END - new Date(d.getFullYear(), d.getMonth(), d.getDate())) / 864e5);

/* ---------- KPI cards (always "This Month") ---------- */
const dbKpiState = { period: 'month', branch: 'All', metal: 'All' };
function dbKpis() {
  const c = dbCompute(dbKpiState), sn = dbSnap(), sp = k => c.pts.map(p => p[k]), pv = 'vs previous 22 days';
  const cards = [
    ['Total Sales', dbMoney(c.s), '↗', dbPct(c.s, c.ps), pv, sp('s'), '#b77a12', 'sales', '#f5e7c5', '#8d5b08'],
    ['Purchases', dbMoney(c.p), '↙', dbPct(c.p, c.pp), pv, sp('p'), '#30271c', 'purchase', '#e9e4dc', '#30271c'],
    ['Gross Profit', dbMoney(c.pr), '◈', dbPct(c.pr, c.ppr), (c.s ? (c.pr / c.s * 100).toFixed(1) : 0) + '% margin', sp('pr'), '#4f8a68', 'reports', '#e1f0e6', '#3d7650'],
    ['Collections', dbMoney(c.c), '▤', dbPct(c.c, c.pc), (c.s ? (c.c / c.s * 100).toFixed(0) : 0) + '% of sales', sp('c'), '#5d7790', 'payments', '#e4ecf3', '#455f77']
  ].map(([l, v, ic, t, f, spk, col, g, bg, fg]) => dbKpi(l, v, ic, t, f, spk, col, { goto: g, bg, fg }));
  const snaps = [
    ['Customer Dues', dbMoney(sn.dues), '♙', dbMoney(sn.duesOverdue) + ' overdue', `${(data.customers || []).filter(x => x.amount > 0).length} customers owe`, dbWalk(sn.dues, 11), '#c77a65', 'customers', '#f7e4de', '#a4553f'],
    ['Supplier Payables', dbMoney(sn.payables), '♧', 'Due soon', `${(data.suppliers || []).filter(x => x.amount > 0).length} suppliers to pay`, dbWalk(sn.payables, 12), '#8d5b08', 'suppliers', '#f5e7c5', '#8d5b08'],
    ['Stock Valuation', dbMoney(sn.stockV), '◇', 'Live rates', `Gold ${(sn.goldG / 1000).toFixed(2)} kg · Silver ${(sn.silverG / 1000).toFixed(1)} kg`, dbWalk(sn.stockV, 13, 14, .03), '#d3a44b', 'inventory', '#faf0d3', '#9b6a17'],
    ['Active Job Work', sn.jobs.length + ' jobs', '⚒', sn.overdue.length ? sn.overdue.length + ' overdue' : 'On track', `${sn.jobs.reduce((t, j) => t + Number(j.amount || 0), 0).toFixed(1)} g issued`, dbWalk(Math.max(sn.jobs.length, 1), 14, 14, .12), '#565a80', 'karigar', '#e7e6f0', '#454a73']
  ].map(([l, v, ic, chip, f, spk, col, g, bg, fg]) => dbKpi(l, v, ic, null, f, spk, col, { goto: g, chip, bg, fg }));
  return cards.concat(snaps).join('');
}

/* ---------- analytics charts (re-render with the filters) ---------- */
function dbLive() {
  const st = dbState, c = dbCompute(st), sn = dbSnap(), P = DB_PERIODS[st.period];
  const modes = [['Cash', '#b77a12', .22], ['UPI', '#30271c', .39], ['Card', '#6f8f7a', .15], ['Bank / NEFT', '#5d7790', .24]].map(([k, col, s]) => ({ k, c: col, v: c.c * s }));
  const ageing = [['0–30 d', '#6f8f7a', .46], ['31–60 d', '#d3a44b', .28], ['61–90 d', '#c77a65', .16], ['90+ d', '#a44848', .10]].map(([k, col, s]) => ({ k, c: col, v: sn.dues * s }));
  const best = [...c.pts].sort((a, b) => b.s - a.s)[0] || { short: '—', s: 0 };
  return `<div class="db-row db-row-main">
 <section class="panel db-glow"><div class="panel-head"><div><h2>Sales vs Purchases</h2><p>${P.l} · ${st.branch === 'All' ? 'All branches' : st.branch} · ${st.metal === 'All' ? 'All metals' : st.metal}</p></div><div class="db-keys"><span><i style="background:#b77a12"></i>Sales</span><span><i class="dash"></i>Purchases</span></div></div><div class="panel-body">${dbTrendChart(c.pts)}<div class="db-insights"><div><small>Total sales</small><b>${dbMoney(c.s)}</b></div><div><small>Peak ${c.n > 31 ? 'period' : 'day'}</small><b>${best.short} · ${dbMoney(best.s)}</b></div><div><small>Avg. per day</small><b>${dbMoney(c.s / c.n)}</b></div></div></div></section>
 <section class="panel"><div class="panel-head"><div><h2>Sales by Category</h2><p>Share of revenue · ${P.l}</p></div></div><div class="panel-body">${dbDonut(c.byCat)}</div></section>
</div>
<div class="db-row db-row-3">
 <section class="panel"><div class="panel-head"><div><h2>Branch Performance</h2><p>Sales by showroom</p></div></div><div class="panel-body">${dbBars(c.byBr, st.branch)}</div></section>
 <section class="panel"><div class="panel-head"><div><h2>Payment Modes</h2><p>${dbMoney(c.c)} collected</p></div></div><div class="panel-body">${dbStack(modes)}</div></section>
 <section class="panel"><div class="panel-head"><div><h2>Receivables Ageing</h2><p>Outstanding ${dbMoney(sn.dues)} · demo split</p></div><button class="text-link" data-goto="customers">Customers ↗</button></div><div class="panel-body">${dbCols(ageing)}</div></section>
</div>`;
}

/* ---------- compact tables ---------- */
const dbPill = s => `<span class="status ${statusClass(s)}">${s}</span>`;
function dbTable(heads, rows, empty) {
  if (!rows.length) return `<div class="empty-note">${empty}</div>`;
  return `<div class="table-wrap"><table class="db-table"><thead><tr>${heads.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
}
function dbOrdersHTML() {
  const st = dbState, q = st.oQuery.toLowerCase();
  const rows = (data.sales || []).filter(r => (st.oStatus === 'All' || r.status === st.oStatus) && (!q || Object.values(r).some(v => String(v).toLowerCase().includes(q)))).slice(0, 6)
    .map((r, i) => `<tr data-toast="${r.ref} · ${r.name} · ${money(r.amount)}"><td><div class="db-avatar">${r.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div></td><td><div class="main-cell">${r.name}</div><div class="sub-cell">${r.ref} · ${r.detail}</div></td><td>${r.date.replace(' 2026', '')}</td><td class="amt">${money(r.amount)}</td><td>${dbPill(r.status)}</td></tr>`);
  return dbTable(['', 'Customer / Order', 'Date', 'Amount', 'Status'], rows, 'No orders match the search or status.');
}
function dbInvHTML() {
  const f = dbState.iStatus, mx = Math.max(...(data.inventory || []).map(x => x.amount), 1);
  const rows = [...(data.inventory || [])].filter(r => f === 'All' || r.status === f).sort((a, b) => (a.status === 'Low Stock' ? 0 : 1) - (b.status === 'Low Stock' ? 0 : 1)).slice(0, 6)
    .map(r => `<tr data-toast="${r.ref} · ${r.name} · ${r.amount} pcs"><td><div class="main-cell">${r.name}</div><div class="sub-cell">${r.ref} · ${r.date}</div></td><td><div class="db-qty"><span>${r.amount} pcs</span><i><b class="${r.status === 'Low Stock' ? 'low' : ''}" style="width:${Math.max(r.amount / mx * 100, 4)}%"></b></i></div></td><td>${dbPill(r.status)}</td></tr>`);
  return dbTable(['Product', 'Stock', 'Status'], rows, 'No products in this stock status.');
}
function dbJobsHTML() {
  const rows = (data.karigar || []).slice(0, 5).map(r => `<tr data-toast="${r.ref} · ${r.name} · ${r.status}"><td><div class="main-cell">${r.name}</div><div class="sub-cell">${r.ref} · ${r.detail}</div></td><td>${r.date.replace('Due ', '')}</td><td class="amt">${r.amount} g</td><td>${dbPill(r.status)}</td></tr>`);
  return dbTable(['Karigar / Job', 'Due', 'Weight', 'Status'], rows, 'No active jobs.');
}
function dbCustomers() {
  const m = {}; (data.sales || []).forEach(r => { m[r.name] = (m[r.name] || 0) + Number(r.amount || 0) });
  const list = Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, 5), mx = list[0] ? list[0][1] : 1;
  return list.map(([n, v], i) => `<div class="db-cust"><span class="db-rank r${i + 1}">${i + 1}</span><div class="db-cust-main"><div class="db-hbar-top"><b>${n}</b><span>${dbMoney(v)}</span></div><div class="db-track"><i style="width:${(v / mx * 100).toFixed(1)}%"></i></div></div></div>`).join('') || '<div class="empty-note">No sales yet.</div>';
}
function dbAttention() {
  const sn = dbSnap(), items = [
    [sn.overdue.length, '!', 'overdue karigar job' + (sn.overdue.length === 1 ? '' : 's'), 'karigar', '#f5e2dd', '#a44848'],
    [sn.pendSales.length + sn.pendPay.length, '₹', 'pending customer payment' + (sn.pendSales.length + sn.pendPay.length === 1 ? '' : 's'), 'payments', '#faead0', '#a35e0a'],
    [sn.low.length, '◇', 'product' + (sn.low.length === 1 ? '' : 's') + ' low on stock', 'inventory', '#f5e7c5', '#8d5b08'],
    [sn.pendPur.length + sn.pendExp.length, '✓', 'approval' + (sn.pendPur.length + sn.pendExp.length === 1 ? '' : 's') + ' pending', 'purchase', '#e4ecf3', '#455f77']
  ].filter(x => x[0] > 0);
  return items.length ? items.map(([n, i, t, g, bg, fg]) => `<button class="db-alert" data-goto="${g}"><span class="db-alert-i" style="background:${bg};color:${fg}">${i}</span><b>${n} ${t}</b><em>→</em></button>`).join('') : '<div class="empty-note">Nothing needs attention.</div>';
}

/* ---------- hero banner ---------- */
function dbHero() {
  const c = dbCompute({ period: 'today', branch: 'All', metal: 'All' }), m = dbCompute(dbKpiState), h = new Date().getHours();
  const greet = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening', target = 18000000, pc = Math.min(m.s / target * 100, 100);
  const R = 44, C = 2 * Math.PI * R, rates = [['Gold 24K', '₹13,180', '0.42', 'Au'], ['Gold 22K', '₹12,082', '0.38', 'Au'], ['Silver 999', '₹168.50', '0.21', 'Ag'], ['Silver 925', '₹155.85', '0.18', 'Ag']];
  const orders = (data.sales || []).filter(r => r.date === today).length;
  return `<section class="db-hero">
 <div class="db-hero-l"><div class="db-hello">${greet}, Admin 👋</div><div class="db-hero-label">Today's sales · ${today}</div><div class="db-hero-val">${dbMoney(c.s)}</div><div class="db-hero-sub"><span class="db-up">↑ 12.8%</span> vs yesterday · ${orders || 14} orders · ${(data.customers || []).length} active customers</div>
  <div class="db-hero-actions"><button data-add="sales">＋ New Sales Order</button><button data-add="purchase">↙ Record Purchase</button><button data-add="payments">▤ Record Payment</button><button data-add="inventory">◇ Add Product</button><button data-add="karigar">⚒ Job Work</button><button data-add="expenses">₹ Expense</button></div></div>
 <div class="db-hero-r">
  <div class="db-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="${R}" fill="none" stroke="#ffffff22" stroke-width="9"/><circle cx="50" cy="50" r="${R}" fill="none" stroke="#f0c869" stroke-width="9" stroke-linecap="round" stroke-dasharray="${(C * pc / 100).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 50 50)"/></svg><div><b>${pc.toFixed(0)}%</b><small>Monthly target</small></div></div>
  <div class="db-rates"><div class="db-rates-h">Today's rates / g <button data-goto="rates">Manage ↗</button></div>${rates.map(([n, p, ch, b]) => `<div class="db-rate"><span class="db-rate-b ${b === 'Ag' ? 'ag' : ''}">${b}</span><div><small>${n}</small><b>${p}</b></div><em>↑ ${ch}%</em></div>`).join('')}</div>
 </div></section>`;
}

/* ---------- page ---------- */
function dashboard() {
  setTimeout(dbInit, 0);
  const st = dbState, opt = (a, v) => a.map(x => `<option${x === v ? ' selected' : ''}>${x}</option>`).join('');
  return `${pageHead('dashboard')}
${dbHero()}
<div class="stats db-kpis" id="dbKpis">${dbKpis()}</div>
<div class="db-sec-head"><div><h2>Business Analytics</h2><p>Use the filters to slice trends by period, branch and metal</p></div>
 <div class="db-filters">
  <div class="db-chips" id="dbPeriod" role="group" aria-label="Period">${Object.entries(DB_PERIODS).map(([k, p]) => `<button type="button" class="db-chip${k === st.period ? ' on' : ''}" data-p="${k}">${p.l}</button>`).join('')}</div>
  <div class="db-selects"><select id="dbBranch" class="filter-select" aria-label="Branch">${opt(['All', ...DB_BRANCHES], st.branch)}</select><select id="dbMetal" class="filter-select" aria-label="Metal">${opt(['All', 'Gold', 'Silver', 'Diamond'], st.metal)}</select><button type="button" class="btn secondary" id="dbReset" title="Reset filters">↺</button><button type="button" class="btn secondary" id="dbExport" title="Export CSV">⇩ CSV</button></div>
 </div></div>
<div id="dbLive">${dbLive()}</div>
<div class="db-sec-head"><div><h2>Operations</h2><p>Orders, stock and job work at a glance</p></div></div>
<div class="db-row db-row-ops">
 <section class="panel"><div class="panel-head"><div><h2>Recent Sales & Orders</h2><p>Latest 6 orders</p></div><div class="table-tools"><input class="search-box" id="dbOrderSearch" placeholder="Search…" value="${st.oQuery}"><select class="filter-select" id="dbOrderStatus">${opt(['All', 'Paid', 'Pending', 'In Progress', 'Confirmed', 'Delivered'], st.oStatus)}</select><button class="text-link" data-goto="sales">All ↗</button></div></div><div id="dbOrders">${dbOrdersHTML()}</div></section>
 <section class="panel"><div class="panel-head"><div><h2>Stock Alerts</h2><p>Low stock first</p></div><div class="table-tools"><select class="filter-select" id="dbInvStatus">${opt(['All', 'Low Stock', 'In Stock'], st.iStatus)}</select><button class="text-link" data-goto="inventory">All ↗</button></div></div><div id="dbInv">${dbInvHTML()}</div></section>
</div>
<div class="db-row db-row-3 db-row-end">
 <section class="panel"><div class="panel-head"><div><h2>Karigar Job Work</h2><p>Metal in custody</p></div><button class="text-link" data-goto="karigar">All ↗</button></div><div id="dbJobs">${dbJobsHTML()}</div></section>
 <section class="panel"><div class="panel-head"><div><h2>Top Customers</h2><p>By order value</p></div><button class="text-link" data-goto="customers">All ↗</button></div><div class="panel-body">${dbCustomers()}</div></section>
 <section class="panel"><div class="panel-head"><div><h2>Attention Needed</h2><p>Tap to review</p></div></div><div class="panel-body"><div class="db-alerts">${dbAttention()}</div></div></section>
</div>`;
}

/* ---------- interactivity ---------- */
function dbNav(root = document) {
  root.querySelectorAll('[data-goto]').forEach(b => { b.onclick = () => render(b.dataset.goto); b.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); render(b.dataset.goto) } } });
  root.querySelectorAll('[data-add]').forEach(b => b.onclick = () => openModal(b.dataset.add));
  root.querySelectorAll('tr[data-toast]').forEach(r => r.onclick = () => toast(r.dataset.toast));
}
function dbHover() {
  const w = $('#dbTrend'); if (!w || !dbChartPts.length) return;
  const svg = w.querySelector('svg'), tip = $('#dbTip'), gd = w.querySelector('.db-guide'), ds = w.querySelector('.db-dot.s'), dp = w.querySelector('.db-dot.p');
  const move = e => {
    const b = svg.getBoundingClientRect(), x = (e.clientX - b.left) / b.width * 640;
    let best = dbChartPts[0]; dbChartPts.forEach(p => { if (Math.abs(p.x - x) < Math.abs(best.x - x)) best = p });
    gd.setAttribute('x1', best.x); gd.setAttribute('x2', best.x); ds.setAttribute('cx', best.x); ds.setAttribute('cy', best.ys); dp.setAttribute('cx', best.x); dp.setAttribute('cy', best.yp);
    w.classList.add('hv'); tip.innerHTML = `<b>${best.p.label}</b><span><i style="background:#b77a12"></i>Sales <em>${dbMoney(best.p.s)}</em></span><span><i style="background:#30271c"></i>Purchases <em>${dbMoney(best.p.p)}</em></span>`;
    const px = best.x / 640 * b.width, tw = tip.offsetWidth; tip.style.left = Math.min(Math.max(px - tw / 2, 0), b.width - tw) + 'px'; tip.style.top = '6px'
  };
  w.onpointermove = move; w.onpointerdown = move; w.onpointerleave = () => w.classList.remove('hv');
}
function dbRefresh() {
  $('#dbLive').innerHTML = dbLive();
  $$('#dbPeriod .db-chip').forEach(b => b.classList.toggle('on', b.dataset.p === dbState.period));
  dbNav($('#dbLive')); dbHover();
}
function dbExport() {
  const c = dbCompute(dbState), head = ['Period', 'Sales', 'Purchases', 'Gross Profit', 'Collections'];
  const csv = [head.join(','), ...c.pts.map(p => [`"${p.label}"`, p.s.toFixed(0), p.p.toFixed(0), p.pr.toFixed(0), p.c.toFixed(0)].join(','))].join('\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' })); a.download = `aurum-dashboard-${dbState.period}-demo.csv`; a.click(); URL.revokeObjectURL(a.href); toast('Dashboard summary exported (demo data).');
}
function dbInit() {
  if (!$('#dbLive')) return;
  $$('#dbPeriod .db-chip').forEach(b => b.onclick = () => { dbState.period = b.dataset.p; dbRefresh() });
  $('#dbBranch').onchange = e => { dbState.branch = e.target.value; dbRefresh() };
  $('#dbMetal').onchange = e => { dbState.metal = e.target.value; dbRefresh() };
  $('#dbReset').onclick = () => { Object.assign(dbState, { period: 'month', branch: 'All', metal: 'All', oStatus: 'All', oQuery: '', iStatus: 'All' }); $('#dbBranch').value = 'All'; $('#dbMetal').value = 'All'; $('#dbOrderSearch').value = ''; $('#dbOrderStatus').value = 'All'; $('#dbInvStatus').value = 'All'; $('#dbOrders').innerHTML = dbOrdersHTML(); $('#dbInv').innerHTML = dbInvHTML(); dbRefresh(); dbNav($('#dbOrders')); dbNav($('#dbInv')); toast('Dashboard filters reset.') };
  $('#dbExport').onclick = dbExport;
  $('#dbOrderSearch').oninput = e => { dbState.oQuery = e.target.value; $('#dbOrders').innerHTML = dbOrdersHTML(); dbNav($('#dbOrders')) };
  $('#dbOrderStatus').onchange = e => { dbState.oStatus = e.target.value; $('#dbOrders').innerHTML = dbOrdersHTML(); dbNav($('#dbOrders')) };
  $('#dbInvStatus').onchange = e => { dbState.iStatus = e.target.value; $('#dbInv').innerHTML = dbInvHTML(); dbNav($('#dbInv')) };
  dbNav($('#content')); dbHover();
}

function genericPage(key) {
  let m = meta[key]; if (key === 'rates') return `${pageHead(key)}<div class="stats">${stat('Gold 24K', '₹13,180/g', 'Au', '↑ 0.42%', 'today')}${stat('Gold 22K', '₹12,082/g', 'Au', '↑ 0.38%', 'today', 'var(--blue)')}${stat('Silver 999', '₹168.50/g', 'Ag', '↑ 0.21%', 'today', '#d99a35')}${stat('Silver 925', '₹155.85/g', 'Ag', '↑ 0.18%', 'today', '#c77a65')}</div><div class="page-columns"><section class="panel"><div class="panel-head"><div><h2>Metal Rate History</h2><p>Sample rates effective 22 October 2026</p></div><button class="btn secondary" id="exportBtn">Export CSV</button></div><div class="table-wrap"><table><thead><tr><th>Metal</th><th>Purity</th><th>Rate / Gram</th><th>Effective Date</th><th>Updated By</th><th>Status</th></tr></thead><tbody><tr><td>Gold</td><td>24K / 999</td><td>₹13,180.00</td><td>22 Oct 2026</td><td>Aarav Shah</td><td><span class="status active">Current</span></td></tr><tr><td>Gold</td><td>22K / 916</td><td>₹12,082.00</td><td>22 Oct 2026</td><td>Aarav Shah</td><td><span class="status active">Current</span></td></tr><tr><td>Silver</td><td>999</td><td>₹168.50</td><td>22 Oct 2026</td><td>Aarav Shah</td><td><span class="status active">Current</span></td></tr><tr><td>Silver</td><td>925</td><td>₹155.85</td><td>22 Oct 2026</td><td>Aarav Shah</td><td><span class="status active">Current</span></td></tr></tbody></table></div></section><section class="panel"><div class="panel-head"><div><h2>Rate Policy</h2><p>Demo configuration</p></div></div><div class="panel-body"><div class="alert-list"><div class="alert-item"><div class="quick-icon">✓</div><div><b>Rate history enabled</b><p>Previous rates remain available for audit.</p></div></div><div class="alert-item"><div class="quick-icon">✓</div><div><b>Approval for overrides</b><p>Sales rate overrides require manager approval.</p></div></div><div class="alert-item"><div class="quick-icon">!</div><div><b>Verify live market rates</b><p>These values are fictional demo data, not live rates.</p></div></div></div></div></section></div>`;
  if (key === 'reports') return `${pageHead(key)}<div class="stats">${stat('Gross Sales', money(4826500), '↗', '↑ 8.4%', 'vs last month')}${stat('Purchases', money(3268000), '↙', '↑ 3.1%', 'vs last month', 'var(--blue)')}${stat('Estimated Margin', money(618400), '◈', '12.8%', 'demo estimate', '#d99a35')}${stat('Open Receivables', money(742800), '₹', '6 invoices', 'pending', '#c77a65')}</div><div class="dashboard-grid"><section class="panel"><div class="panel-head"><div><h2>Business Summary</h2><p>Monthly totals · illustrative sample data</p></div><button class="btn secondary" id="exportBtn">Export CSV</button></div>${tableHTML('sales', data.sales.slice(0, 5))}</section><section class="panel"><div class="panel-head"><div><h2>Report Categories</h2><p>Choose a report area</p></div></div><div class="panel-body"><div class="quick-actions"><button class="quick-action" data-goto="sales"><span class="quick-icon">↗</span><span><b>Sales Report</b><small>Daily / monthly sales</small></span></button><button class="quick-action" data-goto="inventory"><span class="quick-icon">◇</span><span><b>Stock Report</b><small>Purity and location</small></span></button><button class="quick-action" data-goto="karigar"><span class="quick-icon">⚒</span><span><b>Karigar Ledger</b><small>Metal balance and jobs</small></span></button><button class="quick-action" data-goto="payments"><span class="quick-icon">₹</span><span><b>Outstanding</b><small>Receivables and payables</small></span></button></div></div></section></div>`;
  if (key === 'users') return `${pageHead(key)}<div class="stats">${stat('Total Users', '08', '♙', '6 active', 'team members')}${stat('Super Admin', '01', '⚙', 'Full access', 'role', 'var(--blue)')}${stat('Operational Roles', '06', '▤', 'Role-based', 'permissions', '#d99a35')}${stat('MFA Status', 'Optional', '✓', 'Demo only', 'not configured', '#c77a65')}</div><section class="panel"><div class="panel-head"><div><h2>Team Access</h2><p>Example users and role permissions</p></div><button class="btn secondary" id="exportBtn">Export CSV</button></div><div class="table-wrap"><table><thead><tr><th>User</th><th>Role</th><th>Access Scope</th><th>Last Active</th><th>Status</th><th>Action</th></tr></thead><tbody>${[['Aarav Shah', 'Super Admin', 'All modules', 'Today', 'Active'], ['Priya Kulkarni', 'Accountant', 'Accounts, GST, Reports', 'Today', 'Active'], ['Rahul Patil', 'Salesperson / Cashier', 'Customers, Sales', 'Today', 'Active'], ['Nitin Jadhav', 'Inventory Manager', 'Inventory, Stock Ledger', 'Yesterday', 'Active'], ['Suresh Pawar', 'Karigar User', 'Assigned job work only', '21 Oct', 'Active']].map((r, i) => `<tr><td><div class="main-cell">${r[0]}</div><div class="sub-cell">user${i + 1}@aurum.demo</div></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="status active">${r[4]}</span></td><td><button class="text-link" data-toast="Demo user details opened">View ↗</button></td></tr>`).join('')}</tbody></table></div></section>`;
  if (key === 'settings') return `${pageHead(key)}<div class="page-columns"><section class="panel"><div class="panel-head"><div><h2>Company Profile</h2><p>Basic business configuration</p></div></div><form id="settingsForm" class="form-grid"><div class="field"><label>Company Name</label><input value="Aurum Jewellers"></div><div class="field"><label>Financial Year</label><select><option>2026–2027</option><option>2025–2026</option></select></div><div class="field"><label>GSTIN (Demo)</label><input value="27AAAAA0000A1Z5"></div><div class="field"><label>Default Branch</label><select><option>Main Showroom — Pune</option><option>Workshop — Chinchwad</option></select></div><div class="field"><label>Document Prefix</label><input value="AUR"></div><div class="field"><label>Default Currency</label><select><option>INR — Indian Rupee</option></select></div><div class="field full"><label>Address</label><textarea>Pune, Maharashtra, India (demo address)</textarea></div><div class="field full"><button class="btn primary" type="submit">Save demo settings</button></div></form></section><section class="panel"><div class="panel-head"><div><h2>System Preferences</h2><p>Demo configuration</p></div></div><div class="panel-body"><div class="alert-list"><div class="alert-item"><div class="quick-icon">✓</div><div><b>Role-based access</b><p>Restrict sensitive actions by role.</p></div></div><div class="alert-item"><div class="quick-icon">✓</div><div><b>Audit trail</b><p>Keep changes and approvals traceable.</p></div></div><div class="alert-item"><div class="alert-symbol">!</div><div><b>Backend not connected</b><p>Settings on this screen are for visual demo only.</p></div></div></div></div></section></div>`;
  let rows = data[key] || [];
  return `${pageHead(key)}<div class="stats">${key === 'sales' ? stat('Orders This Month', '126', '↗', '↑ 9.6%', 'vs last month') : key === 'purchase' ? stat('Purchase Orders', '42', '↙', '↑ 4.2%', 'this month') : key === 'inventory' ? stat('Unique Products', '486', '◇', '12 low stock', 'items need review') : key === 'karigar' ? stat('Open Jobs', '12', '⚒', '3 overdue', 'require follow-up') : key === 'payments' ? stat('Collected Today', money(234500), '₹', '↑ 6.8%', 'vs yesterday') : key === 'customers' ? stat('Total Customers', '1,248', '♙', '38 new', 'this month') : key === 'suppliers' ? stat('Active Suppliers', '42', '♧', '5 pending', 'payment review') : stat('Documents', '218', '▧', '14 pending', 'review')}${stat(key === 'inventory' ? 'Total Pieces' : key === 'karigar' ? 'Metal Issued' : 'Outstanding', key === 'inventory' ? '1,842 pcs' : key === 'karigar' ? '105.3 g' : money(key === 'sales' ? 742800 : key === 'purchase' ? 684200 : key === 'payments' ? 742800 : key === 'customers' ? 756800 : key === 'suppliers' ? 610700 : 528000), '◇', 'Sample', 'demo snapshot', 'var(--blue)')}${stat(key === 'purchase' ? 'Awaiting Receipt' : key === 'sales' ? 'Pending Orders' : key === 'inventory' ? 'Low Stock Items' : key === 'karigar' ? 'Jobs Overdue' : key === 'payments' ? 'Pending Payments' : key === 'customers' ? 'Credit Customers' : key === 'suppliers' ? 'Payment Due' : 'Pending Review', key === 'inventory' ? '2' : key === 'karigar' ? '3' : key === 'sales' ? '8' : key === 'purchase' ? '4' : '6', '◷', 'Needs attention', 'demo status', '#d99a35')}${stat(key === 'inventory' ? 'Stock Locations' : key === 'karigar' ? 'Active Karigars' : key === 'customers' ? 'Wholesale Clients' : 'Completed This Month', key === 'inventory' ? '3' : key === 'karigar' ? '18' : key === 'customers' ? '84' : '94', '✓', 'Updated', '22 Oct 2026', '#c77a65')}</div><section class="panel"><div class="panel-head"><div><h2>${m.title} Register</h2><p>Search, review and add sample records · Demo mode</p></div><div class="table-tools"><input class="search-box" id="tableSearch" placeholder="⌕  Search records..."><button class="btn secondary" id="exportBtn">↓ Export CSV</button></div></div><div id="tableContent">${tableHTML(key, rows)}</div></section>`;
}
function salesOrderPage() { return `${pageHead('sales')}<div class="stats">${stat('Orders This Month', '126', '↗', '↑ 9.6%', 'vs last month')}${stat('Pending Orders', '08', '◷', 'Needs attention', 'order status', 'var(--blue)')}${stat('Advance Received', money(480000), '₹', 'This month', 'demo data', '#d99a35')}${stat('Ready for Delivery', '18', '✓', 'Awaiting pickup', 'demo data', '#c77a65')}</div><div class="panel"><div class="panel-head"><div><h2>Sales Order Register</h2><p>Manage ready-stock and custom jewellery orders</p></div><div class="table-tools"><input class="search-box" id="tableSearch" placeholder="Search order, customer..."><button class="btn primary" id="newDetailedOrder">＋ Create Sales Order</button><button class="btn secondary" id="exportBtn">↓ Export CSV</button></div></div><div class="table-wrap"><table><thead><tr><th>Order No.</th><th>Customer</th><th>Type</th><th>Order Date</th><th>Items</th><th>Total</th><th>Advance</th><th>Balance</th><th>Delivery</th><th>Status</th><th>Actions</th></tr></thead><tbody id="salesOrderRows">${(data.sales || []).map((r, i) => `<tr><td><b>${r.ref}</b></td><td><div class="main-cell">${r.name}</div><div class="sub-cell">${r.detail}</div></td><td>${i % 2 ? 'Custom' : 'Ready Stock'}</td><td>${r.date}</td><td>${i % 2 ? 2 : 1}</td><td>${money(r.amount)}</td><td>${money(Math.round(r.amount * .25))}</td><td>${money(Math.round(r.amount * .75))}</td><td>05 Nov 2026</td><td><span class="status ${statusClass(r.status)}">${r.status}</span></td><td><button class="text-link" data-order-view="${i}">View</button></td></tr>`).join('')}</tbody></table></div></div><div class="panel" style="margin-top:18px"><div class="panel-head"><div><h2>Order Workflow</h2><p>Order status and payment status are tracked separately</p></div></div><div class="panel-body"><div class="quick-actions"><div class="quick-action"><span class="quick-icon">1</span><span><b>Draft / Pending Approval</b><small>Order details and discount approval</small></span></div><div class="quick-action"><span class="quick-icon">2</span><span><b>Confirmed / Stock Reserved</b><small>Metal rate snapshot and inventory reservation</small></span></div><div class="quick-action"><span class="quick-icon">3</span><span><b>Production / Ready</b><small>Custom work and quality check</small></span></div><div class="quick-action"><span class="quick-icon">4</span><span><b>Delivered / Invoiced</b><small>Final invoice, payment and stock movement</small></span></div></div></div></div>` }
function detailedOrderModal() {
  const fields = [['Order Type', 'select', 'Ready Stock,Custom Jewellery'], ['Order Priority', 'select', 'Normal,Urgent'], ['Order Date', 'date', ''], ['Expected Delivery Date', 'date', ''], ['Customer Name', 'text', ''], ['Customer ID', 'text', ''], ['Mobile Number', 'tel', ''], ['Email', 'email', ''], ['Billing Address', 'text', ''], ['Delivery Address', 'text', ''], ['Branch / Showroom', 'text', 'Main Showroom'], ['Salesperson', 'text', 'Aarav Shah'], ['Product Name / SKU', 'text', ''], ['Category', 'select', 'Ring,Necklace,Chain,Bracelet,Earrings,Bangle,Anklet,Other'], ['Metal Type', 'select', 'Gold,Silver,Platinum'], ['Purity', 'select', '24K / 999,22K / 916,18K / 750,925 Silver,999 Silver'], ['Barcode / Tag Number', 'text', ''], ['Quantity', 'number', '1'], ['Gross Weight (g)', 'number', ''], ['Stone Weight (g)', 'number', '0'], ['Other Non-metal Weight (g)', 'number', '0'], ['Metal Rate per Gram (₹)', 'number', ''], ['Rate Source', 'select', 'Manual Demo Rate,API Rate'], ['Making Charge Type', 'select', 'Per Gram,Percentage,Fixed'], ['Making Charge Rate', 'number', ''], ['Wastage (%)', 'number', '0'], ['Stone Amount (₹)', 'number', '0'], ['Engraving / Other Charges (₹)', 'number', '0'], ['Item Discount (₹)', 'number', '0'], ['Order Discount (₹)', 'number', '0'], ['GST (%)', 'number', '3'], ['Advance Amount (₹)', 'number', '0'], ['Payment Mode', 'select', 'Cash,UPI,Card,Bank Transfer,NEFT'], ['Transaction Reference', 'text', ''], ['Delivery Method', 'select', 'Store Pickup,Home Delivery'], ['Special Instructions', 'text', ''], ['Internal Notes', 'text', '']];
  $('#modalTitle').textContent = 'Create Detailed Sales Order'; $('#modalFields').innerHTML = `<div class="field full"><h3>1. Order & Customer Details</h3></div>` + fields.map((f, i) => { let section = i === 13 ? '<div class="field full"><h3>2. Jewellery Item & Metal Details</h3></div>' : i === 22 ? '<div class="field full"><h3>3. Rate, Making, Wastage & Tax</h3></div>' : i === 32 ? '<div class="field full"><h3>4. Advance Payment & Delivery</h3></div>' : ''; let inp = f[1] === 'select' ? `<select name="f${i}">${f[2].split(',').map(x => `<option>${x}</option>`).join('')}</select>` : `<input name="f${i}" type="${f[1]}" ${f[1] === 'number' ? 'min="0" step="0.01"' : ''} value="${f[2]}" placeholder="Enter ${f[0]}">`; return section + `<div class="field ${[8, 9, 35, 36].includes(i) ? 'full' : ''}"><label>${f[0]}</label>${inp}</div>` }).join('') + `<div class="field full"><div class="alert-item"><div class="alert-symbol">₹</div><div><b>Live calculation preview</b><p id="orderCalcPreview">Enter weight and rate to calculate estimate. Rates in this demo are not live.</p></div></div></div>`;
  const form = $('#recordForm'); $('#modalBackdrop').classList.add('show'); const calc = () => { const v = n => Number(form.querySelector(`[name="f${n}"]`)?.value || 0); const net = Math.max(0, v(19) - v(20) - v(21)); const metal = net * v(22); const making = v(24) == 0 ? 0 : (form.querySelector('[name="f24"]')?.value === 'Per Gram' ? net * v(25) : form.querySelector('[name="f24"]')?.value === 'Percentage' ? metal * v(25) / 100 : v(25)); const wastage = metal * v(26) / 100; const sub = metal + making + wastage + v(27) + v(28) - v(29) - v(30); const tax = Math.max(0, sub) * v(31) / 100; const total = Math.max(0, sub) + tax; $('#orderCalcPreview').textContent = `Net metal ${net.toFixed(3)} g · Metal ${money(metal)} · Making ${money(making)} · Wastage ${money(wastage)} · GST ${money(tax)} · Grand Total ${money(total)} · Balance ${money(Math.max(0, total - v(32)))}. Estimate only.` }; form.querySelectorAll('input,select').forEach(x => x.addEventListener('input', calc)); calc(); form.onsubmit = e => { e.preventDefault(); const get = n => form.querySelector(`[name="f${n}"]`)?.value || ''; const total = Number((($('#orderCalcPreview').textContent.match(/Grand Total ₹([\d,]+)/) || [])[1] || '0').replaceAll(',', '')); const rec = { ref: `SO-2026-${String(Date.now()).slice(-4)}`, name: get(4) || 'New Customer', detail: `${get(13) || 'Jewellery'} · ${get(15) || 'Gold'} ${get(16) || ''}`, date: get(2) || '27 Oct 2026', amount: total, status: 'Confirmed', orderType: get(0), phone: get(6), deliveryDate: get(3), advance: Number(get(32) || 0), balance: Math.max(0, total - Number(get(32) || 0)), notes: get(36) }; data.sales.unshift(rec); saveDemoData(); $('#modalBackdrop').classList.remove('show'); toast('Sales order saved in demo data.'); render('sales') };
}
function render(key) { if (!meta[key]) key = 'dashboard'; document.body.dataset.page = key; $('#crumbTitle').textContent = meta[key].title; $('#content').innerHTML = key === 'dashboard' ? dashboard() : key === 'sales' ? salesOrderPage() : genericPage(key); $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.page === key)); bindPage(key); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function bindPage(key) { if (key === 'sales') { const n = $('#newDetailedOrder'); if (n) n.onclick = detailedOrderModal; const ex = $('#exportBtn'); if (ex) ex.onclick = () => exportCSV('sales'); const q = $('#tableSearch'); if (q) q.oninput = () => { const v = q.value.toLowerCase(); $$('#salesOrderRows tr').forEach(r => r.style.display = r.textContent.toLowerCase().includes(v) ? '' : 'none') }; $$('[data-order-view]').forEach(b => b.onclick = () => { const r = data.sales[+b.dataset.orderView]; if (r) toast(`${r.ref} · ${r.name} · ${r.status} · ${money(r.amount)}`) }); return } const act = $('#primaryAction'); if (act) act.onclick = () => { if (['dashboard', 'reports'].includes(key)) { exportCSV(key); return } openModal(key) }; const search = $('#tableSearch'); if (search) search.addEventListener('input', () => { let q = search.value.toLowerCase(); let rows = (data[key] || []).filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(q))); $('#tableContent').innerHTML = tableHTML(key, rows); bindRowButtons() }); bindRowButtons(); $$('[data-goto]').forEach(b => b.onclick = () => render(b.dataset.goto)); $$('[data-add]').forEach(b => b.onclick = () => openModal(b.dataset.add)); let ex = $('#exportBtn'); if (ex) ex.onclick = () => exportCSV(key); let d = $('#dateBtn'); if (d) d.onclick = () => toast('Showing sample data for October 2026'); let sf = $('#settingsForm'); if (sf) sf.onsubmit = e => { e.preventDefault(); toast('Demo settings saved for this session.') } }
function bindRowButtons() { $$('.row-view').forEach(b => b.onclick = () => { let r = (data[b.dataset.key] || [])[+b.dataset.index]; if (r) toast(`${r.ref} · ${r.name} · ${r.status}`) }); $$('[data-toast]').forEach(b => b.onclick = () => toast(b.dataset.toast)) }
function openModal(key) { let labels = { expenses: ['Expense Name', 'Category', 'Expense Date', 'Amount (₹)', 'Status'], sales: ['Customer / Dealer', 'Order Type', 'Order Date', 'Amount (₹)', 'Status'], purchase: ['Supplier Name', 'Purchase Category', 'Purchase Date', 'Amount (₹)', 'Status'], inventory: ['Product Name', 'Metal / Purity', 'SKU / Tag', 'Weight (g)', 'Quantity'], rates: ['Metal', 'Purity', 'Rate per gram (₹)', 'Effective Date', 'Reason'], karigar: ['Karigar Name', 'Job / Design', 'Metal Issued (g)', 'Due Date', 'Status'], payments: ['Party Name', 'Payment Mode', 'Amount (₹)', 'Payment Date', 'Status'], gst: ['Party Name', 'Document Type', 'Document Date', 'Taxable Amount (₹)', 'Status'], customers: ['Customer Name', 'Customer Type', 'Phone', 'Credit Limit (₹)', 'Status'], suppliers: ['Supplier Name', 'Category', 'Phone', 'Payment Terms', 'Status'] }; let ls = labels[key] || ['Name', 'Category', 'Details', 'Amount', 'Status']; $('#modalTitle').textContent = meta[key].button.replace(/^\+\s*/, '').replace(/^Create /, 'Create ').replace(/^Record /, 'Record '); $('#modalFields').innerHTML = ls.map((l, i) => `<div class="field ${i === ls.length - 1 ? 'full' : ''}"><label>${l}</label>${/Status|Type|Mode|Category|Purity|Terms|Reason/.test(l) ? `<select><option>${key === 'sales' && i === 1 ? 'Retail' : key === 'sales' && i === 4 ? 'Pending' : key === 'payments' && i === 1 ? 'UPI' : key === 'expenses' && i === 1 ? 'Utilities' : /Status/.test(l) ? 'Pending' : key === 'customers' && i === 1 ? 'Retail' : 'Select option'}</option>${['Pending', 'Confirmed', 'Paid', 'In Progress', 'Completed', 'Retail', 'Wholesale', 'Gold', 'Silver', 'Cash', 'UPI', 'Bank Transfer', 'NEFT', '22K', '24K', '925', '15 days', '30 days', 'Utilities', 'Rent', 'Salary', 'Transport', 'Marketing', 'Maintenance', 'Other'].map(o => `<option>${o}</option>`).join('')}</select>` : `<input ${i === 0 ? 'required' : ''} placeholder="Enter ${l.toLowerCase()}" ${/Amount|Weight|Quantity|Credit Limit|Rate per/.test(l) ? 'type="number" min="0" step="0.01"' : ''} ${/Date/.test(l) ? 'type="date"' : ''}>`}</div>`).join(''); $('#modalBackdrop').classList.add('show'); $('#recordForm').onsubmit = e => { e.preventDefault(); let vals = [...$('#modalFields').querySelectorAll('input,select')].map(x => x.value || '—'); let obj = { ref: `DEMO-${String(Date.now()).slice(-5)}`, name: vals[0] || 'New record', detail: vals[1] || 'Demo record', date: vals[2] || today, amount: Number(vals[3]) || 0, status: vals[4] || 'Pending' }; if (!data[key]) data[key] = []; data[key].unshift(obj); saveDemoData(); toast('Demo record added successfully.'); $('#modalBackdrop').classList.remove('show'); render(key) } }
function exportCSV(key) { let rows = data[key] || data.sales; let csv = [Object.keys(rows[0] || {}).join(','), ...rows.map(r => Object.values(r).map(v => `"${String(v).replaceAll('"', '""')}"`).join(','))].join('\n'); let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' }); let a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `aurum-${key}-demo.csv`; a.click(); URL.revokeObjectURL(a.href); toast('CSV exported with sample data.') }
let toastTimer; function toast(msg) { let el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2600) }
$$('.nav-item').forEach(b => b.addEventListener('click', () => { render(b.dataset.page); $('#sidebar').classList.remove('mobile-open'); $('#mobileOverlay').classList.remove('show') }));
const collapseBtn = $('#collapseBtn');
function setSidebarCollapsed(collapsed) {
  document.documentElement.classList.toggle('collapsed', collapsed);
  const label = collapsed ? 'Expand sidebar' : 'Collapse sidebar';
  if (collapseBtn) { collapseBtn.textContent = collapsed ? '›' : '‹'; collapseBtn.title = label; collapseBtn.setAttribute('aria-label', label); collapseBtn.setAttribute('aria-expanded', String(!collapsed)); }

  try { localStorage.setItem('aurumSidebarCollapsed', String(collapsed)) } catch (e) { }
}
try { setSidebarCollapsed(localStorage.getItem('aurumSidebarCollapsed') === 'true') } catch (e) { setSidebarCollapsed(false) }
if (collapseBtn) collapseBtn.onclick = () => setSidebarCollapsed(!document.documentElement.classList.contains('collapsed'));

$('#mobileMenu').onclick = () => { $('#sidebar').classList.add('mobile-open'); $('#mobileOverlay').classList.add('show') }; $('#mobileOverlay').onclick = () => { $('#sidebar').classList.remove('mobile-open'); $('#mobileOverlay').classList.remove('show') };
$('#modalClose').onclick = $('#cancelModal').onclick = () => $('#modalBackdrop').classList.remove('show'); $('#modalBackdrop').addEventListener('click', e => { if (e.target.id === 'modalBackdrop') e.currentTarget.classList.remove('show') });
$('#rateTop').onclick = () => render('rates'); $('#notifyBtn').onclick = () => toast('Notifications: 3 overdue jobs, 2 low-stock products, 6 pending invoices.');
const pathParts = location.pathname.toLowerCase().split('/').filter(Boolean); const routeMap = { 'sales': 'sales', 'purchase': 'purchase', 'inventory': 'inventory', 'metal-rates': 'rates', 'karigar': 'karigar', 'payments': 'payments', 'gst': 'gst', 'customers': 'customers', 'suppliers': 'suppliers', 'reports': 'reports', 'users-&-roles': 'users', 'settings': 'settings', 'expenses': 'expenses', 'dashboard': 'dashboard' }; render(routeMap[pathParts.length > 1 ? pathParts[pathParts.length - 2] : 'dashboard'] || 'dashboard');