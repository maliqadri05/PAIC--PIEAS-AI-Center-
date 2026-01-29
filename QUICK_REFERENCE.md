# 🚀 PAIC Backend - Quick Reference Guide

## Start the System (2 terminals)

### Terminal 1: Backend
```bash
cd server
npm install              # First time only
npm run migrate          # First time only - creates database
npm run dev             # Start backend
```

### Terminal 2: Frontend
```bash
npm install             # First time only
npm run dev            # Start frontend
```

**URLs:**
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Health: http://localhost:5000/health

---

## First Time Setup Checklist

- [ ] MySQL installed and running
- [ ] `server/.env` created with database credentials
- [ ] `npm install` ran in server directory
- [ ] `npm run migrate` completed successfully
- [ ] `.env` created in root with `VITE_API_URL=http://localhost:5000`
- [ ] Both servers started (frontend & backend)

---

## Testing the Integration

1. **Open Frontend** → http://localhost:5173
2. **Go to Contact Page**
3. **Fill out form:**
   - Name: Test User
   - Email: test@example.com
   - Subject: Testing Backend
   - Message: This is a test message
4. **Click Send Message**
5. **Check database:**
   ```bash
   mysql -u root -p paic_website
   SELECT * FROM contacts;
   ```

---

## API Endpoints Quick Reference

### Submit Form (Public)
```
POST /api/contacts/submit
Body: { name, email, subject, message }
```

### Admin Operations
```
GET    /api/contacts/admin/contacts                    # All contacts
GET    /api/contacts/admin/stats                       # Statistics
GET    /api/contacts/admin/contacts/:id                # Single contact
GET    /api/contacts/admin/contacts/email/:email       # By email
GET    /api/contacts/admin/search?q=term              # Search
GET    /api/contacts/admin/date-range?startDate=&endDate=  # Date range
PATCH  /api/contacts/admin/contacts/:id/status        # Update status
PUT    /api/contacts/admin/contacts/:id                # Update info
DELETE /api/contacts/admin/contacts/:id                # Soft delete
DELETE /api/contacts/admin/contacts/:id/permanent     # Hard delete
```

---

## Database Configuration

**File:** `server/.env`

```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=paic_website
FRONTEND_URL=http://localhost:5173
```

---

## File Structure Quick Map

```
Key Backend Files:
├── server/src/index.js                    ← Main server
├── server/src/models/Contact.js           ← Database queries
├── server/src/controllers/contactController.js  ← Business logic
├── server/src/routes/contactRoutes.js     ← API endpoints
├── server/src/config/database.js          ← DB connection
│
Frontend:
├── src/components/Contact.jsx             ← Updated component
└── .env                                   ← Frontend config
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Cannot connect to MySQL | Check credentials in `server/.env` |
| Table doesn't exist | Run `npm run migrate` |
| CORS errors | Check `FRONTEND_URL` in `server/.env` |
| Form not submitting | Ensure both servers are running |
| 404 errors | Check API_URL in frontend `.env` |

---

## Common Commands

```bash
# Backend
cd server
npm install                 # Install dependencies
npm run dev                # Start with hot reload
npm run migrate            # Create database & tables
npm start                  # Production run

# Frontend
npm run dev                # Start with Vite
npm run build              # Production build
npm run lint               # Check code quality
```

---

## Database Query Examples

```bash
# Connect to database
mysql -u root -p paic_website

# View all contacts
SELECT * FROM contacts;

# Count contacts by status
SELECT status, COUNT(*) FROM contacts GROUP BY status;

# Find recent contacts
SELECT name, email, created_at FROM contacts ORDER BY created_at DESC LIMIT 10;

# Search by keyword
SELECT * FROM contacts WHERE message LIKE '%keyword%';
```

---

## Testing APIs

### Option 1: Browser Console
```javascript
// Copy API_TESTING.js to browser console
runAllTests()
```

### Option 2: Postman
1. Import `PAIC_API_Collection.postman_collection.json`
2. Test each endpoint

### Option 3: cURL
```bash
# Submit contact
curl -X POST http://localhost:5000/api/contacts/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'

# Get all contacts
curl http://localhost:5000/api/contacts/admin/contacts

# Get stats
curl http://localhost:5000/api/contacts/admin/stats
```

---

## Environment Variables

### Backend (server/.env)
```
PORT                    Server port (default: 5000)
NODE_ENV                development or production
DB_HOST                 MySQL server host
DB_PORT                 MySQL server port (default: 3306)
DB_USER                 MySQL username
DB_PASSWORD             MySQL password
DB_NAME                 Database name to create
FRONTEND_URL            Frontend URL for CORS
```

### Frontend (.env)
```
VITE_API_URL            Backend API URL
```

---

## Contact Form Validation

**Client-side (Contact.jsx):**
- Name: 2-255 characters
- Email: Valid email format
- Subject: 5-500 characters
- Message: 10-5000 characters

**Server-side (validators.js):**
Same rules enforced on backend

---

## Database Schema

```sql
CREATE TABLE contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message LONGTEXT NOT NULL,
  status ENUM('new','read','responded','archived') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL,
  INDEX idx_email (email),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);
```

---

## Response Format

### Success
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* object or array */ }
}
```

### Error
```json
{
  "success": false,
  "message": "Error description",
  "errors": [ /* validation errors */ ]
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created |
| 400 | Bad Request - Validation failed |
| 404 | Not Found - Resource not found |
| 500 | Server Error - Internal error |

---

## Contact Statuses

- **new** - Just received, unread
- **read** - Admin has read the message
- **responded** - Admin has replied
- **archived** - Stored for reference

---

## Features Implemented

- [x] Contact form submission
- [x] Data validation (client & server)
- [x] MySQL database
- [x] CRUD operations
- [x] Search & filter
- [x] Date range queries
- [x] Statistics
- [x] Status tracking
- [x] Soft delete
- [x] Error handling
- [x] CORS support
- [x] Security headers
- [x] Request logging
- [x] Documentation

---

## Getting Help

1. **Setup Issues** → See `BACKEND_SETUP_GUIDE.md`
2. **API Questions** → See `server/README.md`
3. **Testing** → Use `API_TESTING.js`
4. **Configuration** → Check `.env.example` files
5. **Code** → Read inline comments in source files

---

## Next Steps

After basic setup, you can:
1. Add authentication for admin endpoints
2. Create admin dashboard
3. Add email notifications
4. Implement rate limiting
5. Add contact categories
6. Export to CSV/PDF

---

## Important Files Locations

| File | Location | Purpose |
|------|----------|---------|
| Backend Server | `server/src/index.js` | Express app |
| Database Config | `server/src/config/database.js` | MySQL connection |
| Contact Model | `server/src/models/Contact.js` | All queries |
| Controller | `server/src/controllers/contactController.js` | Business logic |
| Validation | `server/src/middleware/validators.js` | Input rules |
| Routes | `server/src/routes/contactRoutes.js` | API endpoints |
| Frontend | `src/components/Contact.jsx` | React component |
| Backend Config | `server/.env` | Backend settings |
| Frontend Config | `.env` | Frontend settings |
| Documentation | `BACKEND_SETUP_GUIDE.md` | Setup guide |
| Testing | `API_TESTING.js` | Test utilities |

---

**Status:** ✅ Ready to Use
**Last Updated:** January 27, 2025
