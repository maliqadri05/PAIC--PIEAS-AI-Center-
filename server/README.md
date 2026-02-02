# PAIC Website Backend Server

Complete backend implementation for the PAIC website contact form system with MySQL database integration.

## 📋 Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)

## ✨ Features

- ✅ Contact form submission with validation
- ✅ Admin contact management system
- ✅ Full CRUD operations
- ✅ Advanced search and filtering
- ✅ Date range queries
- ✅ Contact statistics and analytics
- ✅ Soft delete support
- ✅ Status tracking (new, read, responded, archived)
- ✅ Input validation with express-validator
- ✅ CORS enabled for frontend integration
- ✅ Security headers with Helmet
- ✅ Request logging with Morgan
- ✅ Error handling and validation
- ✅ Request throttling for public endpoints (rate limiting on contact submissions)

## 📦 Prerequisites

- Node.js (v16 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

## 🚀 Installation

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file**
   ```bash
   cp .env.example .env
   ```
> Note: A basic CI workflow was added at `.github/workflows/ci.yml` to run frontend lint and build and to install server dependencies on push/PR. Enable GitHub Actions for automatic checks.
4. **Configure your database in .env**
   ```env
   PORT=5000
   NODE_ENV=development
   
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password_here
   DB_NAME=paic_website
   
   FRONTEND_URL=http://localhost:5173
   ```

## ⚙️ Configuration

### Database Configuration
Update the `.env` file with your MySQL credentials:
- `DB_HOST` - MySQL server host (default: localhost)
- `DB_PORT` - MySQL server port (default: 3306)
- `DB_USER` - MySQL username
- `DB_PASSWORD` - MySQL password
- `DB_NAME` - Database name to create

### Server Configuration
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS

## 📊 Database Setup

### Automatic Setup
Run the migration script to create the database and tables:

```bash
npm run migrate
```

This will:
1. Create the MySQL database if it doesn't exist
2. Create the `contacts` table with proper structure
3. Set up indexes for optimal performance

### Database Schema

```sql
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message LONGTEXT NOT NULL,
  status ENUM('new', 'read', 'responded', 'archived') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL,
  INDEX idx_email (email),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## 🏃 Running the Server

### Development Mode (with hot reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Server will start on http://localhost:5000

## 📡 API Documentation

### Public Endpoints

#### Submit Contact Form
```http
POST /api/contacts/submit
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry about AI Center",
  "message": "I am interested in learning more about the AI center's programs."
}
```

**Response (201 Created)**
```json
{
  "success": true,
  "message": "Contact submitted successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry about AI Center",
    "message": "I am interested in learning more about the AI center's programs.",
    "status": "new",
    "created_at": "2024-01-27T10:30:00Z"
  }
}
```

### Admin Endpoints

#### Get All Contacts
```http
GET /api/contacts/admin/contacts?status=new&limit=50&offset=0&sortBy=created_at&order=DESC
```

#### Get Contact Statistics
```http
GET /api/contacts/admin/stats
```

**Response**
```json
{
  "success": true,
  "message": "Statistics retrieved successfully",
  "data": {
    "total": 15,
    "new_count": 3,
    "read_count": 8,
    "responded_count": 4,
    "archived_count": 0,
    "days_with_contacts": 5
  }
}
```

#### Get Single Contact
```http
GET /api/contacts/admin/contacts/:id
```

#### Get Contacts by Email
```http
GET /api/contacts/admin/contacts/email/:email
```

#### Search Contacts
```http
GET /api/contacts/admin/search?q=search_term&limit=50&offset=0
```

#### Get Contacts by Date Range
```http
GET /api/contacts/admin/date-range?startDate=2024-01-01&endDate=2024-01-31
```

#### Update Contact Status
```http
PATCH /api/contacts/admin/contacts/:id/status
Content-Type: application/json

{
  "status": "read"
}
```

#### Update Contact Information
```http
PUT /api/contacts/admin/contacts/:id
Content-Type: application/json

{
  "status": "responded",
  "message": "Updated message if needed"
}
```

#### Delete Contact (Soft Delete)
```http
DELETE /api/contacts/admin/contacts/:id
```

#### Permanently Delete Contact
```http
DELETE /api/contacts/admin/contacts/:id/permanent
```

### Health Check
```http
GET /health
```

## 📁 Project Structure

```
server/
├── src/
│   ├── config/
│   │   ├── database.js         # Database connection pool
│   │   └── migrations.js       # Migration definitions
│   ├── controllers/
│   │   └── contactController.js # Business logic
│   ├── middleware/
│   │   └── validators.js       # Input validation
│   ├── models/
│   │   └── Contact.js          # Database queries
│   ├── routes/
│   │   └── contactRoutes.js    # API routes
│   ├── migrations/
│   │   └── runMigrations.js    # Migration runner
│   └── index.js                # Main server file
├── package.json                # Dependencies
├── .env.example               # Environment template
└── .gitignore                 # Git ignore rules
```

## 🔐 Validation Rules

### Contact Submission
- **name**: Required, 2-255 characters
- **email**: Required, valid email format
- **subject**: Required, 5-500 characters
- **message**: Required, 10-5000 characters

### Status Update
- **status**: Must be one of: `new`, `read`, `responded`, `archived`

## 🛡️ Security Features

- Input validation with express-validator
- SQL injection prevention with parameterized queries
- CORS configuration
- Security headers with Helmet
- Environment variable protection
- Error handling with safe error messages

## 📝 Logging

- Morgan middleware logs all HTTP requests
- Console logs for important operations
- Error logs with full stack traces in development mode

## 🔧 Troubleshooting

### Database Connection Issues
1. Ensure MySQL is running
2. Verify credentials in .env file
3. Check database name and port

### Migration Fails
1. Ensure MySQL is running
2. Check database user permissions
3. Run migration again: `npm run migrate`

### CORS Errors
1. Verify FRONTEND_URL in .env
2. Ensure frontend is running on correct port
3. Check browser console for specific errors

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [express-validator](https://express-validator.github.io/docs/)
- [CORS Guide](https://enable-cors.org/)

## 🤝 Contributing

For backend modifications:
1. Follow existing code structure
2. Add validation for new fields
3. Update database schema with migrations
4. Test API endpoints thoroughly

## 📄 License

This project is part of PIEAS Artificial Intelligence Center (PAIC)
