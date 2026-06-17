export interface TimelineItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  status: 'completed' | 'missing' | 'format-issue' | 'gap' | 'pending' | 'new-scope' | 'ongoing' | 'external';
  icon?: string;
  delayDays?: number;
  delayReason?: string;
  link?: string;
  linkLabel?: string;
}

export const timelineData: TimelineItem[] = [
  // August 2025
  {
    id: 'aug-20',
    date: 'Aug 20, 2025',
    category: 'Initial Setup',
    title: 'Document Request',
    description: 'Shubham requested prerequisite documents (contracts, work orders, daily reports) from Aishwarya Saha.',
    status: 'completed',
  },
  {
    id: 'aug-28',
    date: 'Aug 28, 2025',
    category: 'Initial Setup',
    title: 'Follow-up on Docs',
    description: 'Follow-up sent regarding urgently needed sample documents.',
    status: 'pending',
  },
  {
    id: 'aug-30',
    date: 'Aug 30, 2025',
    category: 'Initial Setup',
    title: 'Document Delivery',
    description: 'Received Quality Checklists, VTP Budget/Planning, Drawings, Daily Reports, Bills, and Work Orders.',
    status: 'completed',
  },

  // September 2025
  {
    id: 'sep-01',
    date: 'Sep 01, 2025',
    category: 'Process',
    title: 'File Structure Request',
    description: 'Shubham requested department-wise Google Drive folder structure with tracker sheet for document uploads.',
    status: 'completed',
  },
  {
    id: 'sep-01-ack',
    date: 'Sep 01, 2025',
    category: 'Initial Setup',
    title: 'Documents Acknowledged',
    description: 'Thanked Aishwarya Saha for sample reports confirming they would help build KB\'s Connect ERP.',
    status: 'completed',
  },
  {
    id: 'sep-04',
    date: 'Sep 04, 2025',
    category: 'Critical',
    title: '⚠️ First Bottleneck: Upload Delays',
    description: 'CRITICAL: Follow-up shows required documents NOT on shared drive, tracker sheet empty. Development blocked.',
    status: 'gap',
    delayDays: 3,
    delayReason: 'KB failed to upload documents to shared drive after Sep 1 request',
  },
  {
    id: 'sep-10',
    date: 'Sep 10, 2025',
    category: 'Process',
    title: '⚠️ Initial Development Misalignment',
    description: 'Misunderstanding: Team started creating forms based on uploaded reports instead of raw data requirements. Rework required to align with actual data needs.',
    status: 'gap',
    delayDays: 14,
    delayReason: 'Rework Required: Dev team spent ~2 weeks building form logic based on reports vs. requirements.',
  },

  // October 2025
  {
    id: 'oct-03-mom',
    date: 'Oct 03, 2025',
    category: 'Meeting',
    title: 'KB Connect Scope Discussion',
    description: 'Internal meeting: Confirmed all 12 modules in scope.',
    status: 'completed',
  },
  {
    id: 'oct-06',
    date: 'Oct 06, 2025',
    category: 'Critical',
    title: '⚠️ MoM Released - Missing Access Matrix',
    description: 'CRITICAL: KB team tasked to define user roles/permissions. NO Minutes shared back. Undefined permissions halt security module.',
    status: 'missing',
    delayDays: 999,
    delayReason: 'Outstanding since Oct 6 - Access Matrix/MoM NEVER delivered by KB (120+ days overdue)',
  },

  {
    id: 'oct-15',
    date: 'Oct 15, 2025',
    category: 'Workflow',
    title: 'Client & Billing Workflow',
    description: 'Defined end-to-end flow: BOQ -> Rate Analysis -> Quotation -> Budget.',
    status: 'completed',
  },
  {
    id: 'oct-16',
    date: 'Oct 16, 2025',
    category: 'Estimations',
    title: 'Budget Logic Discussion',
    description: 'Discussion on budget creation process.',
    status: 'completed',
  },
  {
    id: 'oct-18',
    date: 'Oct 18, 2025',
    category: 'Estimations',
    title: 'Flowchart Received',
    description: 'Received Budget Preparation Flowchart (10-Day Lag from logic agreement).',
    status: 'completed',
  },
  {
    id: 'oct-28',
    date: 'Oct 28, 2025',
    category: 'Planning',
    title: 'VTP Schedule Received',
    description: 'Received MSP files for VTP site (Towers 7, 8, 9).',
    status: 'completed',
  },
  {
    id: 'oct-31',
    date: 'Oct 31, 2025',
    category: 'HR/Roles',
    title: 'Roles Forwarded',
    description: 'Rohit forwarded email from Sheetal Dhale with roles/responsibilities for team members at different sites.',
    status: 'completed',
    delayDays: 25,
    delayReason: 'KB took 25 days (Oct 6 to Oct 31) to provide user roles after MoM assignment',
  },


  // November 2025
  {
    id: 'nov-14',
    date: 'Nov 14, 2025',
    category: 'Task Mgmt',
    title: 'Task Lists Received',
    description: 'Received Task Master docs for Billing, Accounts, and Store (Inconsistent formats).',
    status: 'format-issue',
  },
  {
    id: 'nov-17',
    date: 'Nov 17, 2025',
    category: 'HR/Roles',
    title: 'HR & Purchase Roles',
    description: 'Received roles for HR and Purchase departments.',
    status: 'completed',
  },
  {
    id: 'nov-25',
    date: 'Nov 25, 2025',
    category: 'Milestone',
    title: 'Demo Scheduling',
    description: 'Demos scheduled for Contracts, Planning, Task Manager, HR, etc. adjusted for site meetings.',
    status: 'completed',
  },
  {
    id: 'nov-28',
    date: 'Nov 28, 2025',
    category: 'Scope Change',
    title: '⚠️ Task Manager Logic Overhaul',
    description: 'Scope Shift: Checklists moved from task-level to Daily/Monthly/Yearly frequency. Acceptance Criteria added. Pramod\'s development timeline reset.',
    status: 'new-scope',
    delayDays: 21,
    delayReason: 'Major Rework: Complete restructuring of Task Manager logic invalidating previous development.',
  },

  // December 2025
  {
    id: 'dec-29',
    date: 'Dec 29, 2025',
    category: 'Documentation',
    title: 'Work Order Formats Shared',
    description: 'Prathamesh forwarded Work Order formats from Karan Builders marked as "documents we need to create".',
    status: 'gap',
    delayDays: 84,
    delayReason: 'KB delayed sharing final Work Order formats by 12+ weeks from initial documentation phase',
  },


  // January 2026
  {
    id: 'jan-13',
    date: 'Jan 13, 2026',
    category: 'Quality',
    title: 'Quality Module Documents',
    description: 'Aishwarya Saha forwarded ERP Quality Module Documents & Material Testing Criteria from Bharat Sabale.',
    status: 'completed',
  },
  {
    id: 'jan-14',
    date: 'Jan 14, 2026',
    category: 'Quality',
    title: 'Quality Docs Re-sent',
    description: 'Bharat Sabale re-sent Quality Module Documents asking for review and concerns by Shubham.',
    status: 'pending',
  },
  {
    id: 'jan-14-share',
    date: 'Jan 14, 2026',
    category: 'Internal',
    title: 'Internal Team Update',
    description: 'Shubham forwarded Quality Module Documents to internal team (Prathamesh, Sumasri, Vivek).',
    status: 'completed',
  },
  {
    id: 'jan-22',
    date: 'Jan 22, 2026',
    category: 'Estimations',
    title: 'Material Library Follow-up (Low Priority)',
    description: 'Prathamesh requested KB team review Material Library initial list. Marked as low priority task.',
    status: 'pending',
    delayDays: 10,
    delayReason: '10 day delay in providing standards/coefficients',
  },

  {
    id: 'jan-22-hr',
    date: 'Jan 22, 2026',
    category: 'Critical',
    title: '⚠️ Scope Creep: New HR Requirements',
    description: 'CRITICAL: Sheetal Dhale requests HR MIS reports (daily salary, conveyance, expense) - NOT in original scope.',
    status: 'new-scope',
  },
  {
    id: 'jan-23',
    date: 'Jan 23, 2026',
    category: 'Internal',
    title: 'HR Request Escalated',
    description: 'Shubham forwarded HR MIS Report request to Vivek Patel and Sumasri Bhogi for action.',
    status: 'pending',
  },
  {
    id: 'jan-30',
    date: 'Jan 30, 2026',
    category: 'Critical',
    title: '⚠️ Change Request Dispute',
    description: 'CRITICAL: Shubham flags HR reports as Change Request (not in original requirements). Sheetal contests, claims they were shared initially.',
    status: 'gap',
  },
  {
    id: 'jan-30-test',
    date: 'Jan 30, 2026',
    category: 'Testing',
    title: 'Testing Results Shared',
    description: 'Sumasri shared testing document for Quality, Safety, Labour, Subcontractor modules with bugs noted. HR partially tested.',
    status: 'completed',
  },
  {
    id: 'jan-31',
    date: 'Jan 31, 2026',
    category: 'Critical',
    title: '⚠️ MIS Format Dispute Escalates',
    description: 'CRITICAL: Sheetal clarifies MIS format WAS shared initially. Demands status and timeline. Major misalignment on scope definition.',
    status: 'gap',
  },

  // February 2026
  {
    id: 'feb-06-mom',
    date: 'Feb 06, 2026',
    category: 'Meeting',
    title: 'MoM — Project Execution & Accounting Workflow',
    description: 'Key decisions: Rate Analysis to auto-pull labour and material costs; overheads and profit margins to be editable per project. Financial chain confirmed: WO/BOQ Acceptance (via Rate Analysis) → Budget → Execution → Monitoring actual vs. budget. New material additions require mandatory questionnaire + approval before library entry. Labour billing monthly; weekly Kharchi for labour contractors; Contractor Payable = Total − Kharchi. Petty cash shared weekly (primarily diesel procurement) with daily site report. Daily Cost Reports to cover HR, Resources, Material, Labour, and Machine/Human Salary. Material Library freeze set for EOD 11-Feb-2026 — MD and Karan Sir to finalize and lock; library becomes mandatory source for all Rate Analysis. Tally integration flagged as additional feature. KB team to provide permissions and share outstanding documents.',
    status: 'completed',
  },
  {
    id: 'feb-11-material-library-freeze',
    date: 'Feb 11, 2026',
    category: 'Milestone',
    title: 'Material Library Freeze Deadline',
    description: 'EOD deadline for MD Sir and Karan Sir to finalize and lock the Material Library in PramodOne. Once locked, this library becomes the mandatory source for all Rate Analysis costs. Task already added in PramodOne for KB team.',
    status: 'pending',
  },

  // March 2026 — Orchid Event, Site + HO Visit & Change Requests
  {
    id: 'mar-orchid-event',
    date: 'Mar 2026',
    category: 'Scope Change',
    title: '⚠️ Proforma Invoice & Tax Invoice Suggested',
    description: 'During the Orchid event, it was suggested to add Proforma Invoice and Tax Invoice generation into PramodOne to support client billing workflows and GST compliance documentation.',
    status: 'new-scope',
  },
  {
    id: 'mar-26-mom-subcon-labour',
    date: 'Mar 26, 2026',
    category: 'Meeting',
    title: 'MoM — Subcontractor & Labour Module Demo',
    description: 'Participants: Rohit Sonawale, Pramod Suryawanshi, Aishwarya Saha, Shubham Gagare, Prathamesh Malode. Demoed full subcontractor lifecycle: onboarding, workhead creation, payment stages, invoice generation, and task structures derived from project baselines. Key requirements raised: biometric fingerprint machine integration for digital labour onboarding; Task labour resource section to pull previous day\'s attendance count; auto-increment labour count on induction completion; labour transfer workflow between sites; timesheet module for granular productivity tracking; formal Subcontractor Exit Form for clearance and closure.',
    status: 'completed',
  },
  {
    id: 'mar-26-mom-hr',
    date: 'Mar 26, 2026',
    category: 'Meeting',
    title: 'MoM — HR Module Demo',
    description: 'Participants: Rohit Sonawale, Pramod Suryawanshi, Aishwarya Saha, Shubham Gagare, Prathamesh Malode. Full HR lifecycle demoed: employee management, talent acquisition, leave & attendance, payroll, expense claims, and separations. Decisions: Leave Encashment to be removed (not per KB policy); Fleet Management sub-module removed from HR scope. Enhancements: salary structures to auto-load all components (no manual selection); salary slips to show remaining leave balance. Pending from HR team: updated employee master data (active/inactive) for migration and standardized MIS report formats with data point explanations.',
    status: 'completed',
  },

  {
    id: 'mar-end-site-ho-visit',
    date: 'Mar 28, 2026',
    category: 'Meeting',
    title: 'Site + HO Visit',
    description: 'On-site and Head Office visit at the end of March. Live walkthrough of PramodOne across all modules with KB team stakeholders. This visit directly triggered all module-level change requests logged on Mar 31 – Apr 1, 2026.',
    status: 'completed',
  },
  {
    id: 'mar-boq-wbs-automation',
    date: 'Mar 28, 2026',
    category: 'Workflow',
    title: '⚠️ BOQ to WBS Automation Workflow Suggested',
    description: 'Raised during the Site + HO Visit: Automate conversion of BOQ (Bill of Quantities) line items into a WBS (Work Breakdown Structure) to eliminate manual re-entry and keep planning, budgeting, and execution in sync.',
    status: 'new-scope',
  },

  {
    id: 'mar-end-site-visit-tracker',
    date: 'Mar 28, 2026',
    category: 'Documentation',
    title: 'Change Request Tracker Created',
    description: 'Following the Site + HO Visit, a consolidated change request tracking sheet was created to document all module-level feedback and action items raised during the visit.',
    status: 'completed',
    link: 'https://docs.google.com/spreadsheets/u/1/d/1kHg8aX5Jw2Z_YNDrY4KFFeYoP1N0gFXQb5BqNNjH4aQ/edit?gid=0#gid=0',
    linkLabel: 'View Change Request Tracker',
  },

  // March–April 2026 — Change Requests from Site + HO Visit
  {
    id: 'mar-31-planning',
    date: 'Mar 31, 2026',
    category: 'Planning',
    title: '⚠️ Planning Module — Change Requests',
    description: 'Raised from Site + HO Visit: Material requirements from rate analysis to auto-populate based on Slab 1 area quantity. Cost & Schedule variance to be activity-wise (shuttering, reinforcement, casting). Start-to-start relationships to show paths in Gantt chart. Internal baseline to show client duration. Labour details in amount. Error on close-loop. Dashboard/report inputs needed from KB team. Est. 24 man hours.',
    status: 'new-scope',
  },
  {
    id: 'mar-31-budget',
    date: 'Mar 31, 2026',
    category: 'Estimations',
    title: '⚠️ Budget Module — Change Requests',
    description: 'Raised from Site + HO Visit: Safety, quality, and store costs to be accounted in budget. Line items to populate from rate analysis; rate analysis to be referenced within budget. Overheads to have category/subcategory derived from rate analysis. Monthly budget utilisation tracking required. Dashboard/report inputs needed from KB team. Est. 20 man hours.',
    status: 'new-scope',
  },
  {
    id: 'mar-31-central-hub',
    date: 'Mar 31, 2026',
    category: 'Process',
    title: '⚠️ Central Hub — Change Requests',
    description: 'Raised from Site + HO Visit: Asset module no longer requires a Project link. Better asset visualisation including RTO passing, serial numbers, insurance details, and maintenance details. Transportation E-way bill support. Est. 4 man hours.',
    status: 'new-scope',
  },
  {
    id: 'mar-31-store',
    date: 'Mar 31, 2026',
    category: 'Process',
    title: '⚠️ Store Module — Change Requests',
    description: 'Raised from Site + HO Visit: Add transportation amount field on purchase order and invoice. New local purchase entry type (via petty cash). Safety & quality purchase types under consideration. Add invoice date, receipt date, and delivery challan date. Approval flow for item/material creation (Purchase dept). Site-to-site material transfer requires delivery note. Store to mark materials/assets as idle. Est. 4 man hours.',
    status: 'new-scope',
  },
  {
    id: 'mar-31-subcontractor',
    date: 'Mar 31, 2026',
    category: 'Workflow',
    title: '⚠️ Subcontractor Module — Change Requests',
    description: 'Raised from Site + HO Visit: Mandatory WO creation with payment stages at submission; invoices created/updated post WO. "Type of Work" (Shuttering, Reinforcement, Combined) across WO, invoices, payment stages. Invoice consolidation for multiple payment stages. Re-evaluate mandatory GST (non-GST subcontractors exist). Subcontractor Exit Form. Excel export for payment stages. Capture actual owner identity for proprietary firms. Rename "Total Bill Amount" → "Total WO Amount" and "Subcontractor Group" → "Nature of Work". Standardize current = cumulative − previous formula. Est. 20 man hours.',
    status: 'new-scope',
  },
  {
    id: 'mar-31-labour',
    date: 'Mar 31, 2026',
    category: 'Process',
    title: '⚠️ Labour Module — Change Requests',
    description: 'Raised from Site + HO Visit: Separate attendance for skilled and unskilled labour; DLR uses unskilled data only. Inter-site labour transfers with transit time excluded from payable hours (timesheets needed). Biometric (fingerprint) onboarding integration. "Available Labours" in Task Resource auto-populated from previous day\'s attendance. Unskilled labour to support multiple activities per day. Notify quality/store/safety departments of labour usage. Est. 18 man hours.',
    status: 'new-scope',
  },
  {
    id: 'mar-31-purchase',
    date: 'Mar 31, 2026',
    category: 'Process',
    title: '⚠️ Purchase Module — Change Requests',
    description: 'Raised from Site + HO Visit: Add transportation details in supplier quotation. Purchase dashboard to show material requests, POs, and PIs at a glance. Est. 4 man hours.',
    status: 'new-scope',
  },

  // April 2026 — Change Requests from Site + HO Visit (continued)
  {
    id: 'apr-01-accounts',
    date: 'Apr 01, 2026',
    category: 'Process',
    title: '⚠️ Accounts Module — Change Requests',
    description: 'Raised from Site + HO Visit: Loan and accounting integration with ERPNext. Tally integration to receive invoice details from PramodOne. Est. 16 man hours.',
    status: 'new-scope',
  },
  {
    id: 'apr-01-safety',
    date: 'Apr 01, 2026',
    category: 'Process',
    title: '⚠️ Safety Module — Change Requests',
    description: 'Raised from Site + HO Visit: Site Observations — create task against responsible engineer (daily/monthly/yearly). Accidents highlighted system-wide. Digital thumbprint for labours. Mandatory overall photo in safety checklist. Safety inspection on new asset creation. Observation report with violations, departmental issues, responsible employee, task, timeline, exact location. Work Permit removed from scope (requires client approval). Labour multi-location onboarding. Safety dashboard with maintenance schedules and TPI of machines. Tower/Area Incharge and location fields in incident forms. Est. 20 man hours.',
    status: 'new-scope',
  },
  {
    id: 'apr-01-quality',
    date: 'Apr 01, 2026',
    category: 'Quality',
    title: '⚠️ Quality Module — Change Requests',
    description: 'Raised from Site + HO Visit: "Structural Member" to be a dropdown list (KB team to provide values). RFI becomes master document linking pour cards and all quality checks. Auto-create rectification task on quality failure (NCR). Concrete tracking: planned/running/completed quantities, wastage tolerance alerts, slump/freeflow checks. Client portal for digital checklist review and approval (client access only). Client logo via global project config. Consultant read-only access via open links post-project. Notification acknowledgements ("Seen by XYZ"). Material Inspection ID: KB-MIR-0001. New documents: design mix, verticality report, concrete summary. Est. 40 man hours.',
    status: 'new-scope',
  },
  {
    id: 'apr-01-contracts',
    date: 'Apr 01, 2026',
    category: 'Workflow',
    title: '⚠️ Contracts Module — Change Requests',
    description: 'Raised from Site + HO Visit: Safety, quality, and store costs to be visible in rate analysis. Safety/quality testing charges per sq. metre and per manpower in rate analysis. Detailed activity-level resource planning within rate analysis — impacts Planning, Budget, Store, Labour, and Subcontractor modules. Est. 48 man hours.',
    status: 'new-scope',
  },
  {
    id: 'apr-01-task-manager',
    date: 'Apr 01, 2026',
    category: 'Task Mgmt',
    title: '⚠️ Task Manager — Change Requests',
    description: 'Raised from Site + HO Visit: Performance tracking against resource utilizations. Tasks to be date and time bound. Task types for shuttering, reinforcement (scheduled), and ad-hoc activities. Task acceptance/acknowledgement notifications. Auto-populated designations from user selection. Show/hide fields based on task type. Est. 24 man hours.',
    status: 'new-scope',
  },
  {
    id: 'apr-01-hr',
    date: 'Apr 01, 2026',
    category: 'HR/Roles',
    title: 'HR & Payroll — Change Requests',
    description: 'Raised from Site + HO Visit: Module overall in good standing. Update letterhead to include "Computer/PramodOne generated document" with timestamp. Est. 2 man hours.',
    status: 'completed',
  },
  {
    id: 'apr-01-system-wide',
    date: 'Apr 01, 2026',
    category: 'Process',
    title: '⚠️ System-Wide Changes — Change Requests',
    description: 'Raised from Site + HO Visit: Rate analysis to become the single source of truth for all resource quantities. Notification acknowledgements ("Seen by XYZ") system-wide. Auto-create rectification tasks on safety/quality failures. Global Project Configuration with project-specific defaults. Automated field pre-selection based on engineer-project assignment. Dynamic Project Workspace Switching. Secure project reassignment via OTP. Project-specific notification management. Total estimated effort: 256 dev + 52 testing + 26 deployment = 334 man hours. Est. 12 man hours for system-wide settings.',
    status: 'new-scope',
  },

  // April 2026 — MoM Follow-ups
  {
    id: 'apr-07-mom-labour-subcon',
    date: 'Apr 07, 2026',
    category: 'Meeting',
    title: 'MoM — Labour & Subcontractor Billing Discussion',
    description: 'Meeting covered the full Subcontractor P2P workflow: Quotation → Negotiation → Work Order (MD + VP approval required). Built-up work needs Payment Stage toggle; invoices triggered from cumulative stage. Sq.m (client BOQ) to Sq.ft (subcontractor BOQ) auto-conversion required. Formal Subcontractor Exit Form for F&F settlement. Labour categorized into Departmental and Skilled with bi-weekly/monthly payment cycles; weekly Kharchi advances to be tracked and deducted from main bill. Billing logic: Item Rate = Previous + This = Cumulative; Built-up = This = Cumulative − Previous. Hard Stop rule: actuals cannot exceed planned/budget without MD approval. Outstanding items flagged: GST/TDS/Labour Cess not yet addressed, Retention Money (5–10%) logic needed, Debit Note module for material deductions, WO Variation/Extra Item process required, role-based edit restrictions for Billing and Sr. Engineers.',
    status: 'completed',
  },
  {
    id: 'apr-08-mom-docs',
    date: 'Apr 08, 2026',
    category: 'Documentation',
    title: 'MoM Documents Received from Aishwarya',
    description: 'Aishwarya Saha shared: Housekeeping Bill (Arfat Yunus Sayyed), Challan copy, and Workhead List. Confirmed subcontractor module flow was already drawn and handed to Prathamesh in previous months. Pending from KB: Concrete Summary Sheet, Concrete Mix Design Sheet, VTP Volare Users/Employee List, Machinery List, Item Rate Bills, Item Rate Work Order, Payment Details Sheet.',
    status: 'completed',
  },

  // May 2026
  {
    id: 'may-sandwich-policy',
    date: 'May 2026',
    category: 'HR/Roles',
    title: 'Sandwich Policy Added',
    description: 'Sandwich leave policy configured and added into PramodOne HR & Payroll module — intervening working days between two leave days are automatically counted as leave.',
    status: 'completed',
  },
  {
    id: 'may-data-format-issues',
    date: 'May 2026',
    category: 'Critical',
    title: '⚠️ Data Received in Incorrect Formats — Import Delayed',
    description: 'Data provided by KB team for migration was initially not in the required format, causing delays in the import process. Even after corrections were requested, residual inconsistencies remained. Siyaratech team took additional efforts to clean, map, and reconcile the data to meet system requirements rather than blocking progress.',
    status: 'gap',
    delayReason: 'KB-provided data not aligned to import format; multiple correction cycles required before data could be loaded.',
  },
  {
    id: 'may-boq-ra-wbs-upload',
    date: 'May 2026',
    category: 'Process',
    title: 'Siyaratech Uploads BOQ, Rate Analysis & WBS',
    description: 'Siyaratech team took on the additional effort of uploading BOQ, Rate Analysis, and WBS structures on behalf of KB team using the data received — noting that WBS was uploaded without BOQ quantities linked due to data gaps. Multiple KB staff members also requested Siyaratech to handle their data uploads directly rather than doing it themselves.',
    status: 'completed',
  },
  {
    id: 'may-data-workarounds',
    date: 'May 2026',
    category: 'Process',
    title: 'Quick Fixes & Workarounds for KB Data Dumps',
    description: 'To prevent any go-live blockers, Siyaratech rapidly fixed system issues and provided workarounds so KB team could continue dumping data even when it did not conform to the standard flow or import mechanism. Changes were turned around quickly to ensure KB team momentum was not lost.',
    status: 'completed',
  },
  {
    id: 'may-data-implementation-kudos',
    date: 'May 2026',
    category: 'Milestone',
    title: 'Data Implementation — Key Contributions',
    description: 'Notable individual contributions during the data implementation phase: Rupesh Patil successfully uploaded Purchase Orders (PO) and Purchase Requests (PR) data into the system. Jadhav Sir handled the attendance data upload. Strong execution by the team under tight turnaround conditions.',
    status: 'completed',
  },
];

