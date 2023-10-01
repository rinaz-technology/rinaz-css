const fs = require("fs");
const path = require("path");

const spacingValues = [0.125, 0.25, 0.375, 0.5, 0.75, 1, 1.5, 3, 4];

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const generateWidthCSS = () => {
  const cssCode = [];

  const widthProperties = ["w"];

  for (const breakpoint in breakpoints) {
    for (const property of widthProperties) {
      for (const value of spacingValues) {
        const className = `${breakpoint}:${property}-${value
          .toString()
          .replace(".", "-")}`;

        const cssProperty = "width";

        cssCode.push(
          `@media (min-width: ${
            breakpoints[breakpoint]
          }) { .${className} { ${cssProperty}: ${value * 1}rem; } }`
        );
      }
    }
  }

  return cssCode.join("\n");
};

const cssCode = generateWidthCSS();

// Specify the directory where you want to generate the CSS file
const outputDirectory = path.join(__dirname, "..", "..", "css", "width");

// Ensure the output directory exists, create it if necessary
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Specify the file path for the CSS file within the output directory
const outputPath = path.join(outputDirectory, "width-wbp.css");

// Write the generated CSS code to the specified file path
fs.writeFile(outputPath, cssCode, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log(`CSS code written to ${outputPath}`);
  }
});
