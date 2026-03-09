const fs = require("fs");
const path = require("path");

// Simulated user ID
const userId = "12345";

// Create dynamic upload directory
const uploadDir = path.join(__dirname, "uploads", userId);


// Create directory recursively
fs.mkdirSync(uploadDir, { recursive: true });

// File path
const filePath = path.join(uploadDir, "profile.txt");

// Write dummy file
fs.writeFileSync(filePath, "Dummy profile file");

// Resolve absolute path
const absolutePath = path.resolve(filePath);

console.log("File saved at:", absolutePath);
