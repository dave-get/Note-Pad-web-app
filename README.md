![api-auth-login](https://github.com/user-attachments/assets/f531bfe8-5f97-47af-a114-61aeadcf2f82)# notePad ✏️

A minimalist, session-aware web application for taking and organizing personal notes. Built with Next.js and TypeScript for a type-safe, component-driven experience.

![landingPage](https://github.com/user-attachments/assets/261e2cf9-1f43-4ce7-8973-d3fdb9bc3efe)


## ✨ Features

### Core Functionality
- **Create Notes** – Compose new notes with a dedicated component
- ![newNote](https://github.com/user-attachments/assets/f5615687-928e-4693-a910-704eccf3aec5)

- **Edit Notes** – Modify existing content seamlessly
- ![display](https://github.com/user-attachments/assets/1e475e5c-57b3-4e9a-85f7-6e70e6b33b08)

- **Delete Notes** – Remove unwanted notes with one click
- **Session Persistence** – Notes are maintained per user session
- ![homePage](https://github.com/user-attachments/assets/f20c5ae1-ab9d-44bf-94b2-3b774ec0f3a6)


### Architectural Highlights
- 🏗️ Component-based UI architecture
- 🎨 Dynamic background rendering
- 🔄 Reusable form and display components
- 🛡️ Session-protected routes via custom wrapper

## 🏗️ Project Structure

src/
├── app/ # Next.js App Router pages
├── components/ # Modular UI components
│ ├── display-components/ # Note cards, lists
│ ├── form/ # Input/editing interfaces
│ ├── home-component/ # Dashboard layout
│ └── ... # [See full structure below]
├── lib/ # Business logic
│ ├── actions/ # CRUD operations
│ └── utils.ts # Shared utilities
├── sessionwrap/ # Session management
├── types/ # Type definitions
└── ui/ # Visual components

## 🚀 Getting Started
![api-auth-login](https://github.com/user-attachments/assets/455b97fa-89bf-421e-b2c9-4e045da41903)
![api-auth-signup](https://github.com/user-attachments/assets/0de892a0-b60d-451a-9d25-75b267ae80ed)

### Prerequisites
- Node.js v16+
- npm/yarn/pnpm

### Installation
```bash
git clone https://github.com/your-username/notePad.git
cd notePad
npm install
npm run dev

## 🛠️ Tech Stack
Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS

State Management: React Context


## 🔮 Roadmap
Planned Features
Full-text search functionality

Cloud synchronization

Authentication (NextAuth/Clerk)

Markdown support

Mobile optimization

