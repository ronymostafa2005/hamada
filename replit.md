# Ahmed Osama Portfolio - Full Stack Developer & Odoo Specialist

## Overview

This is a modern portfolio website for Ahmed Osama, a Full Stack Developer and Odoo ERP Specialist based in Alexandria, Egypt. The project showcases professional experience, technical skills, and featured projects through an interactive, responsive web application. The portfolio is built as a single-page application with smooth navigation, contact functionality, and multi-language support (English/Arabic).

## Recent Changes (August 2025)

- Updated all personal information to reflect Ahmed Osama's real details
- Replaced profile image with actual photo
- Updated contact email to ahmed.osama.swe@gmail.com  
- Changed location from Cairo to Alexandria, Egypt
- Updated project portfolio with real websites:
  - Web Development: 1stdecor.com, aboghaliaoffice.com, lopsy.org, maharh.com.sa, pricelessmed.com
  - Odoo Development: Custom ERP systems for manufacturing, retail POS, and HR management
- All projects now link to live, working websites

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent, accessible interface elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Context for theme and language state, TanStack Query for server state
- **Internationalization**: Custom context-based solution supporting English and Arabic languages

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints with Zod schema validation
- **Development Server**: Vite for fast development with hot module replacement
- **Build Process**: esbuild for production bundling with ESM format

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Temporary Storage**: In-memory storage implementation for development/testing

### Authentication and Authorization
- **Current State**: Basic user schema defined but no active authentication implementation
- **Session Management**: PostgreSQL session store configuration present (connect-pg-simple)
- **Future-Ready**: Infrastructure prepared for user authentication and session management

### Component Architecture
- **Design System**: Consistent component library built on Radix UI primitives
- **Layout Strategy**: Section-based layout with navigation, hero, about, projects, skills, and contact sections
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Radix UI components provide built-in accessibility features

### Development Workflow
- **Build Tool**: Vite for fast development and optimized production builds
- **Type Checking**: TypeScript with strict configuration across client, server, and shared code
- **Code Organization**: Monorepo structure with separate client, server, and shared directories
- **Asset Management**: Vite handles static assets with path resolution and optimization

## External Dependencies

### Core Technologies
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM with PostgreSQL dialect for database operations
- **UI Framework**: Radix UI component primitives for accessible interface elements
- **Styling**: Tailwind CSS for utility-first styling approach

### Development Tools
- **Vite**: Development server and build tool with React plugin
- **TypeScript**: Type checking and compilation across the entire stack
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **esbuild**: Fast JavaScript bundler for production builds

### Third-Party Services
- **Fonts**: Google Fonts (Inter font family) loaded via CDN
- **Images**: Unsplash for placeholder images in project showcases
- **Replit Integration**: Development environment integration with Replit-specific plugins

### Form Handling
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation for form schemas and API requests
- **TanStack Query**: Asynchronous state management for API calls

### UI Enhancement Libraries
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for building variant-based component APIs
- **clsx & tailwind-merge**: Conditional class name utilities
- **date-fns**: Date manipulation and formatting utilities