// Sources: "Karan Builders Communication Summary" (audit), original 12-week proposal & "KB's Connect Module and Scope Breakdown",
// "Pramod One Demo Track" (MD sir review, 31 Mar – 1 Apr 2026), delivery proof & feature-iteration reports from the 12 KB repos
// (snapshots 3–4 Jul 2026), May / June go-live plans and the "New Development Since March" tracker.

export const auditKpis = [
  { value: '2 → 12+', label: 'Modules with custom screens: planned vs built', tone: 'secondary' },
  { value: '1,509', label: 'Commits across 12 repos (Sep 2025 – Jul 2026)', tone: 'primary' },
  { value: '~296', label: 'Custom DocTypes, plus 22 reports', tone: 'primary' },
  { value: '~90', label: 'Enhancements delivered in the Mar–Apr change wave', tone: 'success' },
  { value: '334 hrs', label: 'Extra changes from MD sir review (Mar 31 – Apr 1)', tone: 'danger' },
  { value: '69 days', label: 'Material Library late vs. Feb 11 deadline', tone: 'danger' },
] as const;

export interface CoreFact {
  title: string;
  claim: string; // what KB's 18 Sep MoM says, in full
  evidence: { date: string; text: string }[];
  conclusion: string;
}

export const coreFacts: CoreFact[] = [
  {
    title: 'Scope',
    claim: 'The full 16-module scope was clear from Day 1, based on SiyaraTech\'s quotation.',
    evidence: [
      { date: 'Jul–Aug 2025', text: '12-week plan of 17 module lines. Custom screens only for Safety and Quality; everything else as standard backend forms (except approvals, self-service and DPR workflows).' },
      { date: 'Nov 20, 2025', text: 'KB asked to build all modules in parallel instead of week by week.' },
      { date: '2026', text: '4 new modules not in the plan: Subcontractor, Labour, the BOQ → RA → Budget → WBS engine and Central Hub. Biometric/face and Tally were marked "separate billing" in the proposal and were built anyway.' },
      { date: 'Jul 2026', text: 'Built: custom screens for 12+ modules, 20 frontend module areas, ~296 custom DocTypes, 22 reports.' },
    ],
    conclusion: 'Planned: 17 basic modules, 2 with custom screens. Built: 12+ with custom screens, plus 6 modules outside the plan.',
  },
  {
    title: 'Task Manager',
    claim: 'Task Manager was suggested in Jan 2026 as a separate, unlinked module because the other modules were delayed.',
    evidence: [
      { date: 'Dec 23, 2025', text: 'Task Manager demonstrated to KB\'s planning team.' },
      { date: 'Jan 10, 2026', text: 'Live in UAT with bulk Excel task upload and daily site tracking.' },
      { date: 'Feb 27, 2026', text: 'Confirmed as the central hub that feeds every module and employee evaluation.' },
      { date: 'Later', text: 'Gen 1 (points, request-to, handover) was built and used; KB\'s priorities then changed and it was rebuilt from scratch as the org-wide Gen 2 hub.' },
    ],
    conclusion: 'It existed before January. The later rebuild was driven by KB\'s changed requirements, not by delays.',
  },
  {
    title: 'Demos',
    claim: 'The Hotel Orchid (Mar 2026) and Annual Day (Apr 2026) demos showed modules that did not work and could not generate reports.',
    evidence: [
      { date: 'Mar 6, 2026', text: 'Release the day before Hotel Orchid: Client Billing, Proforma & Tax Invoices, Client Invoice, Bill Tracker, Subcontractor measurement.' },
      { date: 'Apr 17, 2026', text: 'Release the day before Annual Day: Material Request, Rate Analysis linked to WBS, Asset Movement & Transfer.' },
      { date: 'Apr 18–19, 2026', text: 'KB launched PramodOne to 200+ employees on these builds.' },
    ],
    conclusion: 'The demos ran on working builds. Management reports need KB\'s master data first (see Data upload).',
  },
  {
    title: 'Data upload',
    claim: 'Uploading one project\'s data took 5 months because of "tremendous software resistance".',
    evidence: [
      { date: 'Jan 22 → Apr 21', text: 'Material Library: requested Jan 22, lock deadline Feb 11, received Apr 21 (69 days late).' },
      { date: 'Apr 8 → Apr 21', text: '60-user permission list: requested urgently, still pending Apr 11, received Apr 21.' },
      { date: 'May 5, 2026', text: 'Go-live plan slipped: Assets, Subcontractor and Labour onboarding data "yet to receive"; Rate Analysis arrived May 6 EOD. SiyaraTech entered BOQ, RA and WBS itself to unblock.' },
      { date: 'Jun 27 → Aug 18', text: 'Tower-wise WBS received Jun 27–29; extra-work WBS still arriving Aug 18.' },
    ],
    conclusion: 'Every slip was a data gate, not a code gate. SiyaraTech also cleaned and imported KB\'s data itself.',
  },
  {
    title: 'Process mapping',
    claim: 'Mrs. Mirajkar concluded that SiyaraTech did not prepare flowcharts or wireframes before starting.',
    evidence: [
      { date: 'Oct 18, 2025', text: 'Budget preparation flowchart provided by KB (Shriya Ingale).' },
      { date: 'Apr 8, 2026', text: 'Subcontractor workflow drawn by KB (Aishwarya Saha) and handed to SiyaraTech.' },
      { date: 'Aug 2025 – Jun 2026', text: 'SiyaraTech mapped processes in Excalidraw for 135+ Doctypes.' },
    ],
    conclusion: 'Flowcharts existed. They were made jointly, and several were made by KB itself.',
  },
  {
    title: 'Requirements',
    claim: 'SiyaraTech did not capture the workflow upfront.',
    evidence: [
      { date: 'Throughout', text: 'HODs and MD sir explained the same workflow differently, and each version had to be reconciled.' },
      { date: 'Mar–Apr 2026', text: 'Billing journey and subcontractor logic were shared in full only late: "you wouldn\'t have understood it earlier". Billing changes were communicated only after the Orchid event.' },
      { date: 'Mar 31 – Apr 1', text: 'MD sir\'s review added 334 man-hours of changes across 13 modules and reversed earlier decisions (separate → combined WO invoices; GST-only → non-GST subcontractors allowed).' },
      { date: 'Built → redone', text: 'Task Manager rebuilt (Gen 1 → Gen 2); Measurement Forms built, field-tested, then removed at KB\'s direction.' },
    ],
    conclusion: 'The workflow kept changing after it had been agreed and built.',
  },
];

