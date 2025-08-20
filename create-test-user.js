// create-test-user.js - Simple script to create a test user
import bcrypt from 'bcrypt';

console.log('Creating test user credentials...');

// Create a hash for the password "test123"
const password = 'test123';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }
  
  console.log('\n=== TEST USER CREDENTIALS ===');
  console.log('Username: testuser');
  console.log('Password: test123');
  console.log('Password Hash:', hash);
  console.log('\nYou can use these credentials to log in to the application.');
  console.log('================================\n');
});