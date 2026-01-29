# 🧪 Backend Testing Guide - PAIC Website

A complete guide to test all backend functionality step by step.

---

## ⚡ Prerequisites

- ✅ Backend running: `http://localhost:5000`
- ✅ Frontend running: `http://localhost:5173`
- ✅ MySQL running with `paic_website` database
- ✅ Contact table created

---

## 🚀 Method 1: Quick Health Check

### Test Server is Running

**URL:** `http://localhost:5000/health`

**Expected Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2026-01-27T10:00:00Z"
}
```

**If you see this:** ✅ Backend is working!
**If you see error:** ❌ Backend not running - run `npm run dev` in server folder

---

## 🧹 Method 2: Using Browser Console

### Step 1: Open Browser Console
1. Go to `http://localhost:5173`
2. Press `F12` (or right-click → Inspect)
3. Go to **Console** tab

### Step 2: Copy Test Code
Open the file `API_TESTING.js` in the root folder and copy all its content into your console.

### Step 3: Run Tests

```javascript
// Test health check
testHealthCheck()

// Test form submission
testSubmitContact()

// Get all contacts
testGetAllContacts()

// Get statistics
testGetStats()

// Run all tests at once
runAllTests()
```

### Expected Output for Each Test

**testHealthCheck():**
```
✅ Health Check: {success: true, message: "Server is running", ...}
```

**testSubmitContact():**
```
✅ Contact Submitted: {success: true, data: {id: 1, name: "Test User", ...}}
```

**testGetAllContacts():**
```
✅ All Contacts: {success: true, data: [{...}, {...}]}
```

**testGetStats():**
```
✅ Contact Statistics: {success: true, data: {total: 1, new_count: 1, ...}}
```

---

## 🔌 Method 3: Using Postman (Recommended for Advanced Testing)

### Step 1: Import Collection
1. Open Postman
2. Click **Import**
3. Select `server/PAIC_API_Collection.postman_collection.json`
4. Click **Import**

### Step 2: Run Requests

#### Test 1: Health Check
```
GET http://localhost:5000/health
```
**Expected Status:** 200 OK

#### Test 2: Submit Contact
```
POST http://localhost:5000/api/contacts/submit
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Testing the API",
  "message": "This is a comprehensive test of the backend API."
}
```
**Expected Status:** 201 Created

#### Test 3: Get All Contacts
```
GET http://localhost:5000/api/contacts/admin/contacts
```
**Expected Status:** 200 OK

#### Test 4: Get Statistics
```
GET http://localhost:5000/api/contacts/admin/stats
```
**Expected Status:** 200 OK

---

## 💻 Method 4: Using cURL (Command Line)

### Test Health Check
```bash
curl http://localhost:5000/health
```

### Test Submit Contact
```bash
curl -X POST http://localhost:5000/api/contacts/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Testing the Backend",
    "message": "This is a test message for backend verification"
  }'
```

### Test Get All Contacts
```bash
curl http://localhost:5000/api/contacts/admin/contacts
```

### Test Get Statistics
```bash
curl http://localhost:5000/api/contacts/admin/stats
```

---

## 📝 Method 5: Web Form Testing (UI Testing)

### Step 1: Open Contact Form
1. Go to `http://localhost:5173`
2. Click "Contact Us" button or navigate to contact page

### Step 2: Fill Form with Valid Data
```
Name: John Doe
Email: john@example.com
Subject: Testing the contact form integration
Message: This is a test message to verify the frontend-backend integration works correctly.
```

### Step 3: Submit Form
1. Click "Send Message" button
2. Button should change to "Sending..."
3. Wait 1-2 seconds

### Step 4: Verify Success
**Expected behavior:**
- ✅ Alert appears: "Thank you for your message! We will get back to you soon."
- ✅ Form clears
- ✅ Success message briefly displays
- ✅ Console shows no errors

### Step 5: Check Database
```bash
mysql -u root -p paic_website
SELECT * FROM contacts WHERE email = 'john@example.com';
```

**You should see your submission in the database**

---

## 🔍 Method 6: Advanced Testing - All Endpoints

### Endpoint 1: Create Contact
```bash
POST /api/contacts/submit
Status: 201
Response: {success: true, data: {id, name, email, subject, message, status, created_at}}
```

### Endpoint 2: Get All Contacts
```bash
GET /api/contacts/admin/contacts?limit=50&offset=0
Status: 200
Response: {success: true, data: [...], stats: {...}}
```

### Endpoint 3: Get Contact by ID
```bash
GET /api/contacts/admin/contacts/1
Status: 200
Response: {success: true, data: {...}}
```

### Endpoint 4: Get Contacts by Email
```bash
GET /api/contacts/admin/contacts/email/test@example.com
Status: 200
Response: {success: true, data: [...]}
```

### Endpoint 5: Search Contacts
```bash
GET /api/contacts/admin/search?q=test
Status: 200
Response: {success: true, data: [...], count: N}
```

### Endpoint 6: Get Statistics
```bash
GET /api/contacts/admin/stats
Status: 200
Response: {success: true, data: {total, new_count, read_count, responded_count, archived_count}}
```

### Endpoint 7: Update Status
```bash
PATCH /api/contacts/admin/contacts/1/status
Body: {status: "read"}
Status: 200
Response: {success: true, data: {...}}
```

### Endpoint 8: Update Contact
```bash
PUT /api/contacts/admin/contacts/1
Body: {status: "responded"}
Status: 200
Response: {success: true, data: {...}}
```

### Endpoint 9: Delete Contact (Soft)
```bash
DELETE /api/contacts/admin/contacts/1
Status: 200
Response: {success: true, message: "Contact deleted successfully"}
```

