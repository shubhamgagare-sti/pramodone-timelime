// Development journey: major changes and problems faced, with the evidence behind each one.
// Email links open the thread in the Siyaratech mailbox; "team account" marks points with no written record found.

const mail = (threadId: string) => `https://mail.google.com/mail/u/0/#all/${threadId}`;

export type EvidenceKind = 'email' | 'mom' | 'notes' | 'tracker' | 'repo' | 'doc' | 'account';

export interface Evidence {
  date: string;
  label: string;
  kind: EvidenceKind;
  url?: string;
}

export type ImpactTag = 'Major delay' | 'Rework' | 'New scope' | 'Architecture change' | 'Extra effort' | 'Descoped';

export interface Challenge {
  id: string;
  title: string;
  when: string;
  happened: string;
  impact: ImpactTag[];
  response: string; // what SiyaraTech did
  evidence: Evidence[];
}

export interface Phase {
  id: string;
  label: string;
  period: string;
  headline: string;
  challenges: Challenge[];
}

export const phases: Phase[] = [
  {
    id: 'early-phase',
    label: 'Early phase',
    period: 'Aug – Dec 2025',
    headline: 'Workflows were requested from every department; they came late and incomplete',
    challenges: [
      {
        id: 'workflows',
        title: 'Department workflows requested up front, never fully received',
        when: 'Aug – Oct 2025',
        happened: 'We asked every department for its workflow and documents at the start. Deadlines passed, flowcharts arrived as plain documents or not at all, and the promised end-to-end document flow for contracts & billing never came.',
        impact: ['Major delay', 'Rework'],
        response: 'Mapped the flows ourselves through HOD sessions and sample documents so development could continue.',
        evidence: [
          { date: 'Sep 4, 2025', label: 'Follow-up: documents not on shared drive, tracker sheet still empty', kind: 'email', url: mail('198c7ff0ad68f944') },
          { date: 'Sep 10, 2025', label: 'MoM: KB to share safety flowchart by Sep 11 and BOQ → Tender → Planning flowchart + contract/budget docs by Sep 15', kind: 'mom', url: mail('1993441393bece99') },
          { date: 'Sep 16, 2025', label: '"Got the safety doc… though we were expecting a flowchart"; still waiting for contract, budget, client work-order docs', kind: 'email', url: mail('1993441393bece99') },
          { date: 'Oct 15, 2025', label: 'MoM: Somnath sir\'s team to share the complete document flow and all documents with required fields', kind: 'mom', url: mail('199e6d8d031d517d') },
          { date: 'Dec 29, 2025', label: 'Work-order formats shared ~4 months in: "documents we need to create"', kind: 'email', url: mail('19b698af29c26ec0') },
        ],
      },
      {
        id: 'hod-sessions',
        title: 'HOD sessions: flows explained were not the complete, current flow',
        when: 'Oct – Nov 2025',
        happened: 'We showcased modules to HODs (Safety & Quality first) and ran sessions to learn how each department works. We later found the explanations were partial, and the processes had been modified over time.',
        impact: ['Rework'],
        response: 'Rebuilt forms and logic each time a fuller version of the flow surfaced.',
        evidence: [
          { date: 'Oct 16, 2025', label: 'MoM: estimations & budget creation flow with DGM Planning; flowchart followed Oct 18', kind: 'mom', url: mail('199ed5ab769a6ecd') },
          { date: 'Nov 25, 2025', label: 'HOD demo schedule: Contracts, Planning, Task Manager, HR, Labour, Central Store, Procurement', kind: 'email', url: mail('19abaf6b0880cadf') },
          { date: 'Oct – Nov 2025', label: 'Safety & Quality showcased to HODs first', kind: 'account' },
        ],
      },
      {
        id: 'task-manager',
        title: 'Task Manager built twice',
        when: 'Nov 2025 – 2026',
        happened: 'Before building, we showed a centralised Task Manager connected to all modules. KB asked for a simple Task Manager instead, which we built, deployed and invoiced. The centralised version was then requested after all, so it was rebuilt from scratch.',
        impact: ['Rework', 'Extra effort'],
        response: 'Delivered Gen 1, then rebuilt it as the Gen 2 org-wide hub. Starting with the central design would have saved a full cycle.',
        evidence: [
          { date: 'Nov 14, 2025', label: 'KB shares department task lists (Billing & QS, Accounts, Store)', kind: 'email', url: mail('19a80fd8a6ea3dd4') },
          { date: 'Nov 20, 2025', label: 'Task Manager demo + sales invoice for the Task Manager module', kind: 'email', url: mail('19aa1f5de01237dd') },
          { date: 'Nov 28, 2025', label: 'Task logic overhaul: checklists moved to daily/monthly/yearly frequency', kind: 'account' },
          { date: 'Dec 19, 2025', label: 'Task Manager UAT deployed at /kbweb', kind: 'email', url: mail('19b3516adbf9443f') },
          { date: 'Jul 2026', label: 'kb_task: 127 commits; Task Manager screens: 144 iterations (most in the stack)', kind: 'repo', url: 'https://github.com/siyaratech-admin/kb_task' },
          { date: 'Before Nov 2025', label: 'Central Task Manager showcased before the simple one was requested', kind: 'account' },
        ],
      },
    ],
  },
  {
    id: 'first-releases',
    label: 'First releases',
    period: 'Dec 2025 – Mar 2026',
    headline: '10–12 modules live on UAT by January, followed by big changes to planning, budget and billing',
    challenges: [
      {
        id: 'uat',
        title: '10–12 modules live on UAT in January',
        when: 'Dec 2025 – Jan 2026',
        happened: 'Task Manager, HR, Purchase and the core modules were deployed to UAT and demonstrated repeatedly. Demos got positive feedback.',
        impact: [],
        response: 'Kept deploying and demoing; testing covered Quality, Safety, Labour and Subcontractor by Jan 30.',
        evidence: [
          { date: 'Dec 19, 2025', label: 'UAT deployed: Task Manager', kind: 'email', url: mail('19b3516adbf9443f') },
          { date: 'Jan 17, 2026', label: 'HR module deployed; Purchase module live', kind: 'email', url: mail('19b3516adbf9443f') },
          { date: 'Jan 22, 2026', label: 'PramodOne demo (Gemini notes)', kind: 'notes', url: mail('19be61476200b2a7') },
        ],
      },
      {
        id: 'planning-budget',
        title: 'Planning & budget reworked; BOQ → RA → Budget → WBS automation added',
        when: 'Jan – Mar 2026',
        happened: 'After the demos, MS-Project-style planning and budget changes were requested. In Feb–Mar, full automation from BOQ to Rate Analysis to Budget to WBS was asked for: a very large change delivered in a short time.',
        impact: ['New scope', 'Rework'],
        response: 'Built a complete budget engine (60 DocTypes) and Gantt/baseline planning.',
        evidence: [
          { date: 'Feb 6, 2026', label: 'MoM: Rate Analysis to auto-pull costs; Material Library freeze deadline Feb 11', kind: 'mom', url: mail('19c33f1048fe6bec') },
          { date: 'Mar 28, 2026', label: 'Change-request tracker from the site visit (BOQ → WBS automation)', kind: 'tracker', url: 'https://docs.google.com/spreadsheets/u/1/d/1kHg8aX5Jw2Z_YNDrY4KFFeYoP1N0gFXQb5BqNNjH4aQ/edit?gid=0#gid=0' },
          { date: 'Jul 2026', label: 'kb_budget: 60 DocTypes, 73 commits; Planning screens: 136 iterations', kind: 'repo', url: 'https://github.com/siyaratech-admin/KB-Budget' },
        ],
      },
      {
        id: 'proforma',
        title: 'Proforma & tax invoices appeared at the Orchid review',
        when: 'Mar 2026',
        happened: 'The client-billing journey (proforma invoice → tax invoice) was raised around the Hotel Orchid review. It was not part of the billing flow KB described in October 2025.',
        impact: ['New scope'],
        response: 'Built the proforma → tax invoice → client invoice → bill tracker chain and linked it to accounts.',
        evidence: [
          { date: 'Oct 15, 2025', label: 'MoM: KB\'s client & billing flow (BOQ → quotation → service order → budget → subcontractors → monthly billing), no proforma/tax invoice', kind: 'mom', url: mail('199e6d8d031d517d') },
          { date: 'Mar 2026', label: 'Proforma & tax invoice raised at the Orchid review', kind: 'account' },
        ],
      },
      {
        id: 'subcontractor',
        title: 'Subcontractor billing: 4–5 cycles of progressive disclosure',
        when: 'Dec 2025 – Jul 2026',
        happened: 'The subcontractor billing logic was explained in parts over several months. Around May, the billing department told us in person they had held details back so we would not get confused. KB first wanted most quantities entered manually, then asked for them to be automatic.',
        impact: ['Rework', 'New scope'],
        response: 'Went through 4–5 build cycles; added auto-populated quantity/area in subcontractor BOQ when asked.',
        evidence: [
          { date: 'Dec 29, 2025', label: 'Work-order formats shared ("subcontractor documents shared in later phases")', kind: 'email', url: mail('19b698af29c26ec0') },
          { date: 'Mar 31, 2026', label: 'MD sir review reverses decisions: separate → combined WO invoices; GST-only → non-GST allowed', kind: 'doc' },
          { date: 'Apr 7–8, 2026', label: 'MoM on labour & subcontractor billing + KB reply', kind: 'mom', url: mail('19d6ccbcf7caadc6') },
          { date: 'Jul 3, 2026', label: 'KB: new issues while entering subcontractor invoices (hold %, etc.)', kind: 'email', url: mail('19f2814d36d63804') },
          { date: '~May 2026', label: 'Billing dept: details held back "so that you don\'t get confused"', kind: 'account' },
        ],
      },
    ],
  },
  {
    id: 'site-visit',
    label: 'Site visit & quality',
    period: 'Mar – Jun 2026',
    headline: 'The March site visit revealed new flows; quality needs changed after they were built',
    challenges: [
      {
        id: 'site-visit',
        title: 'Site + HO visit triggered a new wave of changes',
        when: 'Mar 28 – Apr 30, 2026',
        happened: 'The on-site visit surfaced many new changes, including how the different quality documents connect to the RFI. MD sir\'s review added 334 man-hours of changes across 13 modules.',
        impact: ['New scope', 'Rework'],
        response: 'Delivered ~90 enhancements by the end of April.',
        evidence: [
          { date: 'Mar 28, 2026', label: 'Change-request tracker created after the visit', kind: 'tracker', url: 'https://docs.google.com/spreadsheets/u/1/d/1kHg8aX5Jw2Z_YNDrY4KFFeYoP1N0gFXQb5BqNNjH4aQ/edit?gid=0#gid=0' },
          { date: 'Mar 31 – Apr 1', label: 'Demo track: 256 dev + 52 test + 26 deploy = 334 man-hours', kind: 'doc' },
        ],
      },
      {
        id: 'quality',
        title: 'Quality: RFI linking built, then "all docs in one RFI"; client documents shared late',
        when: 'Mar – Jul 2026',
        happened: 'RFI linking was implemented and demoed with little feedback. During data entry KB asked to merge all 7–8 quality checklists into one RFI. Client-side quality documents had been kept out of scope and were shared only later.',
        impact: ['Rework', 'New scope'],
        response: 'Rebuilt the RFI flow (24 iterations) and added support for the client documents.',
        evidence: [
          { date: 'Jan 14, 2026', label: 'Internal quality module documents received (sent Dec 30)', kind: 'email', url: mail('19bb74e9fa6255b4') },
          { date: 'Mar 31 – Apr 1', label: 'Demo track: "earlier all client docs were kept out of system"; 15–20 client docs to add', kind: 'doc' },
          { date: 'Jul 1, 2026', label: 'Quality team reports checklist errors during data entry', kind: 'email', url: mail('19f2276700382e78') },
          { date: 'Jul 2026', label: 'request_for_inspection: 24 iterations; quality screens: 57', kind: 'repo', url: 'https://github.com/siyaratech-admin/KB-Quality' },
        ],
      },
      {
        id: 'measurement',
        title: 'Measurement forms built, then descoped',
        when: 'Jan – Feb 2026',
        happened: 'Client-billing measurement forms (concrete, shuttering, reinforcement) were built and linked to planning. KB then said they would be hard to track in software, so they were descoped.',
        impact: ['Descoped', 'Rework'],
        response: 'Removed the forms but kept the quantity DocTypes for future use.',
        evidence: [
          { date: 'Jan 21, 2026', label: 'Contracts & billing walkthrough: measurement forms flagged for removal', kind: 'doc' },
        ],
      },
    ],
  },
  {
    id: 'data',
    label: 'Master data',
    period: 'Jan – Aug 2026',
    headline: 'Master data came late, in other formats, with missing fields',
    challenges: [
      {
        id: 'master-data',
        title: 'Employees, materials, machinery: late and in the wrong format',
        when: 'Jan – May 2026',
        happened: 'We shared Excel templates with instructions on mandatory fields. Data came late, sometimes in a completely different format, with mandatory fields empty, incomplete rows and values in the wrong columns.',
        impact: ['Major delay', 'Extra effort'],
        response: 'Cleaned, re-mapped and imported the data ourselves instead of blocking go-live.',
        evidence: [
          { date: 'Jan 22, 2026', label: 'Material Library follow-up (freeze deadline Feb 11 missed)', kind: 'email', url: mail('19be51070398da91') },
          { date: 'Mar 26 → Apr 29', label: 'Employee list requested; reminders for salary structure', kind: 'email', url: mail('19d29b2a365b9ddd') },
          { date: 'Apr 11–13, 2026', label: '"The list provided does not match that template"', kind: 'email', url: mail('19d67920d3574c03') },
          { date: 'Apr 27–29, 2026', label: 'Supplier template with instructions; reminder', kind: 'email', url: mail('19dcdabca6f269e2') },
          { date: 'Apr 29, 2026', label: 'Item template issues in parent material & variants', kind: 'email', url: mail('19dd93bc68a38cef') },
          { date: 'May 6, 2026', label: 'Assets & machinery list received after reminders', kind: 'email', url: mail('19daa8630c66dc4d') },
          { date: 'May 12, 2026', label: 'Live stock import: items missing from the library', kind: 'email', url: mail('19df68c573815317') },
        ],
      },
      {
        id: 'boq-upload',
        title: 'SiyaraTech uploaded BOQ, RA and WBS itself; verification came late',
        when: 'May – Aug 2026',
        happened: 'To speed things up we uploaded BOQ, Rate Analysis and WBS (with AI help). KB\'s verification came late. The planning team\'s long absence delayed WBS verification, which blocked other data entry.',
        impact: ['Major delay', 'Extra effort'],
        response: 'Did the upload, re-shared WBS files for reference, and kept other modules moving.',
        evidence: [
          { date: 'May 6, 2026', label: 'Rate Analysis shared on request, after the May 5 go-live target', kind: 'email', url: mail('19dfc4250d476ded') },
          { date: 'Jun 27–29, 2026', label: 'Previously shared WBS re-sent for reference → tower-wise WBS received', kind: 'email', url: mail('19f078be73e100ea') },
          { date: 'Aug 18, 2026', label: 'Extra-work lean concrete WBS still arriving', kind: 'email', url: mail('1a013f0e9f04a265') },
          { date: 'May – Jun 2026', label: 'Planning team absence delayed WBS verification', kind: 'account' },
        ],
      },
      {
        id: 'usage',
        title: 'Live since January, but barely used until data import',
        when: 'Jan – Jun 2026',
        happened: 'Despite being live on UAT since January, hardly anyone at KB used it. Demos got a positive signal; real issues surfaced only once data import started.',
        impact: ['Major delay', 'Rework'],
        response: 'Parked new changes and fixed only the blockers during data import.',
        evidence: [
          { date: 'May – Jun 2026', label: 'Status review: most June tracker items surfaced once KB started trying the system', kind: 'doc' },
          { date: 'Jan – May 2026', label: 'Low usage of the live system before data import', kind: 'account' },
        ],
      },
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture changes',
    period: 'May – Jun 2026',
    headline: 'Late facts changed the core data model',
    challenges: [
      {
        id: 'grand-project',
        title: 'One client BOQ split into towers → "Grand Project"',
        when: 'May – Jun 2026',
        happened: 'We built one tower = one project, each with its own BOQ and client billing, which was the understanding given and never corrected. In May–June we learned the client gives one combined BOQ that KB splits into towers, and that material and machinery are procured grand-project-wide.',
        impact: ['Architecture change', 'Rework'],
        response: 'Added a Grand Project hierarchy across all modules, cost centres and workspace selection.',
        evidence: [
          { date: 'May 21, 2026', label: 'v1.6.0.0: Grand Project hierarchy across all repos', kind: 'doc' },
          { date: 'Jun 6, 2026', label: 'Cost centres confirmed: VTP Volare as the grand project', kind: 'email', url: mail('19e9ad386c0d4733') },
          { date: 'Jun 9, 2026', label: 'BOQ → WBS flow meeting: link grand projects; BOQ only on leaf activities', kind: 'notes', url: 'https://docs.google.com/document/d/15T2is9PLjoLvb1BJwRGN3CQl15WjejprivwuyHrlxMs/edit' },
        ],
      },
      {
        id: 'ra-source',
        title: 'BOQ, RA, Budget, WBS re-connected, with RA as the single source',
        when: 'May – Jun 2026',
        happened: 'After several discussions, the connection was changed again: materials, machinery and labour types are defined in the Rate Analysis and reused as the source for WBS, budget and everything else. Even HODs doubted this could work.',
        impact: ['Architecture change', 'Rework'],
        response: 'Implemented it in a short time; Rate Analysis was fully rebuilt.',
        evidence: [
          { date: 'Mar 31 – Apr 1', label: 'Demo track: "Rate analysis becomes true source for resources"', kind: 'doc' },
          { date: 'Jun 9–11, 2026', label: 'BOQ → WBS flow and planning discussions', kind: 'notes', url: mail('19eb710c46c44ce8') },
          { date: 'Jul 2026', label: 'kb_rate_analysis: 20 iterations, full rebuild', kind: 'repo', url: 'https://github.com/siyaratech-admin/KB-Contracts_Client_Billings' },
        ],
      },
      {
        id: 'indirect',
        title: 'Indirect costs revamped: overheads, safety, water & electricity',
        when: 'Mar – Jun 2026',
        happened: 'Handling of indirect costs was redone: overheads, safety, and water & electricity bills. The rule for spreading Head Office and Central Hub costs changed from active-work % (March) to work-order value (June).',
        impact: ['Rework', 'New scope'],
        response: 'Rebuilt overhead mapping and virtual allocation across sites.',
        evidence: [
          { date: 'Mar 27, 2026', label: 'Accounts demo: HO expenses spread by active work %', kind: 'mom' },
          { date: 'Jun 6, 2026', label: 'KB accounts: allocate HO & Central Hub virtually by work-order value', kind: 'email', url: mail('19e9ad386c0d4733') },
          { date: 'Jun 2026', label: 'Water & electricity bills added to indirect costs', kind: 'account' },
        ],
      },
    ],
  },
  {
    id: 'support',
    label: 'Data-entry support',
    period: 'Jun – Sep 2026',
    headline: 'Extra hours, weekends and hands-on help to remove blockers',
    challenges: [
      {
        id: 'extra-effort',
        title: 'Daily extra hours and weekends to keep data entry moving',
        when: 'Jun – Sep 2026',
        happened: 'Data entry surfaced many small, medium and major changes and bugs. The team worked extra hours daily and on weekends, removed blockers, and sometimes did the data entry itself. Face-scan attendance was delivered alongside.',
        impact: ['Extra effort'],
        response: 'Kept releasing: ~21 fixes in two weeks in June, then v1.6.6.5 and v1.6.6.6 in August.',
        evidence: [
          { date: 'Jul 2026', label: '306 of 1,509 commits after 7 PM (20%)', kind: 'repo' },
          { date: 'Aug 14, 2026', label: 'v1.6.6.5 deployed', kind: 'email', url: mail('1a000b92f936ed18') },
          { date: 'Aug 21, 2026', label: 'v1.6.6.6 deployed', kind: 'email', url: mail('1a024c66838c866b') },
          { date: 'Jun 14, 2026', label: 'Work-hour summary: 1,863 hrs by one developer', kind: 'doc', url: 'https://drive.google.com/open?id=1r4Curyc5_G8CbDBji0VEOdHM5RvYN-qPSOS73V_Q95Q' },
        ],
      },
    ],
  },
];

// Short-turnaround changes that sped up data entry
export const quickWins = [
  { title: 'BOQ parsing', effect: 'Import large BOQ sheets automatically' },
  { title: 'One RA for multiple BOQs', effect: 'Faster data entry, less manual work' },
  { title: 'Planning: total vs completed quantity', effect: 'Clear progress visualisation' },
  { title: 'Auto quantity/area in subcontractor BOQ', effect: 'Added on a late request' },
  { title: 'Misc material tracking', effect: 'Planned vs actual for miscellaneous items' },
  { title: 'Labour cost tracking', effect: 'Simplified from labour type × nature of work' },
  { title: 'Auto asset rent on transfer', effect: 'Replaced manual rent entry' },
  { title: 'Shorter safety approvals', effect: 'Fewer approval steps' },
  { title: 'Client billing: auto completed qty', effect: 'Pulled from BOQ & WBS' },
  { title: 'Budget in a few clicks', effect: 'Generated from RA' },
  { title: 'Sandwich leave policy', effect: 'Automatic leave rules in HR' },
  { title: 'Face-scan attendance', effect: 'Staff & labour, device sync' },
];

// ---- Many more changes (from "Pramod One New Development Since March.xlsx") ----
// marApr = completed in the Mar–Apr wave; juneDone = June tracker items implemented; future = parked as future scope.

export const CR_TRACKER_URL = 'https://docs.google.com/spreadsheets/u/1/d/1kHg8aX5Jw2Z_YNDrY4KFFeYoP1N0gFXQb5BqNNjH4aQ/edit?gid=0#gid=0';

export interface ModuleChanges {
  module: string;
  marApr: number;
  juneDone: number;
  future: number;
  examples: string[];
}

export const changeVolume: ModuleChanges[] = [
  { module: 'Quality', marApr: 14, juneDone: 15, future: 0, examples: ['Client digital approval portal & consultant access', 'Concrete quantity tracking, wastage tolerance, slump & free-flow tests', 'Back-report on client remarks before approval (major)', 'Material-wise checklist linked to GRN inspection', '10 form-level fixes found during data entry'] },
  { module: 'Safety', marApr: 14, juneDone: 0, future: 0, examples: ['Site observation workflow with tasks for the responsible engineer', 'System-wide accident alerts', 'Digital labour thumb impression; mandatory checklist photos', 'Calendar, meeting scheduler, MoM & good-practice records', 'June: shorter approvals, 2-level navigation, work permits'] },
  { module: 'Subcontractor', marApr: 11, juneDone: 10, future: 0, examples: ['Standardised WO workflow with payment stages', 'GST & non-GST subcontractors; exit form; proprietor details', 'Separate subcontractor accounts flow (major)', 'WO print format, name instead of code, proprietorship validation', 'Import data came in the wrong format (serial-no mapping)'] },
  { module: 'Store', marApr: 10, juneDone: 10, future: 0, examples: ['Misc items in PO/GIN with Contracts HOD approval (major)', 'Brand-free issuing by grade, colour & size', 'Client-supplied material (free supply & billing)', 'Overhead materials issued project-wide, not tower-wise (major)', 'Multiple workarounds to import old data'] },
  { module: 'Contracts & Budget', marApr: 9, juneDone: 7, future: 1, examples: ['Safety, quality & store costs + testing charges in RA', 'BOQ & RA mapped to the grand project (major)', 'Overhead mapping for VTP Volare (major)', 'RA Excel parser; misc field in RA', 'BOQ rate vs RA rate profit calculation (future scope)'] },
  { module: 'HR', marApr: 1, juneDone: 9, future: 0, examples: ['F&F format; separation dates not editable', 'Payslip deductions: loan, LWF, insurance, TDS; arrears', 'PT rule for women earning < ₹25,000', 'Paid leave by joining date; long-format appointment letter', 'Exit-interview print; employee-transfer form'] },
  { module: 'Planning', marApr: 7, juneDone: 1, future: 0, examples: ['Material requirement from RA by slab quantity', 'Activity-wise cost & schedule variance', 'Start-to-start paths in Gantt; client duration in internal baseline', 'Gantt width & UI changes'] },
  { module: 'Central Hub', marApr: 3, juneDone: 7, future: 0, examples: ['Assets without project link; RTO, insurance, serial no. view', 'E-way bill support', 'Asset rent auto-fill and standard rates', 'Asset movement & transfer fixes'] },
  { module: 'Labour', marApr: 6, juneDone: 0, future: 0, examples: ['Skilled / unskilled attendance split', 'Inter-site labour transfer', 'Multiple activities per labourer per day', 'Usage alerts to Safety / Quality / Store'] },
  { module: 'Task Manager', marApr: 6, juneDone: 0, future: 0, examples: ['Resource-utilisation tracking', 'Date- & time-bound tasks; task classification', 'Acknowledgement notifications; auto designation'] },
  { module: 'Site Admin', marApr: 0, juneDone: 5, future: 0, examples: ['New in June, all major: clearance & exit forms', 'Site assets: CCTV, guest house rent & maintenance, printers, computers', 'Daily & monthly labour compliance', 'Security bills & security contractors; compliance sheets'] },
  { module: 'Purchase', marApr: 2, juneDone: 3, future: 0, examples: ['Transport details in supplier quotation', 'Purchase dashboard (MR, PO, PI)', 'Water stock auto-reset to 0'] },
  { module: 'Accounts', marApr: 3, juneDone: 0, future: 0, examples: ['Loan accounting', 'Tally invoice integration', 'ERPNext accounting improvements'] },
  { module: 'Client Billing', marApr: 0, juneDone: 2, future: 0, examples: ['Client BOQ in the client\'s own column format, not activity-wise', 'GST auto-calculation'] },
  { module: 'System-wide', marApr: 1, juneDone: 1, future: 0, examples: ['Global project configuration & workspace switching', 'Password reset at login'] },
  { module: 'Dashboards & Biometric', marApr: 0, juneDone: 2, future: 0, examples: ['Higher-management dashboards (major)', 'Full biometric integration (major)'] },
];
