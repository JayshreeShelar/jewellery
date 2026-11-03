(function () {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3b04b"/><stop offset="1" stop-color="#a96b08"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#g)"/><path d="M32 10 L37.5 26.5 L54 32 L37.5 37.5 L32 54 L26.5 37.5 L10 32 L26.5 26.5Z" fill="#fffaf1"/></svg>';
    document.querySelectorAll('link[rel~="icon"]').forEach(l => l.remove());
    const l = document.createElement('link');
    l.rel = 'icon'; l.type = 'image/svg+xml'; l.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
    document.head.appendChild(l);
})();



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
/* Dashboard code is inline in dashboard/dashboard.html. On other pages the Dashboard link opens that page. */
const dbPage = (document.currentScript && document.currentScript.src) ? new URL('../../dashboard/dashboard.html', document.currentScript.src).href : '/dashboard/dashboard.html';
function dashboard() {
    if (typeof dbDashboard === 'function') return dbDashboard();
    if (/dashboard\/dashboard\.html$/i.test(location.pathname)) return '<div class="empty-note">Dashboard code not found — replace dashboard/dashboard.html with the latest file.</div>';
    location.href = dbPage;
    return '<div class="empty-note">Opening dashboard…</div>';
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
    return `<div class="brand"><div class="brand-mark">✦</div><div class="brand-text"><strong>AURUM<span>ERP</span></strong><small>JEWELLERY MANAGEMENT</small></div></div>
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
    return `<button class="collapse edge-toggle" id="collapseBtn" title="Collapse sidebar" aria-label="Collapse sidebar">‹</button>
<button class="mobile-menu" id="mobileMenu" aria-label="Open menu">☰</button>
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
/* Header + sidebar styles are injected from here, so they always load together with this JS (no separate CSS paste needed). */
const LAYOUT_CSS = `/* =====================================================================
   AURUM ERP — GLASS HEADER + SIDEBAR (all pages)
   file: assets/css/dashboard.css  →  paste at the very END of the file
   ===================================================================== */
/* soft colourful backdrop on every page so the glass has something to blur */
body{background:
  radial-gradient(560px 420px at 8% 6%,rgba(244,198,96,.55),transparent 70%),
  radial-gradient(620px 460px at 94% 10%,rgba(240,166,136,.36),transparent 70%),
  radial-gradient(700px 520px at 78% 52%,rgba(146,194,166,.32),transparent 72%),
  radial-gradient(640px 520px at 16% 70%,rgba(192,182,236,.28),transparent 72%),
  radial-gradient(620px 440px at 66% 100%,rgba(244,196,104,.45),transparent 70%),
  linear-gradient(180deg,#f8f1e2,#f1e7d3);background-attachment:fixed}

/* ---------- Sidebar ---------- */
.sidebar{background:linear-gradient(185deg,rgba(255,255,255,.82),rgba(255,247,226,.5) 55%,rgba(250,232,190,.45));
  -webkit-backdrop-filter:blur(26px) saturate(1.8);backdrop-filter:blur(26px) saturate(1.8);
  border-right:1px solid rgba(255,255,255,.85);
  box-shadow:24px 0 56px -34px rgba(110,72,14,.55),inset -1px 0 0 rgba(183,122,18,.14),inset 0 1px 0 #fff}
.sidebar .brand{background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,0));border-bottom:1px solid rgba(183,122,18,.16);box-shadow:none}
.sidebar .brand-mark{background:linear-gradient(145deg,#ecc15a,#a96b08);color:#fffaf1;border:1px solid rgba(255,255,255,.7);
  box-shadow:0 12px 22px -8px rgba(183,122,18,.85),0 0 0 4px rgba(236,193,90,.18),inset 0 1.5px 0 rgba(255,255,255,.7)}
.sidebar .brand-text strong{letter-spacing:.6px}
.sidebar .collapse{background:rgba(255,255,255,.75);border:1px solid rgba(255,255,255,.95);box-shadow:0 8px 16px -8px rgba(95,68,25,.5),inset 0 1px 0 #fff;transition:.18s}
.sidebar .collapse:hover{background:#fff;color:#b77a12;transform:translateY(-50%) scale(1.06)}
.sidebar .nav-label{padding:12px 21px 6px;display:flex;align-items:center;gap:8px;letter-spacing:1.4px;color:#9a8460}
.sidebar .nav-label:after{content:"";flex:1;height:1px;background:linear-gradient(90deg,rgba(183,122,18,.28),transparent)}
.sidebar .nav-item{border-radius:12px;border:1px solid transparent;padding:5px 10px;margin:1px 10px;gap:11px;transition:background .2s,box-shadow .2s,transform .2s,color .2s}
.sidebar .nav-item>span{width:27px;height:27px;display:grid;place-items:center;border-radius:10px;font-size:15px;color:#a77a2e;
  background:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.95);box-shadow:0 6px 12px -7px rgba(95,68,25,.5),inset 0 1px 0 #fff;transition:.2s}
.sidebar .nav-item:hover{background:rgba(255,255,255,.7);border-color:rgba(255,255,255,.95);color:#8d5b08;transform:translateX(3px);box-shadow:0 14px 24px -16px rgba(95,68,25,.6)}
.sidebar .nav-item:hover>span{background:#fff;color:#b77a12}
.sidebar .nav-item.active{background:linear-gradient(135deg,#e3b04b,#b77a12 62%,#a06309);color:#fff;border-color:rgba(255,255,255,.55);
  box-shadow:0 16px 26px -10px rgba(183,122,18,.85),0 0 0 3px rgba(227,176,75,.16),inset 0 1.5px 0 rgba(255,255,255,.55);text-shadow:0 1px 6px rgba(120,70,0,.3);transform:none}
.sidebar .nav-item.active>span{background:rgba(255,255,255,.26);border-color:rgba(255,255,255,.5);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.5)}
.sidebar .nav-item em{background:rgba(255,255,255,.85);color:#8d5b08;border:1px solid #fff;box-shadow:0 4px 8px -4px rgba(95,68,25,.5)}
.sidebar .nav-item em.orange{background:#fff3dc;color:#a35e0a}
.sidebar .nav-item.active em{background:rgba(255,255,255,.9);color:#8d5b08;text-shadow:none}
.sidebar .sidebar-bottom{position:relative;overflow:hidden;background:linear-gradient(140deg,#e7b852,#b77a12);border:1px solid rgba(255,255,255,.6);color:#fff;
  box-shadow:0 20px 32px -14px rgba(183,122,18,.85),inset 0 1.5px 0 rgba(255,255,255,.55);border-radius:16px;cursor:pointer;transition:.2s}
.sidebar .sidebar-bottom:before{content:"";position:absolute;inset:0;background:linear-gradient(118deg,rgba(255,255,255,.4),rgba(255,255,255,0) 45%);pointer-events:none}
.sidebar .sidebar-bottom:hover{transform:translateY(-2px)}
.sidebar .sidebar-bottom .help-icon{background:rgba(255,255,255,.3);color:#fff;border:1px solid rgba(255,255,255,.6)}
.sidebar .sidebar-bottom b{color:#fff}.sidebar .sidebar-bottom small,.sidebar .sidebar-bottom>span{color:rgba(255,255,255,.88)}
html.collapsed .sidebar .nav-item{padding:5px;justify-content:center}
html.collapsed .sidebar .nav-item>span{font-size:16px}
html.collapsed .sidebar .nav-item em,html.collapsed .sidebar .nav-label:after{display:none}
html.collapsed .sidebar .nav-item:hover{transform:none}

/* ---------- Header (topbar) ---------- */
.topbar{background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,250,238,.55));
  -webkit-backdrop-filter:blur(24px) saturate(1.8);backdrop-filter:blur(24px) saturate(1.8);
  border-bottom:1px solid rgba(255,255,255,.85);box-shadow:0 20px 40px -30px rgba(110,72,14,.6),inset 0 -1px 0 rgba(183,122,18,.12);gap:14px;z-index:10}
.topbar .breadcrumbs{flex-shrink:0}
.top-search{position:relative;flex:1;max-width:400px;margin:0 auto 0 22px}
.top-search>svg{position:absolute;left:13px;top:50%;width:15px;height:15px;transform:translateY(-50%);fill:none;stroke:#a77a2e;stroke-width:2;stroke-linecap:round;pointer-events:none}
.top-search input{width:100%;height:38px;border-radius:12px;padding:0 38px 0 36px;font-size:12px;color:#30271c;
  background:rgba(255,255,255,.62);border:1px solid rgba(255,255,255,.95);box-shadow:0 10px 20px -14px rgba(95,68,25,.55),inset 0 1px 0 #fff;transition:.2s}
.top-search input::placeholder{color:#a0906f}
.top-search input:focus{background:#fff;border-color:#d3a44b;box-shadow:0 0 0 4px rgba(183,122,18,.14),0 14px 26px -14px rgba(183,122,18,.55)}
.top-search input::-webkit-search-cancel-button{display:none}
.top-search kbd{position:absolute;right:10px;top:50%;transform:translateY(-50%);font:700 10px 'DM Sans',sans-serif;color:#8d5b08;background:rgba(245,231,197,.8);border:1px solid #fff;border-radius:6px;padding:2px 7px;pointer-events:none}
.top-search input:focus~kbd{display:none}
.top-actions{gap:10px}
.top-date{font-size:11px;font-weight:700;color:#6a5c46;background:rgba(255,255,255,.55);border:1px solid rgba(255,255,255,.95);border-radius:10px;padding:8px 11px;box-shadow:inset 0 1px 0 #fff,0 8px 16px -12px rgba(95,68,25,.5);white-space:nowrap}
.topbar .demo-pill{background:linear-gradient(145deg,rgba(255,255,255,.8),rgba(245,231,197,.8));border:1px solid #fff;box-shadow:0 8px 16px -10px rgba(183,122,18,.6)}
.topbar .icon-btn{display:grid;place-items:center;width:38px;height:38px;border-radius:12px;background:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.95);color:#9b6a17;
  box-shadow:0 10px 18px -12px rgba(95,68,25,.6),inset 0 1px 0 #fff;transition:.2s}
.topbar .icon-btn:hover{background:#fff;transform:translateY(-2px);color:#b77a12}
.topbar .icon-btn svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.topbar .notification i{top:7px;right:8px;width:8px;height:8px;background:#e16d59;border:2px solid #fff;box-shadow:0 0 8px #e16d59}
.top-user{display:flex;align-items:center;gap:9px;margin:0;padding:4px 10px 4px 4px;border-radius:999px;border:1px solid rgba(255,255,255,.95);background:rgba(255,255,255,.65);
  box-shadow:0 10px 18px -12px rgba(95,68,25,.6),inset 0 1px 0 #fff;cursor:pointer;transition:.2s;text-align:left;color:inherit}
.top-user:hover{background:#fff}
.top-user .avatar{background:linear-gradient(145deg,#ecc15a,#a96b08);color:#fff;box-shadow:0 6px 12px -4px rgba(183,122,18,.8),inset 0 1px 0 rgba(255,255,255,.6)}
.top-user>div:nth-child(2){display:flex;flex-direction:column}
.top-user .admin-chevron{transition:transform .2s;color:#9b6a17}
.top-user[aria-expanded="true"] .admin-chevron{transform:rotate(180deg)}

/* ---------- Dropdowns (notifications, user, search) ---------- */
.lay-wrap{position:relative}
.lay-menu{display:none;position:absolute;top:calc(100% + 12px);right:0;min-width:270px;max-width:92vw;padding:8px;border-radius:18px;z-index:70;
  background:linear-gradient(150deg,rgba(255,255,255,.985),rgba(255,249,234,.965));-webkit-backdrop-filter:blur(24px) saturate(1.7);backdrop-filter:blur(24px) saturate(1.7);
  border:1px solid rgba(255,255,255,.95);box-shadow:0 36px 60px -24px rgba(95,60,10,.6),0 10px 24px -10px rgba(183,122,18,.35),inset 0 1px 0 #fff}
.lay-menu.show{display:block;animation:layPop .18s ease}
@keyframes layPop{from{opacity:0;transform:translateY(-6px) scale(.98)}}
.lay-menu-head{padding:8px 10px 10px;border-bottom:1px solid rgba(183,122,18,.16);margin-bottom:6px;display:flex;flex-direction:column;gap:3px}
.lay-menu-head b{font:800 13px Manrope;color:#30271c}.lay-menu-head span{font-size:10px;color:#817564}
.lay-item{display:flex;align-items:center;gap:11px;width:100%;border:0;background:transparent;text-align:left;padding:9px 10px;border-radius:12px;color:#30271c;transition:.15s}
.lay-item:hover{background:rgba(245,231,197,.7)}
.lay-item b{display:block;font-size:11.5px}.lay-item small{display:block;font-size:10px;color:#817564;margin-top:2px;font-weight:400}
.lay-ico{width:32px;height:32px;border-radius:10px;display:grid;place-items:center;flex-shrink:0;background:#f5e7c5;color:#8d5b08;font-weight:800;box-shadow:0 6px 12px -6px rgba(95,68,25,.5),inset 0 1px 0 rgba(255,255,255,.8)}
.lay-ico.out{background:#f5e2dd;color:#a44848}
.admin-logout{margin-top:4px;border-top:1px solid rgba(183,122,18,.14);border-radius:0 0 12px 12px}.admin-logout:hover{background:#f9e7e2}
.lay-empty{padding:14px;text-align:center;color:#817564;font-size:11px}
.lay-search-menu{left:0;right:0;min-width:0;top:calc(100% + 8px)}

@media(max-width:1250px){.top-date{display:none}}
@media(max-width:1000px){.top-search{max-width:240px}.top-user>div:nth-child(2){display:none}}
@media(max-width:760px){
  .top-search,.demo-pill{display:none}
  .topbar{gap:8px;background:linear-gradient(180deg,rgba(255,255,255,.9),rgba(255,250,238,.7))}
  .topbar .icon-btn{width:34px;height:34px}
  .lay-menu{position:fixed;top:68px;left:12px;right:12px;min-width:0}
  .mobile-menu{width:36px;height:36px;border-radius:11px;background:rgba(255,255,255,.7);border:1px solid #fff;color:#9b6a17;display:grid;place-items:center;margin-right:4px;box-shadow:0 8px 14px -10px rgba(95,68,25,.6)}
  .sidebar{background:linear-gradient(185deg,rgba(255,255,255,.95),rgba(255,247,226,.9))}
}

/* ---------- Sidebar fixes: brand stays clean, menu scrolls inside, bottom card always visible ---------- */
.sidebar{overflow:hidden;display:flex;flex-direction:column}
.sidebar .brand{position:relative;flex:0 0 74px;height:74px;min-height:74px;padding-right:18px;z-index:2;
  background:linear-gradient(180deg,rgba(255,252,242,.96),rgba(255,248,230,.9))}
.sidebar #navigation{flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;padding:2px 0 8px;scrollbar-width:thin;scrollbar-color:rgba(183,122,18,.35) transparent}
.sidebar #navigation::-webkit-scrollbar{width:5px}.sidebar #navigation::-webkit-scrollbar-thumb{background:rgba(183,122,18,.3);border-radius:9px}
.sidebar .sidebar-bottom{flex:0 0 auto;margin:6px 12px 12px;padding:10px}
html.collapsed .sidebar .brand{padding:0;justify-content:center;gap:0}
html.collapsed .sidebar .brand .brand-text{display:none}
html.collapsed .sidebar .brand .brand-mark{flex:0 0 38px;width:38px;height:38px;margin:0}
.topbar{height:74px}

/* ---------- Collapse arrow: sits on the line between sidebar and header ---------- */
html .topbar .edge-toggle,html.collapsed .topbar .edge-toggle{position:absolute;left:-14px;right:auto;top:50%;transform:translateY(-50%);margin:0;padding:0;flex:none;
  width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-size:18px;font-weight:700;line-height:1;z-index:40;color:#b77a12;
  background:linear-gradient(145deg,#fff,#fbeccb);border:1px solid #fff;box-shadow:0 8px 16px -6px rgba(95,68,25,.55),0 0 0 3px rgba(227,176,75,.25),inset 0 1px 0 #fff;transition:transform .2s,box-shadow .2s}
html .topbar .edge-toggle:hover,html.collapsed .topbar .edge-toggle:hover{transform:translateY(-50%) scale(1.12);background:linear-gradient(145deg,#fff,#f5dca0);box-shadow:0 10px 20px -6px rgba(183,122,18,.7),0 0 0 4px rgba(227,176,75,.3),inset 0 1px 0 #fff}
@media(min-width:761px){.topbar{z-index:25}}
@media(max-width:760px){html .topbar .edge-toggle,html.collapsed .topbar .edge-toggle{display:none}}`;
function layoutStyle() { let st = document.getElementById('layout-style'); if (!st) { st = document.createElement('style'); st.id = 'layout-style'; document.head.appendChild(st) } st.textContent = LAYOUT_CSS }
function renderLayout() {
    const sb = $('#sidebar'), hd = document.querySelector('header.topbar'); if (!sb || !hd) return;
    layoutStyle(); sb.innerHTML = layoutSidebar(); hd.innerHTML = layoutHeader(); layoutBind();
}
document.addEventListener('click', e => { if (!e.target.closest('.lay-wrap')) layoutClose() });
document.addEventListener('keydown', e => { if (e.key === 'Escape') layoutClose(); if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) { const i = $('#globalSearch'); if (i) { e.preventDefault(); i.focus() } } });
renderLayout();
/* ===================== END OF COMMON HEADER + SIDEBAR ===================== */

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
$('#rateTop').onclick = () => render('rates');
const pathParts = location.pathname.toLowerCase().split('/').filter(Boolean); const routeMap = { 'sales': 'sales', 'purchase': 'purchase', 'inventory': 'inventory', 'metal-rates': 'rates', 'karigar': 'karigar', 'payments': 'payments', 'gst': 'gst', 'customers': 'customers', 'suppliers': 'suppliers', 'reports': 'reports', 'users-&-roles': 'users', 'settings': 'settings', 'expenses': 'expenses', 'dashboard': 'dashboard' }; render(routeMap[pathParts.length > 1 ? pathParts[pathParts.length - 2] : 'dashboard'] || 'dashboard');