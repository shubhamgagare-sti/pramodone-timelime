// Development costing, based on the original 12-week quote.

export const ORIGINAL_QUOTE = 1905000; // ₹, original 12-week proposal
export const ORIGINAL_WEEKS = 12;

// Build window used for the effort estimate: first commit → dummy-project validation
export const BUILD_START = '2025-09-17';
export const BUILD_END = '2026-09-26';

// Documented effort: one developer's logged hours (Aug 11, 2025 – Jun 14, 2026)
export const DOCUMENTED_HOURS = { person: 'Prathamesh Malode', hours: 1863, from: 'Aug 11, 2025', to: 'Jun 14, 2026' };

// Unplanned work, itemised (items added up; not a stated total)
export const unplannedItems = [
  { item: 'Planning & Estimation (Budget engine, BOQ Parser, BOQ → RA → Budget)', price: 250000, why: 'Largest connected effort: planning model, budget engine, parser, automation pipeline' },
  { item: 'Task Manager Gen 2 (org-wide hub)', price: 200000, why: 'Full re-architecture: task tree, DPR view, bulk/template creation' },
  { item: 'Task Manager Gen 1 (later retired)', price: 175000, why: 'Points, request-to, handover: full module, built and used, then replaced' },
  { item: 'Subcontractor Management', price: 150000, why: 'Largest unplanned backend + frontend build' },
  { item: 'Biometric + Face Attendance', price: 150000, why: 'Standalone ADMS service, face enrolment, device sync (separate billing in proposal)' },
  { item: 'Tally Integration', price: 125000, why: 'Ledger mapping and sync (separate billing in proposal)' },
  { item: 'Labour Management', price: 110000, why: 'Attendance, onboarding, DLR/DLCR costing, Kharchi' },
  { item: 'Plant & Machinery: extra screens', price: 100000, why: 'Backend-only plan expanded to 7-form frontend + asset P&L' },
  { item: 'Central Hub (asset P&L)', price: 90000, why: 'Cross-module P&L over P&M and accounts data' },
  { item: 'Contracts & Billing: extra build', price: 65000, why: 'Frontend and billing journey over an in-scope backend' },
  { item: 'HR & Payroll: extra screens', price: 55000, why: '~40 custom HRMS pages beyond the planned backend' },
  { item: 'Skill Checklists', price: 40000, why: 'Daily / weekly / monthly / yearly checklist system' },
  { item: 'Quality: extra build', price: 40000, why: 'RFI rework and client documents' },
  { item: 'Measurement Forms (built, then removed)', price: 30000, why: 'Sunk build / unwind cycle' },
  { item: 'Sandwich Leave engine', price: 15000, why: 'Self-contained leave-policy rules' },
];

// Estimate from the audit notes: the original proposal covered roughly 20–25% of what was built
export const SCOPE_SHARE = { low: 0.2, high: 0.25 };