// How requirements reached SiyaraTech
export const requirementGaps = [
  {
    title: 'Two versions of one workflow',
    detail: 'The HODs and MD sir explained the same requirement and way of working differently, so each module had to be reconciled between two versions.',
  },
  {
    title: 'Given in parts',
    detail: 'Requirements often came incomplete and were filled in only after a build was demoed, so finished work had to be redone.',
  },
  {
    title: 'Held back until late',
    detail: 'Subcontractor billing: we were told "we didn\'t tell you earlier because you wouldn\'t have understood it then". The full logic came only at the Apr 2026 discussions.',
  },
  {
    title: 'Built, then reversed',
    detail: 'MD sir review reversed HOD-agreed decisions (334 extra hrs). Task Manager Gen 1 was rebuilt as Gen 2; Measurement Forms were built and then removed.',
  },
];

export type ClaimVerdict = 'refuted' | 'aligned' | 'conditional';

export interface Claim {
  no: number;
  short: string;
  kb: string;
  record: string;
  sources: string[];
  verdict: ClaimVerdict;
}

export const claims: Claim[] = [
  {
    no: 1,
    short: 'Sep 15 MoM denied',
    kb: 'Entire MoM dated 15 Sep 2026 shared by SiyaraTech is denied.',
    record: 'The Sep 15 MoM captured what was agreed on Sep 12: baseline setup, variance reporting and single-project validation suggested by Mrs. Amita Mirajkar.',
    sources: ['Review email thread (12–18 Sep 2026)'],
    verdict: 'refuted',
  },
  {
    no: 2,
    short: '16 modules on Day 1',
    kb: 'Scope clarity for 16 modules was given on Day 1 based on the quotation.',
    record: 'The original 12-week plan listed 17 module lines as standard backend forms, with custom screens only for Safety and Quality. KB then asked for everything in parallel (Nov 2025) and added Subcontractor, Labour, the BOQ → RA → Budget → WBS engine and Central Hub, and had Biometric/face and Tally built although the proposal marked them "separate billing". Today 12+ modules have custom screens.',
    sources: ['12-week proposal & scope breakdown', 'Invoice SINV-25-00003-3', 'Repo delivery proof (3 Jul 2026)'],
    verdict: 'refuted',
  },
  {
    no: 3,
    short: 'Task Manager = Jan workaround',
    kb: 'Task Manager was suggested in Jan 2026 as a separate, unlinked module due to delays.',
    record: 'Demonstrated Dec 23, 2025 → UAT Jan 10, 2026 → engineered as the data spine linking execution & employee evaluation. kb_task repo started Nov 11, 2025.',
    sources: ['Task Manager demo notes', 'UAT release log', 'kb_task git history'],
    verdict: 'refuted',
  },
  {
    no: 4,
    short: 'Demos were non-functional',
    kb: 'Hotel Orchid (Mar) and Annual Day (Apr) demos showed non-functional modules, no reports.',
    record: 'Releases on Mar 6 and Apr 17, each the day before the event: live Client Billing chain, Subcontractor measurement, Rate Analysis → WBS, Material Request, Asset Movement. Demos ran on working builds.',
    sources: ['Release logs (Jan–Jun 2026)', 'Commit waves per deployment'],
    verdict: 'refuted',
  },
  {
    no: 5,
    short: '5 months of "software resistance"',
    kb: 'Uploading single-project data took 5 months due to "tremendous software resistance".',
    record: 'Master data arrived late: Material Library Apr 21, Rate Analysis May 6 (after the May 5 go-live target), Assets / Subcontractor / Labour onboarding still missing on May 5, Tower WBS Jun–Aug. SiyaraTech cleaned KB\'s Excel data and entered BOQ, RA and WBS itself.',
    sources: ['Material Library follow-up', 'May Go-Live Plan (raw data table)', 'User/Material emails'],
    verdict: 'refuted',
  },
  {
    no: 6,
    short: 'Reports not generating',
    kb: 'Uploaded data is not processing and reports are not generating across modules.',
    record: '22 reports and module dashboards are live. Management dashboards were sequenced after master-data entry (agreed plan), and reports need final WBS balances and locked library values, both changed or sent late by KB.',
    sources: ['June Go-Live Plan (Phase 4)', 'Discussion on Planning MoM (11 Jun)'],
    verdict: 'refuted',
  },
  {
    no: 7,
    short: 'No flowcharts / wireframes',
    kb: 'Mrs. Mirajkar concluded SiyaraTech did not prepare flowcharts/wireframes before start.',
    record: 'Budget flowchart from KB (Shriya Ingale, Oct 2025), Subcontractor flow from KB (Aishwarya Saha, Apr 2026), Excalidraw maps for 135+ Doctypes. The flows kept changing because HODs and MD sir explained them differently, and the full subcontractor logic was held back until Apr 2026 ("you wouldn\'t have understood it earlier").',
    sources: ['Budget flowchart email', 'Subcontractor flow email', 'Work summary log'],
    verdict: 'refuted',
  },
  {
    no: 8,
    short: 'Needs automated linking',
    kb: 'Software resistance / item coding need automated testing; only raw data shown.',
    record: 'Linking automation was declared 100% out-of-scope by mutual agreement on Jun 16, 2026 — manual population required.',
    sources: ['Scope Breakdown MoM (16 Jun 2026)'],
    verdict: 'refuted',
  },
  {
    no: 9,
    short: 'TM integrated only later',
    kb: 'Task Manager was envisaged separately and later integrated as the ERP backbone.',
    record: 'Positioned as the central hub in Dec 2025 and Feb 2026 meetings. The Gen 1 → Gen 2 rebuild into an org-wide hub happened because KB changed what it wanted (from points-based tracking to DPR accuracy), not because it was unplanned.',
    sources: ['Catchup MoM (27 Feb)', 'kb_task + TaskManager history (144 iterations)'],
    verdict: 'refuted',
  },
  {
    no: 10,
    short: 'Dummy project validation',
    kb: 'Mrs. Mirajkar suggested validating the complete workflow with a dummy project.',
    record: 'Agreed by SiyaraTech on Sep 12 — already recorded in SiyaraTech\'s Sep 15 MoM.',
    sources: ['SiyaraTech Review MoM (15 Sep)'],
    verdict: 'aligned',
  },
  {
    no: 11,
    short: 'On-site deployment',
    kb: 'Rohit Sonawale and Shubham Gagare to be deployed at KB office.',
    record: 'Agreed — close on-site coordination to finish dummy project testing and baseline validation.',
    sources: ['SiyaraTech Review MoM (15 Sep)'],
    verdict: 'aligned',
  },
  {
    no: 12,
    short: 'Rohit involved till closure',
    kb: 'Personal involvement of Rohit Sonawale until completion and final acceptance.',
    record: 'Confirmed as part of SiyaraTech\'s governance commitment.',
    sources: ['Email thread (12–18 Sep)'],
    verdict: 'aligned',
  },
  {
    no: 13,
    short: 'Final review with MD & expert',
    kb: 'Final review with Mr. Pramod Suryawanshi, KB team and Mrs. Mirajkar before closure.',
    record: 'Fully aligned — review follows completion of the dummy project validation.',
    sources: ['Review MoM (15 Sep)'],
    verdict: 'aligned',
  },
  {
    no: 14,
    short: 'Firm closure dates',
    kb: 'Firm final demo & closure dates with aggressive line of action from SiyaraTech.',
    record: 'Dates depend on KB locking master data and validating the single-project baseline.',
    sources: ['Review MoM (15 Sep)', 'Scope Breakdown MoM'],
    verdict: 'conditional',
  },
];

