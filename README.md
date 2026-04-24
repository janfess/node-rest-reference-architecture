# Node.js REST API Reference Architecture

> **A production-ready, highly optimized, and modular Node.js REST API blueprint built with TypeScript.**

This repository serves as a "masterclass" reference for architecting professional-grade backends. It demonstrates a clean separation of concerns, robust security practices, and a scalable project structure that follows the absolute latest industry standards.

## 🚀 Architectural Highlights

- **TypeScript-First Architecture**: Strictly typed from the ground up, utilizing modern `NodeNext` module resolution for high performance and compatibility.
- **Native Environment Management**: Utilizes the Node.js built-in `--env-file` flag (introduced in v20.6.0), eliminating the need for external packages like `dotenv` and reducing the application's dependency footprint.
- **Modular Layered Design**: Follows the **Route -> Controller -> Service** pattern to ensure testability and clear responsibility boundaries.
- **Centralized Config Management**: Validates environment variables at startup, preventing runtime failures due to missing configuration.
- **Enterprise Middleware Stack**:
  - **Async Handler**: Centralized error catching for all async routes.
  - **Validation Middleware**: Decoupled, reusable input validation using `express-validator`.
  - **Rate Limiting**: Integrated pattern for protecting endpoints from abuse.
  - **Global Error Handler**: Standardized JSON responses for all operational and system errors.
- **Security-Hardened**: Pre-configured with:
  - **Helmet**: Essential security headers.
  - **CORS**: Granular cross-origin resource sharing.
- **Automated Testing Masterclass**:
  - **Jest & Supertest**: Integrated integration testing for API endpoints.
  - **ESM Test Runner**: Configured to support modern TypeScript ESM module resolution.
- **Cloud-Native & DevOps Ready**:
  - **Dockerized**: Multi-stage Dockerfile for optimized production images.
  - **GitHub Actions**: Automated CI pipeline for testing, auditing, and building.
  - **Google Cloud Build**: Pre-configured `cloudbuild.yaml` for GCP deployments.
  - **Clean Architecture Testing**: Demonstrates testing controllers and services in isolation from infrastructure.
  - **Input Sanitization**: Express-validator integration for defensive programming.
  - **Powered-By Suppression**: Hidden server identification.
- **Performance Optimized**: Includes HTTP compression and lightweight request logging via Morgan.
- **Standardized Error Handling**: Centralized middleware for uniform error responses across the entire API.

## 📁 Project Structure

```
src/
├── api/
│   ├── controllers/   # Business logic orchestration
│   ├── middlewares/   # Global and route-specific guards
│   ├── routes/        # Endpoint definitions and validation mapping
│   └── services/      # Core domain logic and third-party integrations
├── core/
│   ├── config/        # Environment and constant management
│   └── utils/         # Reusable helpers (Loggers, Formatters)
├── app.ts             # Express application setup
└── index.ts           # Server entry point
```

## 🛠️ Tech Stack

- **Runtime**: Node.js (v24+ recommended)
- **Framework**: Express.js
- **Language**: TypeScript
- **Validation**: Express-validator
- **Security**: Helmet, CORS
- **Logging**: Morgan

## 🚦 Getting Started

### Prerequisites

- Node.js ^24.0.0
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd node-rest-reference-architecture
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file based on the provided patterns.

### Development

Run the development server with automatic reloading:
```bash
npm run dev
```

### Build

Compile the TypeScript source into production-ready JavaScript:
```bash
npm run build
```

## 📜 License

This project is open-sourced under the MIT License.
