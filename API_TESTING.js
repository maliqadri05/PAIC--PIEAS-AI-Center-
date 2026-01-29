/**
 * PAIC Website Backend - API Testing Examples
 * Copy these functions to your browser console or use Postman
 * 
 * Prerequisites:
 * - Backend running on http://localhost:5000
 * - Replace localhost:5000 with your server URL if different
 */

const API_BASE = 'http://localhost:5000';

/**
 * TEST 1: Health Check
 */
async function testHealthCheck() {
  try {
    const response = await fetch(`${API_BASE}/health`);
    const data = await response.json();
    console.log('✅ Health Check:', data);
    return data;
  } catch (error) {
    console.error('❌ Health Check Failed:', error);
  }
}

/**
 * TEST 2: Submit Contact Form
 */
async function testSubmitContact() {
  try {
    const contactData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Testing the PAIC Backend',
      message: 'This is a test message to verify the backend contact system is working correctly.'
    };

    const response = await fetch(`${API_BASE}/api/contacts/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const data = await response.json();
    console.log('✅ Contact Submitted:', data);
    return data;
  } catch (error) {
    console.error('❌ Submit Contact Failed:', error);
  }
}

/**
 * TEST 3: Get All Contacts (Admin)
 */
async function testGetAllContacts() {
  try {
    const response = await fetch(`${API_BASE}/api/contacts/admin/contacts`);
    const data = await response.json();
    console.log('✅ All Contacts:', data);
    return data;
  } catch (error) {
    console.error('❌ Get All Contacts Failed:', error);
  }
}

/**
 * TEST 4: Get Contact Statistics (Admin)
 */
async function testGetStats() {
  try {
    const response = await fetch(`${API_BASE}/api/contacts/admin/stats`);
    const data = await response.json();
    console.log('✅ Contact Statistics:', data);
    return data;
  } catch (error) {
    console.error('❌ Get Stats Failed:', error);
  }
}

/**
 * TEST 5: Get Single Contact by ID (Admin)
 */
async function testGetContactById(id = 1) {
  try {
    const response = await fetch(`${API_BASE}/api/contacts/admin/contacts/${id}`);
    const data = await response.json();
    console.log(`✅ Contact #${id}:`, data);
    return data;
  } catch (error) {
    console.error(`❌ Get Contact #${id} Failed:`, error);
  }
}

/**
 * TEST 6: Update Contact Status (Admin)
 */
async function testUpdateContactStatus(id = 1, status = 'read') {
  try {
    const response = await fetch(`${API_BASE}/api/contacts/admin/contacts/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });

    const data = await response.json();
    console.log(`✅ Contact #${id} Status Updated to "${status}":`, data);
    return data;
  } catch (error) {
    console.error(`❌ Update Status Failed:`, error);
  }
}

/**
 * TEST 7: Search Contacts (Admin)
 */
async function testSearchContacts(searchTerm = 'test') {
  try {
    const response = await fetch(`${API_BASE}/api/contacts/admin/search?q=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    console.log(`✅ Search Results for "${searchTerm}":`, data);
    return data;
  } catch (error) {
    console.error('❌ Search Failed:', error);
  }
}

/**
 * TEST 8: Get Contacts by Date Range (Admin)
 */
async function testGetByDateRange(startDate = '2024-01-01', endDate = '2024-12-31') {
  try {
    const response = await fetch(
      `${API_BASE}/api/contacts/admin/date-range?startDate=${startDate}&endDate=${endDate}`
    );
    const data = await response.json();
    console.log(`✅ Contacts from ${startDate} to ${endDate}:`, data);
    return data;
  } catch (error) {
    console.error('❌ Date Range Query Failed:', error);
  }
}

/**
 * TEST 9: Update Contact Information (Admin)
 */
async function testUpdateContact(id = 1, updates = {}) {
  try {
    const response = await fetch(`${API_BASE}/api/contacts/admin/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    const data = await response.json();
    console.log(`✅ Contact #${id} Updated:`, data);
    return data;
  } catch (error) {
    console.error('❌ Update Contact Failed:', error);
  }
}

/**
 * TEST 10: Delete Contact - Soft Delete (Admin)
 */
async function testDeleteContact(id = 1) {
  try {
    const response = await fetch(`${API_BASE}/api/contacts/admin/contacts/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    console.log(`✅ Contact #${id} Deleted (soft):`, data);
    return data;
  } catch (error) {
    console.error('❌ Delete Contact Failed:', error);
  }
}

/**
 * TEST 11: Get Contacts by Email (Admin)
 */
async function testGetContactsByEmail(email = 'test@example.com') {
  try {
    const response = await fetch(`${API_BASE}/api/contacts/admin/contacts/email/${encodeURIComponent(email)}`);
    const data = await response.json();
    console.log(`✅ Contacts from "${email}":`, data);
    return data;
  } catch (error) {
    console.error('❌ Get By Email Failed:', error);
  }
}

/**
 * RUN ALL TESTS
 */
async function runAllTests() {
  console.log('🚀 Starting API Tests...\n');

  console.log('1️⃣  Testing Health Check...');
  await testHealthCheck();
  console.log('\n');

  console.log('2️⃣  Testing Submit Contact...');
  const submitted = await testSubmitContact();
  console.log('\n');

  console.log('3️⃣  Testing Get All Contacts...');
  await testGetAllContacts();
  console.log('\n');

  console.log('4️⃣  Testing Get Statistics...');
  await testGetStats();
  console.log('\n');

  if (submitted?.data?.id) {
    const contactId = submitted.data.id;

    console.log(`5️⃣  Testing Get Contact #${contactId}...`);
    await testGetContactById(contactId);
    console.log('\n');

    console.log(`6️⃣  Testing Update Status for Contact #${contactId}...`);
    await testUpdateContactStatus(contactId, 'read');
    console.log('\n');

    console.log(`7️⃣  Testing Search...`);
    await testSearchContacts('test');
    console.log('\n');

    console.log(`8️⃣  Testing Get by Email...`);
    await testGetContactsByEmail('test@example.com');
    console.log('\n');
  }

  console.log('✨ All tests completed!');
}

/**
 * USAGE IN BROWSER CONSOLE:
 * 
 * Single Tests:
 * - testHealthCheck()
 * - testSubmitContact()
 * - testGetAllContacts()
 * - testGetStats()
 * - testGetContactById(1)
 * - testUpdateContactStatus(1, 'read')
 * - testSearchContacts('test')
 * - testGetByDateRange('2024-01-01', '2024-12-31')
 * - testUpdateContact(1, { status: 'responded' })
 * - testDeleteContact(1)
 * - testGetContactsByEmail('test@example.com')
 * 
 * Run All:
 * - runAllTests()
 */

console.log(`
╔════════════════════════════════════════════════╗
║  PAIC Backend API Testing Suite                ║
║                                                ║
║  Copy & paste any function below to test:      ║
║                                                ║
║  testHealthCheck()                             ║
║  testSubmitContact()                           ║
║  testGetAllContacts()                          ║
║  testGetStats()                                ║
║  testGetContactById(1)                         ║
║  testUpdateContactStatus(1, 'read')            ║
║  testSearchContacts('term')                    ║
║  testGetByDateRange('2024-01-01', '2024-12-31')
║  testUpdateContact(1, { status: 'read' })      ║
║  testDeleteContact(1)                          ║
║  testGetContactsByEmail('test@example.com')    ║
║                                                ║
║  Or run: runAllTests()                         ║
╚════════════════════════════════════════════════╝
`);
