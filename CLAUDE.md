# Node.js Backend - Virtual Systems Explorer

## File Scope - What Claude Should Care About

### ✅ INCLUDE (Always read/modify these)
- `src/**/*.js` - Source files (when created)
- `*.js` in root (e.g., `server.js`, `index.js`)
- `routes/**/*.js` - API routes (when created)
- `controllers/**/*.js` - Business logic (when created)
- `models/**/*.js` - Data models (when created)
- `middleware/**/*.js` - Custom middleware (when created)
- `config/**/*.js` - Configuration files (when created)
- `package.json` - Dependencies
- `.env*` files - Environment variables

### ❌ EXCLUDE (Never read these)
- `node_modules/**/*` - Dependencies (massive token waste)
- `dist/**/*` or `build/**/*` - Build output if TypeScript is added
- `public/**/*` - Frontend static files (from React build)
- `logs/**/*` - Application logs

### 🔍 Search Patterns
**All source code (when created):**
```
Pattern: **/*.js
Path: C:\Repos\VSE\virtual-systems-explorer-backend\src
```

**Config files:**
```
Pattern: *.js
Path: C:\Repos\VSE\virtual-systems-explorer-backend
```

## Tech Stack
- **Express 5.2** - Web framework
- **CORS** - Cross-origin support
- **Node.js** - Runtime
- **No database yet** (plan for future)
- **No ORM yet** (plan for future)

## Code Organization (Planned)
```
backend/
├── src/
│   ├── routes/          # API endpoints
│   ├── controllers/     # Request handlers
│   ├── models/          # Data models
│   ├── middleware/      # Custom middleware
│   ├── services/        # Business logic
│   └── utils/           # Helper functions
├── config/              # Configuration
├── public/              # Serves React build
├── server.js            # Entry point
└── package.json
```

## Deployment Notes
- Will serve React production build from `/public` or similar
- API routes typically under `/api/*`
- Static files (React) served from root or dedicated route

## Token-Saving Tips for Claude
- **Never** search or read `node_modules/`
- Currently minimal code - only `package.json` exists
- When server code is added, focus searches on `src/` or root-level `.js` files
- If React build is mentioned, those files are in `public/` but are generated - don't read them

## Documentation Policy
- **NEVER** create README.md or other documentation files unless explicitly requested by the user
- Focus on code implementation, not documentation generation
