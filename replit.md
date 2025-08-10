# Overview

This is a Matrix-themed interactive web application that presents users with the iconic red pill/blue pill choice from The Matrix movie. The application features a cinematic experience with Matrix rain effects, atmospheric audio, and themed visual elements. Users can navigate through different outcomes based on their pill choice, with the blue pill leading to a "deception detected" message that guides them back to choose the red pill, while the red pill reveals "the truth" with expandable content areas for future development.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing with three main routes: choice page (/), blue pill outcome (/blue-pill), and red pill outcome (/red-pill)
- **Styling**: Tailwind CSS with custom Matrix-themed color variables and animations
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives for accessibility
- **State Management**: React Query (@tanstack/react-query) for server state management, though currently used minimally
- **Animations**: Custom CSS animations for Matrix rain effect, pill floating, fade-ins, and glow effects

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Development Setup**: Vite middleware integration for hot reloading in development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be swapped for database persistence
- **API Structure**: RESTful API routes prefixed with /api (currently minimal implementation)

## Data Storage
- **Database**: PostgreSQL configured via DATABASE_URL environment variable
- **Schema**: Basic user table with id, username, and password fields using Drizzle ORM
- **Migrations**: Managed through Drizzle Kit with migrations stored in ./migrations directory
- **Current State**: In-memory storage implementation for development, ready for database integration

## Authentication & Authorization
- **Session Management**: Express sessions configured with connect-pg-simple for PostgreSQL session storage
- **User Schema**: Defined user types with Zod validation schemas for type safety
- **Current Implementation**: Storage interface ready for authentication implementation

## External Dependencies
- **Database**: Neon serverless PostgreSQL (@neondatabase/serverless)
- **UI Framework**: Extensive Radix UI component collection for accessible UI primitives
- **Audio**: Matrix-themed background music with user interaction-triggered playback
- **Fonts**: Google Fonts integration (Orbitron for Matrix-style text, Courier Prime for monospace)
- **Build Tools**: Vite with React plugin and specialized Replit plugins for development environment
- **Validation**: Zod for runtime type checking and schema validation
- **Date Handling**: date-fns for date manipulation utilities
- **Icons**: Lucide React for consistent iconography