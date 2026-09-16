# HR DMS Demo --- Implementation Phases

## Project Goal

Build a small discovery-call demo of an **HR Document Management System
(DMS)** using a **Power Apps Code App** as the UI and **SharePoint
Online** as the backend.

The demo should prove this simple workflow:

**Employee Table → Select Employee → View Required Documents → Upload →
View / Replace / Delete**

Keep the project intentionally small. Prioritize a reliable end-to-end
demo over production-level features.

------------------------------------------------------------------------

## Phase 0 --- Project Foundation

### Goal

Prepare the repository and establish the project rules before
implementation.

### Tasks

-   [x] Initialize the project.
-   [x] Initialize Git.
-   [x] Add `.gitignore`.
-   [x] Add `CLAUDE.md`.
-   [x] Verify the Code App runs locally.
-   [x] Commit the initial project state.

### Deliverable

A clean repository with a working Code App starter project.

### Completion Check

The app starts successfully and the repository contains no credentials,
tokens, environment secrets, or unnecessary generated files.

------------------------------------------------------------------------

## Phase 1 --- SharePoint Backend Setup

### Goal

Create the minimum SharePoint structure required by the demo.

### 1.1 Employees List

Create a SharePoint list named:

`Employees`

Columns:

  Column                    Type                  Required
  ------------------------- --------------------- ----------
  Employee Name (`Title`)   Single line of text   Yes
  EmployeeCode              Single line of text   Yes
  Department                Single line of text   No
  JobTitle                  Single line of text   No

Enable **Enforce unique values** for `EmployeeCode`.

Add five dummy employees:

  EmployeeCode   Employee Name    Department        Job Title
  -------------- ---------------- ----------------- ---------------
  EMP001         Juan Dela Cruz   Human Resources   HR Specialist
  EMP002         Maria Santos     Finance           Accountant
  EMP003         Carlo Reyes      IT                Developer
  EMP004         Ana Garcia       Operations        Coordinator
  EMP005         Mark Mendoza     Recruitment       Recruiter

### 1.2 Employee Documents Library

Create a document library named:

`Employee Documents`

Add these columns:

  Column         Type                  Required
  -------------- --------------------- ----------
  EmployeeCode   Single line of text   Yes
  EmployeeName   Single line of text   No
  DocumentType   Choice                Yes

`DocumentType` choices:

-   Birth Certificate
-   Certificate of Employment

Do not create employee folders or separate document libraries.

### Deliverable

SharePoint contains the `Employees` list and `Employee Documents`
library.

### Completion Check

All five employees are visible in SharePoint and the document library
accepts the required metadata.

------------------------------------------------------------------------

## Phase 2 --- Connect the Code App to SharePoint

### Goal

Establish working data access between the Code App and SharePoint.

### Tasks

-   [x] Configure the SharePoint connection for the Code App.
-   [x] Add the `Employees` list as a data source.
-   [x] Add/access the `Employee Documents` library as required by the
    chosen implementation.
-   [x] Inspect generated TypeScript models/services.
-   [x] Create a small application service layer rather than spreading
    SharePoint calls throughout UI components.
-   [x] Verify that the app can retrieve the five employees.
-   [x] Verify that employee document metadata can be retrieved.

### Suggested Application Services

``` text
src/services/
├── employeeService.ts
└── documentService.ts
```

### Deliverable

The Code App can read real employee data from SharePoint.

### Completion Check

The browser shows the five SharePoint employees without hard-coded
employee records in the UI.

------------------------------------------------------------------------

## Phase 3 --- Employee Table

### Goal

Build the home page for selecting an employee.

### Tasks

-   [x] Create `EmployeesPage`.
-   [x] Create reusable `EmployeeTable`.
-   [x] Load employees from SharePoint.
-   [x] Add loading state.
-   [x] Add basic error state.
-   [x] Display:
    -   Employee Code
    -   Employee Name
    -   Job Title
    -   Department
    -   Action
-   [x] Add a `View` action or clickable table row.
-   [x] Navigate to the selected employee.

Suggested route:

``` text
/employees/:employeeCode
```

Example:

``` text
/employees/EMP001
```