// ---- Dual-lane timeline ----

export type Lane = 'siyaratech' | 'kb' | 'milestone';

export interface LaneEvent {
  date: string; // ISO
  end?: string; // ISO — for KB request → delivery bars
  lane: Lane;
  title: string;
  detail: string;
  late?: boolean;
}

export const laneEvents: LaneEvent[] = [
  // SiyaraTech deliveries
  { date: '2025-07-18', lane: 'siyaratech', title: 'KB-Connect proposal', detail: '12-week plan, web + mobile.' },
  { date: '2025-08-19', lane: 'siyaratech', title: 'Scope breakdown sent', detail: 'Module-wise scope: 17 module lines. Custom screens only for Safety and Quality.' },
  { date: '2025-09-17', lane: 'siyaratech', title: 'Build starts', detail: 'First commits: kb_quality (Sep 17), kbweb frontend (Sep 18), kb_safety (Sep 19). P&M, Contracts, Budget, Planning, Labour follow in October; kb_task Nov 11.' },
  { date: '2025-11-20', lane: 'siyaratech', title: 'All modules in parallel', detail: 'Invoice SINV-25-00003-3 (₹3.5L + GST). Plan changed from sequential weeks to all modules at once, at KB\'s request.' },
  { date: '2025-12-23', lane: 'siyaratech', title: 'Task Manager demo', detail: 'Live demo to KB planning team — a month before KB says it was "suggested".' },
  { date: '2026-01-10', lane: 'siyaratech', title: 'Task Manager → UAT', detail: 'Bulk Excel task upload, daily site tracking at /kbweb.' },
  { date: '2026-01-17', lane: 'siyaratech', title: 'HR + Purchase → UAT', detail: 'HR module (/kbweb) and Purchase module (/app/buying). 441 commits landed before this deploy.' },
  { date: '2026-01-21', lane: 'siyaratech', title: 'Contracts & Billing walkthrough', detail: 'Rate Analysis, BOQ, Quantity Analysis. Measurement forms flagged for removal after KB feedback.' },
  { date: '2026-02-21', lane: 'siyaratech', title: 'v1.5.1.1 → UAT', detail: 'Subcontractor Billing, Client Billing, Rate Analysis changes, PWA support.' },
  { date: '2026-02-27', lane: 'siyaratech', title: 'Accounts + Tally demo', detail: 'Accounts + Cost Center, Kharchi, Payment Stages. Multi-punch labour attendance logic agreed.' },
  { date: '2026-03-06', lane: 'siyaratech', title: 'Release before Hotel Orchid', detail: 'Client Billing, Proforma, Tax & Client Invoice, Bill Tracker; Subcontractor measurement + departmental flow.' },
  { date: '2026-03-26', lane: 'siyaratech', title: 'Subcontractor, Labour & HR demos', detail: 'KB changes HR scope: remove Leave Encashment & Fleet, add salary auto-load, leave on slips, MIS exports.' },
  { date: '2026-03-31', lane: 'siyaratech', title: 'MD sir module review', detail: 'MD sir reviewed 13 modules (Mar 31 – Apr 1): 334 man-hours of changes, several reversing HOD-agreed decisions.' },
  { date: '2026-04-17', lane: 'siyaratech', title: 'Release before Annual Day', detail: 'Material Request workflow, Rate Analysis → WBS activities, Asset Movement & Transfer.' },
  { date: '2026-04-30', lane: 'siyaratech', title: '~90 enhancements delivered', detail: 'The Mar–Apr change wave closed: ~90 items across Planning, Budget, Central Hub, Store, Subcontractor, Labour, Purchase, Accounts, Safety, Quality, Contracts, Task Manager, HR.' },
  { date: '2026-05-21', lane: 'siyaratech', title: 'v1.6.0.0', detail: 'Biometric attendance sync, Grand Project hierarchy, responsive print engine with client logo, GRN widget, mobile refresh.' },
  { date: '2026-05-22', lane: 'siyaratech', title: 'v1.6.1.0', detail: 'List views standardised across 30+ DocTypes, PWA install prompt, service-worker rewrite, labour efficiency formula.' },
  { date: '2026-05-28', lane: 'siyaratech', title: 'v1.6.2.0', detail: 'Sandwich Leave policy, Labour usage ↔ costing engine linked, DMR report fix, Report Hub overhaul. Three releases in 7 days.' },
  { date: '2026-06-14', lane: 'siyaratech', title: '1,863 hrs work log', detail: 'One developer\'s log: React + Frappe (KBWEB), dynamic engine for 135+ Doctypes, ~70% smaller bundle, data-cleaning scripts.' },
  { date: '2026-07-03', lane: 'siyaratech', title: '~21 fixes in 2 weeks', detail: 'June plan Phase 1: PO-GRN linking, FIFO & brand-free issuing, misc items, RFI links, Safety/Quality save bugs, GST auto-calc, Kharchi payment. System demo the same day.' },
  { date: '2026-09-15', lane: 'siyaratech', title: 'Review MoM issued', detail: 'Rohit Sonawale records Sep 12 alignment: BOQ/RA/Budget/WBS flow, variance reports, dummy-project validation.' },

  // KB inputs (request → delivery)
  { date: '2025-08-20', end: '2025-08-30', lane: 'kb', title: 'Prerequisite documents', detail: 'Requested Aug 20 (DPR, DLR, checklists, contracts). Samples received Aug 30.' },
  { date: '2025-10-16', end: '2025-10-18', lane: 'kb', title: 'Budget flowchart (KB)', detail: 'Shriya Ingale sent FLOW CHART FOR BUDGET PREPARATION.docx — a KB-provided flowchart.' },
  { date: '2026-01-22', end: '2026-04-21', lane: 'kb', title: 'Master Material Library', detail: 'Item.csv shared Jan 22 · lock deadline Feb 11 missed · delivered Apr 21 (69 days past deadline).', late: true },
  { date: '2026-04-08', end: '2026-04-21', lane: 'kb', title: '60-user permission list', detail: 'Urgent request Apr 8 (with concrete sheets, mix designs, machine list, subcon BOQs). Still pending Apr 11. Delivered Apr 21.', late: true },
  { date: '2026-05-02', end: '2026-05-06', lane: 'kb', title: 'Go-live master data', detail: 'Supplier data May 2 with column mismatch; Rate Analysis May 6 EOD (after the May 5 target); Assets, Subcontractor and Labour onboarding still "yet to receive". Tally blocked by a licence issue.', late: true },
  { date: '2026-06-11', end: '2026-06-29', lane: 'kb', title: 'Tower-wise WBS indent', detail: 'WBS corrections actioned Jun 11. Towers 1–3 quantities sent Jun 27–29 (Rushikesh Pol).', late: true },
  { date: '2026-08-18', lane: 'kb', title: 'Extra Work Lean Concrete WBS', detail: 'More WBS data still arriving Aug 18 — 7 months into the "5-month" window.', late: true },

  // Milestones
  { date: '2026-02-11', lane: 'milestone', title: 'Library lock deadline', detail: 'EOD Feb 11 deadline for KB to lock the Master Material Library — missed.' },
  { date: '2026-03-07', lane: 'milestone', title: 'Hotel Orchid', detail: 'ERP presented to HODs & PMs on the Mar 6 build.' },
  { date: '2026-03-28', lane: 'milestone', title: 'Site + HO visit', detail: 'Triggered the Mar–Apr change-request wave (~334 man-hours estimated, ~90 items delivered by end of April).' },
  { date: '2026-04-18', lane: 'milestone', title: 'Annual Day launch', detail: 'PramodOne launched to 200+ employees on the Apr 17 build.' },
  { date: '2026-05-05', lane: 'milestone', title: 'May go-live plan', detail: '5-phase module go-live targeted May 5–7. Slipped because master data was missing, not because of code.' },
  { date: '2026-06-16', lane: 'milestone', title: 'Linking out of scope', detail: 'Scope MoM: both parties agree linking automation is 100% out of scope — data entry is manual.' },
  { date: '2026-06-19', lane: 'milestone', title: 'June go-live plan', detail: 'Jun 19 – Jul 31 in 4 phases: bug fixes → KB data import → change requests + training → management dashboards.' },
  { date: '2026-09-18', lane: 'milestone', title: 'KB contested MoM', detail: 'Karan Suryawanshi rejects the Sep 15 MoM with 14 claims.' },
];

