const fs = require("fs");
const path = require("path");

// Get today's date
const today = new Date().toISOString().split("T")[0];

// Logs folder path
const logsDir = path.join(__dirname, "logs");

// Create logs folder if it doesn't exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Log file path
const logFilePath = path.join(logsDir, `${today}.txt`);

// Append log message
fs.appendFileSync(logFilePath, "Server started successfully\n");

console.log("Log written successfully!");