### Deliverable

A clean employee table similar to:

``` text
Employees

┌─────────────┬─────────────────┬────────────────┬─────────────────┬────────┐
│ Employee ID │ Employee Name   │ Job Title      │ Department      │ Action │
├─────────────┼─────────────────┼────────────────┼─────────────────┼────────┤
│ EMP001      │ Juan Dela Cruz  │ HR Specialist  │ Human Resources │ View   │
│ EMP002      │ Maria Santos    │ Accountant     │ Finance         │ View   │
└─────────────┴─────────────────┴────────────────┴─────────────────┴────────┘
```

### Completion Check

Selecting any employee opens that employee's details page.

------------------------------------------------------------------------

## Phase 4 --- Employee Details & Document States

### Goal

Build the main DMS experience before implementing document mutations.

### Tasks

-   [x] Create `EmployeeDetailsPage`.
-   [x] Retrieve the selected employee using `EmployeeCode`.
-   [x] Display employee information.
-   [x] Retrieve that employee's documents.
-   [x] Create reusable `DocumentCard`.
-   [x] Render exactly two document sections:
    -   Birth Certificate
    -   Certificate of Employment
-   [x] Determine whether each document exists.
-   [x] Implement empty and uploaded states.

### Empty State

``` text
Birth Certificate

No document uploaded

[ Upload Document ]
```

### Existing Document State

``` text
Birth Certificate

📄 birth-certificate.pdf

[ View ] [ Replace ] [ Delete ]
```

### Business Rule

A document is logically unique by:

``` text
EmployeeCode + DocumentType
```

The normal Upload action must not be available when that document
already exists.

### Deliverable

Every employee has two document cards whose UI reflects SharePoint data.

### Completion Check

Switching between employees displays the correct document state for each
employee.

------------------------------------------------------------------------

## Phase 5 --- Document Upload

### Goal

Allow users to upload missing documents.

### Tasks

-   [x] Determine the simplest supported document-upload implementation.
-   [x] Add Power Automate flow integration if needed for file
    operations.
-   [x] Create the upload file picker.
-   [x] Send:
    -   EmployeeCode
    -   EmployeeName
    -   DocumentType
    -   FileName
    -   File content
-   [x] Create the file in `Employee Documents`.
-   [x] Set SharePoint metadata.
-   [x] Show an uploading state.
-   [x] Disable repeated actions while uploading.
-   [x] Handle failures with a user-friendly message.
-   [x] Refresh document state after success.

### Completion Check

Upload a Birth Certificate for `EMP001`, refresh/reopen the employee,
and verify the document remains associated with `EMP001`.

------------------------------------------------------------------------

## Phase 6 --- View, Replace & Delete

### Goal

Complete the required document-management actions.

### 6.1 View

-   [x] Obtain the SharePoint document URL.
-   [x] Add `View`.
-   [x] Open the SharePoint document in a new browser tab.

Do not build a custom document viewer.

### 6.2 Replace

-   [x] Add `Replace`.
-   [x] Allow selection of a new file.
-   [x] Replace the existing document.
-   [x] Preserve employee/document metadata.
-   [x] Refresh the card after completion.

### 6.3 Delete

-   [x] Add `Delete`.
-   [x] Add a confirmation dialog.
-   [x] Delete the correct SharePoint document.
-   [x] Refresh document state.
-   [x] Return the card to the empty state.

### Completion Check

For one employee, demonstrate the complete lifecycle:

``` text
No Document
     ↓
Upload
     ↓
View
     ↓
Replace
     ↓
View Replacement
     ↓
Delete
     ↓
No Document
```

------------------------------------------------------------------------

## Phase 7 --- UI/UX Polish

### Goal

Make the demo visually convincing without spending time on unnecessary
features.

### Tasks

-   [x] Apply consistent spacing and typography.
-   [x] Make the Employee Table responsive.
-   [x] Polish document cards.
-   [x] Add appropriate document/file icons.
-   [x] Add loading indicators.
-   [x] Add empty states.
-   [x] Add success/error feedback.
-   [x] Add disabled states during operations.
-   [x] Verify keyboard/accessibility basics.
-   [x] Ensure the UI looks like a modern enterprise application.

