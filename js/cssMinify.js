const fs = require("fs");
const path = require("path");
const CleanCSS = require("clean-css");

// Specify the folder containing your CSS files
const cssFolder = "../css";

// Function to recursively read CSS files
function readCSSFiles(dir, fileArray) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      readCSSFiles(filePath, fileArray);
    } else if (file.endsWith(".css")) {
      const cssCode = fs.readFileSync(filePath, "utf-8");
      fileArray.push(cssCode);
    }
  });
}

// Array to store the CSS code from individual files
const cssCodeArray = [];

// Read all CSS files in the folder (including subfolders)
readCSSFiles(cssFolder, cssCodeArray);

// Concatenate all CSS code into a single string
const concatenatedCSS = cssCodeArray.join("\n");

// Minify the CSS code using clean-css
const minifiedCSS = new CleanCSS().minify(concatenatedCSS).styles;

// Write the minified CSS to a file
fs.writeFileSync("../cssMinified/minified.css", minifiedCSS, "utf-8");

console.log("CSS minified and saved to minified.css");