export const timelineRange = { start: '2025-07-01', end: '2026-09-30' };

// ---- Scope growth ----

// Original 12-week proposal. ui: which screens were promised
export const originalScope: { week: string; module: string; ui: 'custom' | 'partial' | 'basic' }[] = [
  { week: '1', module: 'User Management, Store Management', ui: 'basic' },
  { week: '2–3', module: 'Purchase & Procurement', ui: 'basic' },
  { week: '3–4', module: 'Contracts & Client Billing', ui: 'basic' },
  { week: '4–5', module: 'Accounts & Finance', ui: 'basic' },
  { week: '5–6', module: 'Planning & Estimation', ui: 'basic' },
  { week: '6–7', module: 'Billing', ui: 'basic' },
  { week: '7–8', module: 'Plant & Machinery', ui: 'basic' },
  { week: '8', module: 'Fuel Management', ui: 'basic' },
  { week: '9', module: 'Safety, Quality Control', ui: 'custom' },
  { week: '9–10', module: 'Execution & DPRs (tasks, approvals, self-service)', ui: 'partial' },
  { week: '10–11', module: 'HR & Payroll', ui: 'basic' },
  { week: '11', module: 'Integrated Communication', ui: 'basic' },
  { week: '12', module: 'Reporting & Dashboards, Data Migration', ui: 'basic' },
];

