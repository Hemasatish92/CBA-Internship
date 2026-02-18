const path = require("path");

// Simulated uploaded filename
const filename = "resume.pdf";

// Extract extension
const ext = path.extname(filename);

// Allowed file types
const allowedExtensions = [".jpg", ".png", ".pdf"];

// Validate file
if (allowedExtensions.includes(ext)) {
    console.log("File Accepted");
} else {
    console.log("Invalid File Type");
}
