# HR Document Management Demo

## Project Overview

Build a small **Human Resources Document Management System (DMS) demo** using a **Power Apps Code App** with **SharePoint as the backend**.

This application is intended only for a **customer discovery call / proof of concept**. Keep the implementation simple, polished, and low effort.

The purpose of the demo is to show that:

- SharePoint can remain the document storage/backend.
- Power Apps Code Apps can provide a modern custom UI/UX.
- Employees can have their own HR documents.
- Users can upload, view, replace, and delete documents.
- Business rules can prevent duplicate documents.

Do not overengineer this application.

---

# Technology Stack

Use this pre installed starter template wherever needed

- Power Apps Code Apps
- React
- TypeScript
- SharePoint Online
- Power Platform connectors
- Power Automate only where necessary for SharePoint document/file operations
- Tailwind CSS
- shadcn/ui
- React Router
- Zustand
- Tanstack Query
- Tanstack Table
- Lucide - icons

Prefer Microsoft-supported Power Platform functionality over custom APIs whenever practical.

Do not introduce Dataverse or another database.

---

# Architecture

Use the following simple architecture:

```text
Power Apps Code App
        |
        +-- SharePoint Employees List
        |
        +-- Power Automate
                |
                +-- SharePoint Document Library
```

The Code App provides the complete user interface.

SharePoint stores:

1. Employee information
2. Employee documents

Power Automate may be used for document operations that cannot be performed cleanly through the Code Apps SharePoint data source.

---

# SharePoint Structure

## Employees List

Create/use a SharePoint list named:

`Employees`

Columns:

| Column       | Type                | Required |
| ------------ | ------------------- | -------- |
| Title        | Single line of text | Yes      |
| EmployeeCode | Single line of text | Yes      |
| Department   | Single line of text | No       |
| JobTitle     | Single line of text | No       |

`Title` represents the employee's full name.

Example data:

| EmployeeCode | Title          | Department      | JobTitle      |
| ------------ | -------------- | --------------- | ------------- |
| EMP001       | Juan Dela Cruz | Human Resources | HR Specialist |
| EMP002       | Maria Santos   | Finance         | Accountant    |
| EMP003       | Carlo Reyes    | IT              | Developer     |
| EMP004       | Ana Garcia     | Operations      | Coordinator   |
| EMP005       | Mark Mendoza   | Recruitment     | Recruiter     |

Only five dummy employees are required.

---

## Employee Documents Library

Create/use a SharePoint Document Library named:

`Employee Documents`

Add these metadata columns:

| Column       | Type                | Required |
| ------------ | ------------------- | -------- |
| EmployeeCode | Single line of text | Yes      |
| EmployeeName | Single line of text | No       |
| DocumentType | Choice              | Yes      |

`DocumentType` must contain only:

- Birth Certificate
- Certificate of Employment

The actual uploaded file remains the SharePoint document.

Do not store files inside the Employees list.

Do not create a separate document library for every employee.

Do not create complicated SharePoint folder structures for this demo.

Note:
I've already created this in sharepoint. Here's the details
Sharepoint Site: WebsiteSEODevelopment
Sharepoint List: Employees
Sharepoint Document Library: Employee Documents

---

# Document Relationship

Documents are associated with employees using:

`EmployeeCode`

For example:

```text
EmployeeCode: EMP001
EmployeeName: Juan Dela Cruz
DocumentType: Birth Certificate
```

This means the document belongs to employee `EMP001`.

The combination of:

```text
EmployeeCode + DocumentType
```

should logically identify a single employee document.

For this demo, each employee may have a maximum of:

- 1 Birth Certificate
- 1 Certificate of Employment

Therefore, each employee can have a maximum of two documents.

---

# Business Rules

## Document Upload

A user can upload a document when that document type does not currently exist for the employee.

Example:

If EMP001 has no Birth Certificate:

```text
Birth Certificate
No document uploaded

[ Upload Document ]
```

If EMP001 already has a Birth Certificate:

```text
Birth Certificate

birth-certificate.pdf

[ View ] [ Replace ] [ Delete ]
```

The normal Upload button must no longer be displayed once the document exists.