export const bottlenecks = [
  {
    id: 'b1',
    title: 'Document Upload Delays (Aug-Sep 2025)',
    description: 'Sep 4: Required documents NOT on shared drive, tracker sheet empty. 4-week delay from initial request halted configuration.',
    icon: 'FileX',
    impact: 'critical',
  },
  {
    id: 'b2',
    title: 'Missing Access Matrix & User Roles (Oct 2025)',
    description: 'Oct 6: KB team tasked to define roles/permissions but NEVER shared Minutes back. No confirmation of completeness or accuracy.',
    icon: 'Lock',
    impact: 'critical',
  },
  {
    id: 'b3',
    title: 'Scope Creep & Misaligned Requirements (Jan 2026)',
    description: 'Jan 22-31: HR MIS reports requested as new feature, but Sheetal claims they were "shared initially". No written proof of original scope.',
    icon: 'Layers',
    impact: 'critical',
  },
  {
    id: 'b4',
    title: 'Lack of Formal Change Control',
    description: 'No formal change request process. Late additions disputed as "already requested". Scope definition relies on scattered emails.',
    icon: 'AlertTriangle',
    impact: 'high',
  },
  {
    id: 'b5',
    title: 'Incomplete Documentation',
    description: 'Material Library missing standards/coefficients. Work Order formats incomplete. Subcontractor Billing workflow details unclear.',
    icon: 'FileQuestion',
    impact: 'high',
  },
  {
    id: 'b6',
    title: 'Ad-Hoc Workflow Discovery',
    description: 'New workflows (e.g., Subcontractor Billing) were often shared ad-hoc during discussions rather than documented upfront by HODs, leading to unexpected scope expansion.',
    icon: 'Lightbulb',
    impact: 'high',
  },
];

export const futureProtocol = [
  {
    title: 'Training-First Approach',
    description: 'KB team must refer to training videos before raising issues to distinguish "how-to" from bugs.',
  },
  {
    title: 'Formal Support Module',
    description: 'All issues must be logged in the Support Module with proper triage definitions.',
  },
  {
    title: 'Strict Change Requests',
    description: 'Any requirement not found in previous Siyaratech MoMs or documented requests will be treated as a new Change Request.',
  },
];
