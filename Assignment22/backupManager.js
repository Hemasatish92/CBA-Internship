const fs = require("fs");
const path = require("path");

// Original file path
const filePath = path.join(__dirname, "data.txt");

if (fs.existsSync(filePath)) {

    console.log("File exists. Creating backup...");

    // Parse file details
    const parsedPath = path.parse(filePath);

    // Create backup file path dynamically
    const backupFilePath = path.format({
        dir: parsedPath.dir,
        name: parsedPath.name + "_backup",
        ext: parsedPath.ext
    });

    // Copy file
    fs.copyFileSync(filePath, backupFilePath);

    console.log("Backup created:", backupFilePath);

    // Update original file
    fs.writeFileSync(filePath, "Updated file content");

    console.log("Original file updated.");

} else {

    console.log("File not found. Creating new file...");

    // Create file with default content
    fs.writeFileSync(filePath, "Default file content");

    console.log("New file created.");
}
