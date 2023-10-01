const fs = require("fs");
const path = require("path");

const spacingValues = [0.125, 0.25, 0.375, 0.5, 0.75, 1, 1.5, 3, 4];

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const generatePaddingCSS = () => {
  const cssCode = [];

  const paddingProperties = ["px", "py", "pl", "pr", "pt", "pb"];

  // Generate padding classes without breakpoints
  for (const property of paddingProperties) {
    for (const value of spacingValues) {
      let cssProperty;

      switch (property) {
        case "px":
          cssProperty = "padding-left";
          cssCode.push(
            `.${property}-${value
              .toString()
              .replace(".", "-")} { ${cssProperty}: ${
              value * 1
            }rem; padding-right: ${value * 1}rem; }`
          );
          break;
        case "py":
          cssProperty = "padding-top";
          cssCode.push(
            `.${property}-${value
              .toString()
              .replace(".", "-")} { ${cssProperty}: ${
              value * 1
            }rem; padding-bottom: ${value * 1}rem; }`
          );
          break;
        case "pl":
          cssProperty = "padding-left";
          cssCode.push(
            `.${property}-${value
              .toString()
              .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; }`
          );
          break;
        case "pr":
          cssProperty = "padding-right";
          cssCode.push(
            `.${property}-${value
              .toString()
              .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; }`
          );
          break;
        case "pt":
          cssProperty = "padding-top";
          cssCode.push(
            `.${property}-${value
              .toString()
              .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; }`
          );
          break;
        case "pb":
          cssProperty = "padding-bottom";
          cssCode.push(
            `.${property}-${value
              .toString()
              .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; }`
          );
          break;
        default:
          break;
      }
    }
  }

  // Generate padding classes with breakpoints
  for (const breakpoint in breakpoints) {
    for (const property of paddingProperties) {
      for (const value of spacingValues) {
        let cssProperty;

        switch (property) {
          case "px":
            cssProperty = "padding-left";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${
                value * 1
              }rem; padding-right: ${value * 1}rem; } }`
            );
            break;
          case "py":
            cssProperty = "padding-top";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${
                value * 1
              }rem; padding-bottom: ${value * 1}rem; } }`
            );
            break;
          case "pl":
            cssProperty = "padding-left";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; } }`
            );
            break;
          case "pr":
            cssProperty = "padding-right";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; } }`
            );
            break;
          case "pt":
            cssProperty = "padding-top";
            cssCode.push(
              `@media (min-width: ${
                breakpoints[breakpoint]
              }) { .${breakpoint}:${property}-${value
                .toString()
                .replace(".", "-")} { ${cssProperty}: ${value * 1}rem; } }`
            );
            break;
          case "pb":
            cssProperty = "padding-bottom";
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

const cssCode = generatePaddingCSS();

// Specify the directory where you want to generate the CSS file for padding
const outputDirectory = path.join(__dirname, "..", "..", "css", "padding");

// Ensure the output directory exists, create it if necessary
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Specify the file path for the CSS file within the output directory
const outputPath = path.join(outputDirectory, "p.css");

// Write the generated CSS code to the specified file path
fs.writeFile(outputPath, cssCode, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log(`CSS code written to ${outputPath}`);
  }
});
