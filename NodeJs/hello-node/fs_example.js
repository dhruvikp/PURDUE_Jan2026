const fs = require('fs');


console.log("Start...");

// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File contents:", data);
// });



// const data = fs.readFileSync('input.txt', 'utf8');
// console.log("File contents:", data);


// fs.writeFile('output.txt', 'Hello, this is a test.', (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//         return;
//     }
//     console.log("File written successfully.");
// });

//fs.writeFileSync('output.txt', 'Hello, this is a test.');

// fs.appendFile('output.txt', '\nThis line is appended.', (err) => {
//     if (err) {
//         console.error("Error appending to file:", err);
//         return;
//     }
//     console.log("File appended successfully.");
// });

//fs.appendFileSync('output.txt', '\nThis line is appended.');


// readdir example

// fs.readdir('.', (err, files) => {
//     if (err) {
//         console.error("Error reading directory:", err);
//         return;
//     }
//     console.log("Files in current directory:", files);
// });

// fs.readdirSync('.').forEach(file => {
//     console.log(file);
// });

// create a directory

// fs.mkdir('logs', (err) => {
//     if (err) {
//         console.error("Error creating directory:", err);
//         return;
//     }
//     console.log("Directory created successfully.");
// });

// create nested directories

// fs.mkdir('logs/2024/June', { recursive: true }, (err) => {
//     if (err) {
//         console.error("Error creating nested directories:", err);
//         return;
//     }
//     console.log("Nested directories created successfully.");
// });

// check if file or directory exists

if(fs.existsSync('input.txt')) {
    console.log("input.txt exists.");
} else {
    console.log("input.txt does not exist.");
}

//using fs.stat to check if it's a file or directory

fs.stat('input.txt', (err, stats) => {
    if (err) {
        console.error("Error getting file stats:", err);
        return;
    }
    if (stats.isFile()) {
        console.log("input.txt is a file.");
    } else if (stats.isDirectory()) {
        console.log("input.txt is a directory.");
    } else {
        console.log("input.txt is neither a file nor a directory.");
    }
});


console.log("End...");