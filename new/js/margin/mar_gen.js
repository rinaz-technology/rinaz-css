const fs = require("fs");
const path = require("path");

const spacingValues = [0.125, 0.25, 0.375, 0.5, 0.75, 1, 1.5, 3, 4];

const generateSpacingCSS = () => {
  const cssCode = [];

  const spacingProperties = ["mx", "my", "ml", "mr", "mt", "mb"];

  for (const property of spacingProperties) {
    for (const value of spacingValues) {
      const className = `${property}-${value.toString().replace(".", "-")}`;

      const cssRule = `.${className} { ${property.replace("y", "")}: ${
        value * 1
      }rem; }`;

      cssCode.push(cssRule);
    }
  }

  return cssCode.join("\n");
};

const cssCode = generateSpacingCSS();

// Specify the directory where you want to generate the CSS file
const outputDirectory = path.join(__dirname, "..", "..", "css", "margin");

// Ensure the output directory exists, create it if necessary
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Specify the file path for the CSS file within the output directory
const outputPath = path.join(outputDirectory, "margin.css");

// Write the generated CSS code to the specified file path
fs.writeFile(outputPath, cssCode, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log(`CSS code written to ${outputPath}`);
  }
});