export interface ScopeAddition {
  date: string;
  title: string;
  original: string; // closest item in the original plan ('—' if none)
  added: string;
}

export const scopeAdditions: ScopeAddition[] = [
  { date: 'Nov 20, 2025', title: 'All modules in parallel', original: 'One module group per week, in sequence', added: 'KB asked to build everything at once' },
  { date: 'Dec 2025 →', title: 'Task Manager Gen 1 → Gen 2', original: 'Basic task tracking inside DPRs', added: 'Gen 1 (points, request-to, handover) built and used, then rebuilt from scratch as the org-wide Gen 2 hub' },
  { date: 'Jan–Feb 2026', title: 'Measurement forms', original: '—', added: 'Built, field-tested, then removed at KB\'s direction' },
  { date: 'Feb 6, 2026', title: 'BOQ → RA → Budget → WBS engine', original: 'Estimation templates', added: 'Multi-level Rate Analysis driving the whole budget automatically (60 DocTypes)' },
  { date: 'Feb 2026', title: 'Labour Management', original: '—', added: 'Full module: attendance, onboarding, DLR/DLCR costing, Kharchi' },
  { date: 'Feb 2026', title: 'Tally sync', original: 'Separate billing', added: 'Accounts sync with Tally (tested, to be deployed)' },
  { date: 'Mar 6, 2026', title: 'Billing journey reworked', original: 'Basic invoices', added: 'Proforma → Tax invoice journey + accounts linking; changed several times, shared only after the Orchid event' },
  { date: 'Mar 26–27, 2026', title: 'HR & Accounts customisations', original: 'Payroll; bill verification', added: 'Sandwich Leave engine, Skill Checklists, salary auto-load; IFSC/PAN checks, negative-cash block, HO expense split' },
  { date: 'Mar 28 – Apr 30', title: 'Site visit + MD review wave', original: 'Modules built to HOD-agreed flows', added: '334 hrs estimated; ~90 enhancements delivered across 13 modules' },
  { date: 'Apr 7, 2026', title: 'Subcontractor Management', original: 'Client billing only', added: 'Work orders, payment stages, invoices, BOQ, exit form; Item Rate vs Built-Up math, m²↔ft², MD/VP gates' },
  { date: 'May 2026', title: 'Biometric + face attendance', original: 'Separate billing', added: 'ADMS device sync + face recognition for staff and labour (tested, to be deployed)' },
  { date: 'Jun 2026', title: 'June change requests', original: '—', added: 'All-in-one RFI, safety approvals & navigation, work permits, HR form changes, ~60 pending items' },
];