### Avoid

-   Excessive animation
-   Complex dashboards
-   Marketing-style landing pages
-   Unnecessary navigation
-   Premature design-system work

### Deliverable

A clean, professional demo suitable for screen sharing during the
discovery call.

------------------------------------------------------------------------

## Phase 8 --- Demo Testing

### Goal

Make the demo reliable before adding anything else.

### Test Matrix

Test at minimum:

  Scenario                     Expected Result
  ---------------------------- -----------------------------------------
  Open app                     Employee Table loads
  Select EMP001                Correct employee opens
  Select EMP002                Correct employee opens
  No Birth Certificate         Upload action appears
  Upload Birth Certificate     Document appears
  Existing Birth Certificate   Normal Upload is hidden
  View                         SharePoint document opens
  Replace                      New document replaces old document
  Delete                       Document is removed
  After delete                 Upload action returns
  Different employee           Documents do not leak between employees
  Refresh browser              SharePoint state persists

### Also Verify

-   [ ] No console-breaking errors.
-   [ ] No exposed secrets.
-   [ ] No duplicate uploads through normal UI.
-   [ ] Loading states work.
-   [ ] Error messages are understandable.
-   [ ] SharePoint metadata is correct after upload/replace.

### Deliverable

A stable demo build.

------------------------------------------------------------------------

## Phase 9 --- Discovery Call Preparation

### Goal

Prepare a short, controlled demonstration instead of improvising.

### Recommended Demo Flow

1.  Open the Employee Table.
2.  Explain that employee records come from SharePoint.
3.  Select `Juan Dela Cruz`.
4.  Show the two required HR document types.
5.  Upload a missing Birth Certificate.
6.  Show that it is stored in SharePoint.
7.  Return to the Code App.
8.  View the document.
9.  Replace it.
10. Delete it.
11. Briefly show another employee to demonstrate employee-specific
    documents.

### Core Message

> SharePoint remains the document management and storage platform, while
> Power Apps Code Apps provides a modern and customizable user
> experience on top of it.

### Discovery Topics --- Mention, Don't Build Yet

If the customer asks about future capabilities, capture requirements
around:

-   Permissions and security
-   More document types
-   Document expiration
-   Version history
-   Approval workflows
-   Notifications
-   Search
-   Audit requirements
-   Employee onboarding/offboarding
-   Retention policies
-   Metadata requirements
-   HR system integration

These are discovery topics, not requirements for this demo.

------------------------------------------------------------------------

# Recommended Implementation Order

Work in this order:

``` text
Phase 0  Project Foundation
   ↓
Phase 1  SharePoint Backend
   ↓
Phase 2  SharePoint Connection
   ↓
Phase 3  Employee Table
   ↓
Phase 4  Employee Details + Document States
   ↓
Phase 5  Upload
   ↓
Phase 6  View / Replace / Delete
   ↓
Phase 7  UI/UX Polish
   ↓
Phase 8  Demo Testing
   ↓
Phase 9  Discovery Call Preparation
```

## Priority Rule

If time becomes limited, prioritize:

**Working end-to-end functionality \> UI polish \> optional
improvements**

Do not expand scope until the core workflow is reliable.

------------------------------------------------------------------------

# Definition of Done

The demo is complete when:

-   [ ] Five employees are stored in and loaded from SharePoint.
-   [ ] Employees appear in an Employee Table.
-   [ ] A user can select an employee.
-   [ ] Each employee displays Birth Certificate and Certificate of
    Employment sections.
-   [ ] A missing document can be uploaded.
-   [ ] Uploaded documents are stored in the SharePoint Document
    Library.
-   [ ] Documents are associated with the correct employee.
-   [ ] Only one document per employee/document type is allowed through
    the UI.
-   [ ] Existing documents can be viewed.
-   [ ] Existing documents can be replaced.
-   [ ] Existing documents can be deleted.
-   [ ] The UI refreshes correctly after document operations.
-   [ ] The app is polished enough for the discovery call.
-   [ ] The complete demo workflow has been tested before presentation.
