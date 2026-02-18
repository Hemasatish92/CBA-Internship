const fs = require("fs");
const path = require("path");

// Temp folder path
const tempDir = path.join(__dirname, "temp");

// Check if temp folder exists
if (!fs.existsSync(tempDir)) {
    console.log("Temp folder not found.");
    return;
}

// Read files inside temp folder
const files = fs.readdirSync(tempDir);

files.forEach(file => {

    const filePath = path.join(tempDir, file);

    // Extract file extension
    const ext = path.extname(file).toLowerCase();

    // Delete only .tmp files
    if (ext === ".tmp") {
        fs.unlinkSync(filePath);
        console.log("Deleted:", file);
    }

});

console.log("Cleanup completed.");