// ---- Modules: planned vs built ----

export type ModuleTag = 'as-planned' | 'expanded' | 'new' | 'separate' | 'removed';

export interface ModuleRow {
  name: string;
  tag: ModuleTag;
  status: string;
  planned: string;
  delivered: string;
  june?: string; // changes requested in June 2026
  evidence?: string;
}

export const modules: ModuleRow[] = [
  { name: 'Safety', tag: 'as-planned', status: 'Live', planned: 'Custom screens (in scope)', delivered: 'Incident, accident, near-miss, first-aid reports; work permits & safety checklists (template + question engines); toolbox talks; inspections. Landing page, Kanban, 13 form pages, alerts.', june: 'Dashboard changes, shorter approval flow, work permits, navigation & form structure', evidence: 'kb_safety · 26 DocTypes · 82 commits' },
  { name: 'Quality', tag: 'as-planned', status: 'Live', planned: 'Custom screens (in scope)', delivered: 'Pour cards, RFI, Aluform & quality checklists, NCR, cube strength, RCC handover, level/plumb checks. Landing page, Kanban, 12 form pages, alerts.', june: 'All-in-one RFI', evidence: 'kb_quality · 47 DocTypes · 80 commits' },
  { name: 'User Mgmt & Approvals', tag: 'as-planned', status: 'Live', planned: 'Basic backend', delivered: 'Roles, configurable approval routing, 60 users set up.', evidence: 'kb_approver · 3 DocTypes' },
  { name: 'Contracts & Client Billing', tag: 'expanded', status: 'Live', planned: 'Basic backend: contracts, BOQ, milestones, invoicing (Billing, weeks 6–7, folded in)', delivered: 'Client BOQ, billing, proforma & tax invoices, bill tracker, quantity tracking, BOQ Parser, full custom screens.', june: 'Sync planned vs actual for misc items; show rate difference vs RA bill', evidence: 'kb_contracts_client_billings · 67 DocTypes · 143 commits' },
  { name: 'Accounts & Finance', tag: 'expanded', status: 'Live', planned: 'Basic backend', delivered: 'ERPNext accounts carried through and improved; client billing journey (Proforma → Tax Invoice) linked to accounts; changed several times, shared after the Orchid event.', evidence: 'ERPNext + extensions in contracts app' },
  { name: 'Planning & Estimation', tag: 'expanded', status: 'Live', planned: 'Basic backend forms', delivered: 'Full WBS hierarchy, client baseline approval workflow, interactive Gantt, S-curve, Daily MIS, budget vs actual.', evidence: 'kb_planning · 15 DocTypes · 45 commits · frontend 136 iterations' },
  { name: 'Store & Purchase', tag: 'expanded', status: 'Live', planned: 'Basic backend (weeks 1–3)', delivered: 'GRN, Material Request Kanban, issue & transfer flows, stock dashboard & reports, purchase dashboard.', june: '7 fixes resolved: misc items, brand-free issuing, free supply, GRN totals', evidence: 'ERPNext stock/buying + frontend Stock (67 iterations)' },
  { name: 'Plant & Machinery (+ Fuel)', tag: 'expanded', status: 'Live', planned: 'Basic backend; Fuel as week 8', delivered: 'Logbooks, RTO compliance, preventive checklists, daily diesel issue, material tracking; 7-form frontend, asset P&L.', june: 'Misc items planned vs actual; workarounds for old-data import', evidence: 'kb_p_m · 32 DocTypes · 116 commits' },
  { name: 'HR & Payroll', tag: 'expanded', status: 'Live', planned: 'Backend, with approvals & self-service', delivered: '~40 custom HRMS pages across 15+ areas, employee self-service portal, Sandwich Leave engine, Skill Checklists.', june: 'Many small form changes, a few bugs', evidence: 'kb_hrms + HRMS frontend (65 iterations + sub-modules)' },
  { name: 'Task Manager', tag: 'expanded', status: 'Live (Gen 2)', planned: 'Basic task tracking inside Execution & DPRs', delivered: 'Gen 1 (points, request-to, handover) built and used → rebuilt as Gen 2 org-wide hub: task tree, DPR view, templates, bulk create.', evidence: 'kb_task · 127 commits · frontend 144 iterations (most in the stack)' },
  { name: 'BOQ → RA → Budget → WBS', tag: 'new', status: 'Live', planned: 'Not mentioned', delivered: 'Multi-level Rate Analysis, budget rollups, overheads, machinery & asset costing. Quantities flow from BOQ to the full budget automatically.', evidence: 'kb_budget · 60 DocTypes · 73 commits' },
  { name: 'Subcontractor Mgmt', tag: 'new', status: 'Live', planned: 'Not mentioned', delivered: 'Work orders with payment stages, invoices, subcontractor BOQ, Kharchi, exit form; dedicated screens.', evidence: '12+ DocTypes · frontend 77 iterations' },
  { name: 'Labour Management', tag: 'new', status: 'Live', planned: 'Not mentioned', delivered: 'Attendance, onboarding, work assignment, DLR / DLCR costing, Kharchi, subcontractor labour.', evidence: 'kb_labour_management · 27 DocTypes · 80 commits' },
  { name: 'Central Hub', tag: 'new', status: 'Live', planned: 'Not mentioned', delivered: 'P&L across all machinery and owned assets.', evidence: 'frontend CentralHub · 60 iterations' },
  { name: 'Biometric & Face', tag: 'separate', status: 'Tested, to deploy', planned: 'Separate billing', delivered: 'ADMS sync service for eSSL/ZKTeco devices; face enrolment & recognition for staff and labour.', evidence: 'adms-sync-service + 7 biometric pages' },
  { name: 'Tally Integration', tag: 'separate', status: 'Tested, to deploy', planned: 'Separate billing', delivered: 'Accounts sync with Tally. Deployment waiting on KB\'s Tally licence.', evidence: 'Accounts sync flow' },
  { name: 'Integrated Communication', tag: 'as-planned', status: 'Live', planned: 'Basic backend', delivered: 'Email communication and comments on every form.' },
  { name: 'Reporting & Dashboards', tag: 'as-planned', status: 'Partial', planned: 'Basic backend', delivered: 'Module dashboards + 22 reports live. Management dashboards after data entry (agreed sequencing).', june: 'New changes suggested module-wise' },
  { name: 'Data Migration', tag: 'as-planned', status: 'Live', planned: 'Basic backend', delivered: 'Bulk import / export tooling; SiyaraTech imported BOQ, RA and WBS itself.' },
  { name: 'Measurement Forms', tag: 'removed', status: 'Built & removed', planned: 'Not mentioned', delivered: 'Concrete & shuttering measurement forms were fully built and linked to Planning, field-tested, then removed at KB\'s direction because site measurements change too often. Quantity DocTypes kept for future use.' },
];