### Endpoint 10: Date Range Query
```bash
GET /api/contacts/admin/date-range?startDate=2026-01-01&endDate=2026-12-31
Status: 200
Response: {success: true, data: [...], dateRange: {...}}
```

### Endpoint 11: Permanent Delete
```bash
DELETE /api/contacts/admin/contacts/1/permanent
Status: 200
Response: {success: true, message: "Contact permanently deleted"}
```

---

## ✅ Testing Checklist

### Basic Functionality
- [ ] Health check returns 200
- [ ] Submit contact returns 201
- [ ] Form data saves to database
- [ ] Success message appears on form
- [ ] Get all contacts returns data
- [ ] Statistics show correct numbers

### Validation Testing
- [ ] Empty name rejected
- [ ] Invalid email rejected
- [ ] Short subject rejected
- [ ] Short message rejected
- [ ] Valid data accepted

### Admin Features
- [ ] Search finds matching contacts
- [ ] Status updates work
- [ ] Delete works
- [ ] Date range filtering works
- [ ] Statistics calculate correctly

### Error Handling
- [ ] 400 error for invalid data
- [ ] 404 error for not found
- [ ] Proper error messages
- [ ] CORS errors don't occur
- [ ] Network errors handled gracefully

---

## 🐛 Common Issues & Fixes

### Issue: "Failed to fetch" or "Cannot connect"
**Cause:** Backend not running
**Fix:** Run `cd server && npm run dev`

### Issue: CORS Error in Console
**Cause:** Backend CORS not configured
**Fix:** Check `server/.env` has correct `FRONTEND_URL`

### Issue: "Table doesn't exist"
**Cause:** Migrations not run
**Fix:** Run `cd server && npm run migrate`

### Issue: 404 on API endpoint
**Cause:** Wrong URL or server not responding
**Fix:** Verify `VITE_API_URL` in `.env` matches backend URL

### Issue: "Error 500"
**Cause:** Server error
**Fix:** Check backend console for error details

---

## 🔄 Full Testing Workflow

### 1. Start Servers (5 min before testing)
```bash
# Terminal 1
cd server && npm run dev

# Terminal 2
npm run dev
```

### 2. Health Check (1 min)
Visit: `http://localhost:5000/health` ✅

### 3. Web Form Test (3 min)
- Fill contact form
- Submit
- Verify success ✅

### 4. Database Verification (2 min)
```bash
mysql -u root -p paic_website
SELECT * FROM contacts;
```
✅

### 5. API Endpoint Tests (10 min)
- Test all 11 endpoints
- Verify responses
✅

### 6. Error Handling Tests (5 min)
- Invalid data
- Missing fields
- Wrong formats
✅

---

## 📊 Testing Report Template

Use this to document test results:

```
Date: __________
Tester: __________

Backend URL: _______________
Frontend URL: _______________
Database: _______________

Tests Passed: ___/11
Tests Failed: ___/11

Issues Found:
1. ___________________
2. ___________________
3. ___________________

Status: [✅ PASS / ❌ FAIL]
Notes: ___________________
```

---

## 🎯 Quick Test Execution Times

| Test Method | Time | Best For |
|-------------|------|----------|
| Health Check | 10 sec | Quick verification |
| Web Form | 1 min | User experience |
| Browser Console | 3 min | Comprehensive |
| Postman | 5 min | Advanced testing |
| cURL | 2 min | Command line |
| Database Check | 1 min | Data verification |
| Full Suite | 15 min | Complete testing |

---

## 📱 Response Format Reference

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* object or array */ }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errors": [ /* validation details */ ]
}
```

---

## 🔐 Security Testing

### Test 1: SQL Injection Prevention
```
Name: Test' OR '1'='1
Expected: Rejected or safely handled
```

### Test 2: XSS Prevention
```
Name: <script>alert('xss')</script>
Expected: Rejected or escaped
```

### Test 3: CSRF Protection
```
Expected: Cross-origin requests properly validated
```

---

## 📈 Performance Testing

### Test Response Times
- Health check: < 50ms
- Submit contact: < 500ms
- Get all contacts: < 100ms
- Search: < 200ms
- Statistics: < 100ms

---

## 🚨 Known Issues & Workarounds

| Issue | Workaround |
|-------|-----------|
| Slow database | Add indexes |
| CORS errors | Check .env FRONTEND_URL |
| 404 errors | Verify API URL path |
| Validation errors | Check console for details |

---

## ✨ Testing Best Practices

1. **Always test with fresh data**
   - Clear database before major tests
   - Use unique emails for testing

2. **Check console logs**
   - Browser console (F12)
   - Server terminal output

3. **Test both success and error paths**
   - Valid data → Success
   - Invalid data → Proper error

4. **Document findings**
   - Keep testing notes
   - Report bugs with examples

5. **Test in order**
   - Basic functionality first
   - Advanced features later
   - Error handling last

---

## 🎓 Learning from Tests

Each test teaches something:
- **Health check** → Server connectivity
- **Submit form** → API integration
- **Database query** → Data persistence
- **Search** → Complex queries
- **Error handling** → System robustness

---

## 📞 Troubleshooting Tests

If a test fails:

1. **Check backend console** for errors
2. **Verify .env files** are configured
3. **Check network tab** (F12) for request details
4. **Review error message** carefully
5. **Check backend logs** for details

---

## ✅ Final Verification

Before considering testing complete:

- [ ] All 11 endpoints tested
- [ ] Form submission works
- [ ] Database saves data
- [ ] No console errors
- [ ] Error handling works
- [ ] Response times acceptable
- [ ] Documentation updated

---

**Status:** ✅ Ready for Testing
**Last Updated:** January 27, 2026

Next: Use this guide to test all functionality!