---

## Duplicate Prevention

Do not allow the user to upload multiple documents for the same:

```text
EmployeeCode + DocumentType
```

Example:

```text
EMP001 + Birth Certificate
```

can only have one active document.

The UI should prevent another normal upload when one already exists.

Do not build complicated server-side duplicate management for this proof of concept unless required for reliable functionality.

---

## View Document

When the user clicks **View**, open the SharePoint document using its SharePoint URL.

Opening the document in a new browser tab is acceptable.

Do not build a custom PDF/document viewer for this demo.

---

## Replace Document

When the user selects **Replace**:

1. Allow them to choose a new file.
2. Replace the existing employee document.
3. Preserve the correct:
   - EmployeeCode
   - EmployeeName
   - DocumentType
4. Refresh the UI after successful replacement.

A simple implementation is preferred.

---

## Delete Document

When the user selects **Delete**:

1. Ask for confirmation.
2. Delete the corresponding SharePoint document.
3. Refresh the employee document state.
4. Return the document card to the empty state.

Example:

```text
Birth Certificate

No document uploaded

[ Upload Document ]
```

---

# Application Pages

Only two primary pages are required.

## 1. Employees Page

This is the application's home page.

Display the five dummy employees in a clean, responsive **Employee Table**.

The table should include:

- Employee Code
- Employee Name
- Job Title
- Department
- Action

Example:

```text
Employees

┌──────────────┬─────────────────┬────────────────┬─────────────────┬─────────┐
│ Employee ID  │ Employee Name   │ Job Title      │ Department      │ Action  │
├──────────────┼─────────────────┼────────────────┼─────────────────┼─────────┤
│ EMP001       │ Juan Dela Cruz  │ HR Specialist  │ Human Resources │ View    │
│ EMP002       │ Maria Santos    │ Accountant     │ Finance         │ View    │
│ EMP003       │ Carlo Reyes     │ Developer      │ IT              │ View    │
│ EMP004       │ Ana Garcia      │ Coordinator    │ Operations      │ View    │
│ EMP005       │ Mark Mendoza    │ Recruiter      │ Recruitment     │ View    │
└──────────────┴─────────────────┴────────────────┴─────────────────┴─────────┘
```

The user should be able to select an employee using the row or the **View** action.

Selecting an employee navigates to their details page.

Suggested route:

```text
/employees/:employeeCode
```

Example:

```text
/employees/EMP001
```

---

# 2. Employee Details Page

Display basic employee information at the top.

Example:

```text
← Employees

Juan Dela Cruz
HR Specialist
Human Resources
EMP001
```

Below the employee information, display a **Documents** section containing exactly two document cards.

### Birth Certificate

```text
┌─────────────────────────────────────┐
│ Birth Certificate                   │
│                                     │
│ No document uploaded                │
│                                     │
│ [ Upload Document ]                 │
└─────────────────────────────────────┘
```

### Certificate of Employment

```text
┌─────────────────────────────────────┐
│ Certificate of Employment           │
│                                     │
│ 📄 certificate-of-employment.pdf    │
│                                     │
│ [ View ] [ Replace ] [ Delete ]     │
└─────────────────────────────────────┘
```

The state of each card depends on whether the corresponding SharePoint document exists.

---

# UI/UX Requirements

The UI is important because the purpose of using a Code App instead of a Canvas App is to demonstrate greater control over the frontend experience.

Use a modern enterprise application style.

The design should be:

- Clean
- Professional
- Minimal
- Responsive
- Accessible
- Appropriate for an HR/business application

Use tables, cards, whitespace, clear typography, subtle borders, and consistent spacing.

Avoid unnecessary animations and visual effects.

Do not make the application look like a marketing website.

It should look like a lightweight modern Microsoft/enterprise application.

---

# Loading States

Provide simple loading states when:

- Loading employees
- Loading employee documents
- Uploading
- Replacing
- Deleting

Prevent duplicate actions while an operation is processing.

Example:

```text
Uploading...
```

instead of allowing the Upload button to be clicked repeatedly.

---

# Empty States

Empty document cards should clearly communicate that no document exists.

Example:

```text
No document uploaded

[ Upload Document ]
```

Do not display technical SharePoint information to the user.

---

# Error Handling

Keep error handling simple.

For failed operations, show a user-friendly message such as:

```text
Unable to upload the document. Please try again.
```

Do not expose raw SharePoint, connector, HTTP, or Power Automate errors directly in the UI.

Technical errors may still be logged to the browser console during development.

---

# Confirmation Dialogs

Require confirmation before deleting documents.

Example:

```text
Delete Birth Certificate?

Are you sure you want to delete this document?

[ Cancel ] [ Delete ]
```

Replacement does not require a separate confirmation dialog unless it improves the implementation.

---

# Power Automate

Use Power Automate only where needed for document/file operations.

A single flow is preferred if practical.

Suggested flow:

`EmployeeDocumentAction`

Possible inputs:

```text
Action
EmployeeCode
EmployeeName
DocumentType
FileName
FileContent
ExistingFileIdentifier
```

Possible actions:

```text
UPLOAD
REPLACE
DELETE
```

The flow should perform the corresponding SharePoint Document Library operation and return a simple success/error response to the Code App.

If separate flows make the implementation significantly simpler, they are acceptable.

Do not create complicated workflow orchestration.

---

# Code Organization

Keep the React/TypeScript structure understandable.

A suggested structure is:

```text
src/
├── components/
│   ├── EmployeeTable.tsx
│   ├── DocumentCard.tsx
│   ├── ConfirmDialog.tsx
│   └── LoadingState.tsx
│
├── pages/
│   ├── EmployeesPage.tsx
│   └── EmployeeDetailsPage.tsx
│
├── services/
│   ├── employeeService.ts
│   └── documentService.ts
│
├── types/
│   ├── employee.ts
│   └── document.ts
│
├── App.tsx
└── main.tsx
```

Adjust this structure if the generated Code Apps project requires a different convention.

Do not introduce unnecessary architectural layers.

---

# TypeScript Models

Use simple application models.

Example employee:

```typescript
interface Employee {
  id: number;
  employeeCode: string;
  name: string;
  department?: string;
  jobTitle?: string;
}
```

Example employee document:

```typescript
type DocumentType = "Birth Certificate" | "Certificate of Employment";

interface EmployeeDocument {
  id: number;
  employeeCode: string;
  employeeName?: string;
  documentType: DocumentType;
  fileName: string;
  documentUrl: string;
}
```

Adapt these interfaces to the actual generated SharePoint/Power Platform types where appropriate.

---

# General Development Rules

- use vercel-react-best-practices skill for any related react code

# Development Principles

When implementing this project:

1. Prefer the simplest working solution.
2. Do not overengineer.
3. Keep SharePoint as the source of truth.
4. Keep business logic understandable.
5. Use TypeScript properly.
6. Reuse components where useful.
7. Keep UI components small and readable.
8. Avoid unnecessary dependencies.
9. Prefer existing Code Apps / Power Platform capabilities over custom infrastructure.
10. Do not add functionality outside the requested scope without asking first.

---

# Out of Scope

Do NOT implement the following unless explicitly requested:

- Dataverse
- SQL
- Azure Functions
- Custom backend API
- Power Pages
- Authentication customization
- Employee onboarding workflows
- Approval workflows
- Document expiration
- Document reminders
- Advanced search
- Document OCR
- AI document extraction
- Version history UI
- Audit dashboard
- Employee permissions model
- Role-based security UI
- Multiple HR document categories
- Bulk upload
- Reporting dashboards
- Notifications
- Email integration

These may be discussed with the customer during discovery but should not be part of this demo.

---

# Demo Goal

The final demo should communicate this workflow clearly:

```text
Employee Table
      ↓
Select Employee
      ↓
Employee Details
      ↓
View Required Documents
      ↓
Upload Document
      ↓
Document Stored in SharePoint
      ↓
View / Replace / Delete
```

The key message of the proof of concept is:

**SharePoint remains the document management/storage platform while Power Apps Code Apps provides a modern, controlled, and customizable user experience.**

Prioritize getting this end-to-end workflow working reliably over adding additional features.
