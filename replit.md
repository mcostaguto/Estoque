# Material Loan Tracker

## Overview

This is a Material Loan Tracker system built with a modern full-stack architecture using TypeScript, React, Express.js, and PostgreSQL with Drizzle ORM. The system manages inventory items (tools, equipment, and consumables), tracks loans and returns, handles user management with role-based access control, and provides real-time notifications. It features a comprehensive web application for warehouse management, inventory control, and reporting.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development
- **UI Components**: Shadcn/UI components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: React Context API for global state (Auth, Inventory, Loans, Consumables, Socket)
- **Data Fetching**: TanStack React Query for server state management and caching
- **Routing**: React Router DOM with protected routes and role-based navigation
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Real-time**: Socket.IO client for live notifications and updates

### Backend Architecture
- **Framework**: Express.js with TypeScript in ESM format
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **Authorization**: Role-based access control (admin, manager, basic) with middleware
- **Real-time**: Socket.IO server for live notifications and inventory updates
- **API Design**: RESTful endpoints with comprehensive error handling
- **Security**: Helmet for security headers, CORS configuration, rate limiting
- **Logging**: Morgan for HTTP request logging with audit trail capabilities

### Database Design
- **Primary Database**: PostgreSQL with Drizzle schema definitions
- **Core Entities**: 
  - People (users' personal information)
  - AppUsers (authentication and authorization)
  - Items (tools, equipment, consumables with type-specific fields)
  - StoragePlaces (warehouse locations and sub-areas)
  - Loans (item lending tracking with due dates)
  - InventoryMovements (stock changes with audit trail)
- **Audit System**: Comprehensive audit logs and revoked tokens for security
- **Constraints**: Foreign key relationships with appropriate cascade/restrict policies

### Authentication & Authorization
- **Authentication Method**: JWT tokens with configurable expiration
- **Token Management**: Blacklist system for revoked tokens stored in database
- **Password Security**: Bcrypt with configurable salt rounds
- **Session Management**: Token-based with logout functionality
- **Role Hierarchy**: Three-tier system (admin > manager > basic) with granular permissions

### Business Logic Architecture
- **Inventory Management**: Multi-type item system (tools/equipment for loans, consumables for withdrawals)
- **Loan Tracking**: Complete lifecycle from creation to return with due date monitoring
- **Stock Control**: Real-time quantity tracking with minimum threshold alerts
- **Audit Trail**: All critical operations logged with user attribution and timestamps
- **Notification System**: Automated overdue loan notifications via Socket.IO

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect for schema management
- **bcrypt**: Password hashing for secure authentication
- **jsonwebtoken**: JWT token generation and verification
- **socket.io**: Real-time bidirectional communication

### Frontend Dependencies
- **@radix-ui/***: Accessible UI component primitives for forms, dialogs, and navigation
- **@tanstack/react-query**: Server state management with caching and synchronization
- **react-router-dom**: Client-side routing with protected route handling
- **react-hook-form**: Form state management with validation
- **zod**: Runtime type validation for forms and API responses
- **tailwindcss**: Utility-first CSS framework with design system

### Development & Build Tools
- **vite**: Fast build tool and development server with HMR
- **typescript**: Static type checking across frontend and backend
- **tsx**: TypeScript execution for Node.js scripts and development
- **esbuild**: Fast JavaScript bundler for production builds
- **drizzle-kit**: Database migrations and schema management CLI

### Validation & Schemas
- **Shared Schema System**: Centralized Zod schemas in `/shared` directory for consistent validation
- **Type Safety**: Full TypeScript coverage from database to frontend components
- **Runtime Validation**: API request/response validation with detailed error messages