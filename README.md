# Aurum Jewellery ERP — SIEC-style UI Demo

## Run
1. Extract the ZIP.
2. Open the `jewellery_erp` folder in VS Code.
3. Use Live Server to open `index.html` (or open it directly in Chrome).
4. Use the sidebar to navigate. Click `‹` to collapse it; the `›` arrow remains visible so you can expand it again. The sidebar preference is remembered in the same browser.

## Modules and suggested business logic

### 1. Dashboard
**Purpose:** One-page overview of business health.
**Logic:** Calculate sales and purchase totals from posted transactions, today's collections, receivables/payables, stock valuation, low-stock alerts, overdue karigar jobs and pending approvals. Dashboard values must be derived from saved records, not manually hard-coded.

### 2. Sales & Orders
**Purpose:** Retail/wholesale order-to-invoice workflow.
**Logic:** Create quotation/order; select customer; add SKU/quantity/weight/purity; lock applicable metal rate and making charges at order time; calculate metal value + making charges + stones + discount + taxes; reserve stock; take advance; invoice; deliver; handle return/exchange and refund. Prevent selling more stock than available. Maintain invoice number sequence and audit trail.

### 3. Purchase Management
**Purpose:** Buy gold, silver, gemstones and finished jewellery.
**Logic:** Purchase order → goods receipt/weight and purity verification → supplier bill → payable. Capture gross/net weight, stone weight, wastage, purity, rate, making/refining charges and tax. Update inventory only after receipt is accepted. Flag rate/weight differences and duplicate supplier invoices.

### 4. Inventory & Products
**Purpose:** Track every item, loose metal and component.
**Logic:** Unique SKU/tag/barcode; product category; metal and purity; gross/net/stone weight; quantity; location/vault; cost; reorder level; stock movements. Sales reduce stock, accepted purchases increase stock, transfers move stock between locations, returns require inspection. Use a transaction ledger; don't simply overwrite quantity. Jewellery should be tracked by both pieces and weight where applicable.

### 5. Gold / Silver Rates
**Purpose:** Maintain rate cards for pricing.
**Logic:** Store dated rates per gram by metal/purity, source, effective time and user. Use the rate valid at transaction time; retain historical rate snapshots on invoices. Rate changes should not silently recalculate existing invoices. Confirm whether rates are entered manually or connected to a verified market-rate provider.

### 6. Karigar / Job Work
**Purpose:** Track jewellery sent to artisans for manufacturing/repair.
**Logic:** Create job card; issue metal/components against a signed weight; record design, expected completion, wastage allowance and labour rate; record returned finished goods, scrap and wastage; calculate weight variance and labour payable; approve and settle. Track metal in karigar custody as business-owned stock, and flag overdue jobs or unexplained differences.

### 7. Payments & Accounts
**Purpose:** Record money received and paid.
**Logic:** Receipt/payment voucher linked to customer, supplier, purchase bill, sales invoice or karigar job. Support cash, UPI, card, NEFT/RTGS and bank transfer; store reference number; allow partial payments; calculate remaining balance; prevent accidental duplicate posting; support cancellation/reversal with reason rather than deleting posted payments. Reconcile with bank/cash balances.

### 8. GST & Documents
**Purpose:** Tax documents and compliance summaries.
**Logic:** Configure GSTIN, place of supply, HSN/SAC and applicable tax rules; determine intra-state CGST/SGST vs inter-state IGST; generate numbered tax invoices/credit notes; link documents to source transactions; calculate period-wise summaries and exports. Confirm current tax rates/rules with a qualified accountant before production use.

### 9. Customers
**Purpose:** Retail and wholesale customer records.
**Logic:** Store name, contact, billing/shipping address, GSTIN when relevant, customer type, credit limit and payment terms. Validate phone/email; detect likely duplicates; calculate outstanding from invoices minus allocated receipts/credit notes; block or require approval when credit limit is exceeded; protect customer data by role.

### 10. Suppliers
**Purpose:** Manage vendors and purchase relationships.
**Logic:** Store supplier identity, contacts, GSTIN, supplied categories, payment terms and opening balance. Link purchase bills and payments; compute payable and due dates; flag overdue balances; validate supplier invoice number uniqueness; compare received weight/purity against bill and purchase order.

### 11. Reports & Analytics
**Purpose:** Operational and financial reporting.
**Logic:** Build reports from transaction ledgers: sales by period/product/customer, gross margin, purchases, stock ageing/valuation, metal movement and custody, karigar weight variance, receivables, payables, expenses, tax summary and payment modes. Apply date/branch filters, role permissions and CSV/PDF export. Reports should reconcile to source records.

### 12. Users & Roles
**Purpose:** Team access control.
**Logic:** Secure login, password hashing, account status, role and permission checks on both UI and backend. Example roles: Super Admin, Store Manager, Sales Executive, Inventory Operator, Accountant and Karigar Coordinator. Apply least privilege; sensitive actions (rate changes, discounts, stock adjustments, refunds, user management) need specific permissions and audit logs. UI-only hiding is not security.

### 13. Settings
**Purpose:** Company and workflow configuration.
**Logic:** Store business name/address/GSTIN, branches, financial year, invoice prefixes/sequences, tax configuration, currency, weight units, discount limits, approval rules and notification preferences. Validate changes and audit them. Avoid changing historical invoice snapshots when settings change.

### 14. Expenses
**Purpose:** Record operating expenses.
**Logic:** Capture category, date, amount, payment mode, vendor, branch, tax details, receipt attachment and approver. Workflow: draft → submitted → approved/rejected → paid. Link payments to expense vouchers; prevent duplicates; separate business expenses from inventory purchases and customer refunds; support period/category reports.

## Recommended end-to-end flow
Supplier setup → Purchase order → Goods receipt/purity & weight check → Inventory update → Metal-rate setup → Sales order → Invoice/tax calculation → Payment/advance → Delivery → Return/exchange if any. For custom manufacturing: Job card → Metal issue to karigar → Finished item + scrap/wastage return → Weight reconciliation → Labour settlement → Inventory update. Expenses and all cash/bank movements feed the accounts/reports.

## Suggested backend/database entities
`users`, `roles`, `permissions`, `customers`, `suppliers`, `products`, `stock_locations`, `stock_movements`, `metal_rates`, `sales_orders`, `sales_order_items`, `sales_invoices`, `sales_invoice_items`, `sales_returns`, `purchase_orders`, `goods_receipts`, `purchase_bills`, `payments`, `payment_allocations`, `karigars`, `job_cards`, `metal_issues`, `job_returns`, `expenses`, `expense_approvals`, `tax_documents`, `audit_logs`, `company_settings`.

## Important demo limitations
This is frontend-only. Records are fictional sample data saved in this browser's `localStorage`; no Spring Boot API or MySQL is connected, no real authentication/security exists, and rates are not live market rates. For production, implement validations and business rules in a Java Spring Boot backend and persist them in MySQL; use database transactions for stock, invoice and payment posting. Tax rules and accounting treatment must be confirmed for the business jurisdiction.

## Fixes in this version
- Sidebar expand arrow stays visible when collapsed and restores the full sidebar when clicked.
- Collapse preference is remembered in the same browser.
- Expenses has a dedicated route and navigation entry.
- Demo records persist in `localStorage` across refreshes.
