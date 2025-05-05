# notePad ✏️

A minimalist, session-aware web application for taking and organizing personal notes. Built with Next.js and TypeScript for a type-safe, component-driven experience.

![Demo Screenshot]() 

## ✨ Features

### Core Functionality
- **Create Notes** – Compose new notes with a dedicated component
- **Edit Notes** – Modify existing content seamlessly
- **Delete Notes** – Remove unwanted notes with one click
- **Session Persistence** – Notes are maintained per user session

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

