const fs = require("fs");
const path = require("path");

const spacingValues = [0.125, 0.25, 0.375, 0.5, 0.75, 1, 1.5, 3, 4];

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const generateSpacingCSS = () => {
  const cssCode = [];

  const spacingProperties = ["mx", "my", "ml", "mr", "mt", "mb"];

  for (const breakpoint in breakpoints) {
    for (const property of spacingProperties) {
      for (const value of spacingValues) {
        let cssProperty;

        // Map property names to CSS properties
        switch (property) {
          case "mx":
            cssProperty = "margin-left";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${
                value * 1
              }rem; margin-right: ${value * 1}rem; } }`
            );
            break;
          case "my":
            cssProperty = "margin-top";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${
                value * 1
              }rem; margin-bottom: ${value * 1}rem; } }`
            );
            break;
          case "ml":
            cssProperty = "margin-left";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; } }`
            );
            break;
          case "mr":
            cssProperty = "margin-right";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; } }`
            );
            break;
          case "mt":
            cssProperty = "margin-top";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; } }`
            );
            break;
          case "mb":
            cssProperty = "margin-bottom";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; } }`
            );
            break;
          default:
            break;
        }
      }
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
const outputPath = path.join(outputDirectory, "margin-wbp.css");

// Write the generated CSS code to the specified file path
fs.writeFile(outputPath, cssCode, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log(`CSS code written to ${outputPath}`);
  }
});