// ---- Effort & evidence ----

export const repoStats = [
  { repo: 'kbweb (frontend)', commits: 720, doctypes: 0 },
  { repo: 'kb_contracts_client_billings', commits: 143, doctypes: 67 },
  { repo: 'kb_task', commits: 127, doctypes: 11 },
  { repo: 'kb_p_m', commits: 116, doctypes: 32 },
  { repo: 'kb_safety', commits: 82, doctypes: 26 },
  { repo: 'kb_labour_management', commits: 80, doctypes: 27 },
  { repo: 'kb_quality', commits: 80, doctypes: 47 },
  { repo: 'kb_budget', commits: 73, doctypes: 60 },
  { repo: 'kb_planning', commits: 45, doctypes: 15 },
  { repo: 'kb_hrms', commits: 24, doctypes: 8 },
  { repo: 'kb_approver', commits: 11, doctypes: 3 },
  { repo: 'adms-sync-service', commits: 8, doctypes: 0 },
];

// Most-revised features (iterations = commits touching that feature)
export const hotFeatures = [
  { name: 'Task Manager (screens)', n: 144 },
  { name: 'Planning (screens)', n: 136 },
  { name: 'Subcontractor (screens)', n: 77 },
  { name: 'Stock (screens)', n: 67 },
  { name: 'HRMS (screens)', n: 65 },
  { name: 'Central Hub (screens)', n: 60 },
  { name: 'Quality (screens)', n: 57 },
  { name: 'Safety (screens)', n: 52 },
  { name: 'Safety checklist', n: 29 },
  { name: 'Labour onboarding', n: 28 },
  { name: 'Aluform checklist', n: 25 },
  { name: 'RFI', n: 24 },
  { name: 'Client baseline', n: 21 },
  { name: 'Rate Analysis', n: 20 },
];

