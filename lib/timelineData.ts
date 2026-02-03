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