// Commits that followed each meeting / deployment
export const commitWaves = [
  { window: 'Kickoff → Jan 17', trigger: 'Initial build', commits: 441 },
  { window: 'Jan 17 → Feb 21', trigger: 'HR / Purchase / TM deploy', commits: 258 },
  { window: 'Feb 21 → Feb 28', trigger: 'v1.5.1.1', commits: 32 },
  { window: 'Feb 28 → Mar 6', trigger: 'Accounts showcase', commits: 22 },
  { window: 'Mar 6 → Mar 26', trigger: 'Orchid-eve deploy', commits: 99 },
  { window: 'Mar 26 → Mar 28', trigger: 'Demo day', commits: 6 },
  { window: 'Mar 28 → Apr 17', trigger: 'Site visit change wave', commits: 145 },
  { window: 'Apr 17 → May 5', trigger: 'Annual Day deploy', commits: 117 },
  { window: 'May 5 → May 21', trigger: 'May go-live plan', commits: 95 },
  { window: 'May 21 → May 28', trigger: '3 releases in 7 days', commits: 34 },
  { window: 'May 28 → Jun 19', trigger: 'May 28 meeting', commits: 127 },
  { window: 'Jun 19 → Jul 4', trigger: 'June plan Phase 1', commits: 133 },
];
