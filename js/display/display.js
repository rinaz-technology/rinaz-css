const fs = require("fs");

// Read the existing CSS file
const css = fs.readFileSync("../../css/display/display.css", "utf-8");

// Define breakpoints
const breakpoints = {
  sm: 640, // Small screens
  md: 768, // Medium screens
  lg: 1024, // Large screens
  xl: 1280, // Extra-large screens
};

// CSS classes and their corresponding styles
const classesAndStyles = {
  ".block": "display: block;",
  ".inline-block": "display: inline-block;",
  ".inline": "display: inline;",
  ".flex": "display: flex;",
  ".inline-flex": "display: inline-flex;",
  ".table": "display: table;",
  ".inline-table": "display: inline-table;",
  ".table-caption": "display: table-caption;",
  ".table-cell": "display: table-cell;",
  ".table-column": "display: table-column;",
  ".table-column-group": "display: table-column-group;",
  ".table-footer-group": "display: table-footer-group;",
  ".table-header-group": "display: table-header-group;",
  ".table-row-group": "display: table-row-group;",
  ".table-row": "display: table-row;",
  ".flow-root": "display: flow-root;",
  ".grid": "display: grid;",
  ".inline-grid": "display: inline-grid;",
  ".contents": "display: contents;",
  ".list-item": "display: list-item;",
  ".hidden": "display: none;",
};

// Function to generate CSS media queries with prefixes
function generateMediaQueriesWithPrefixes(css, breakpoint) {
  const generatedCSS = Object.keys(classesAndStyles).map((classSelector) => {
    const style = classesAndStyles[classSelector];
    const prefixedClassSelector = `.${breakpoint}${classSelector}`;
    return `@media (min-width: ${breakpoints[breakpoint]}px) { ${prefixedClassSelector} { ${style} } }`;
  });

  return `${css}\n${generatedCSS.join("\n")}`;
}

// Generate CSS for each breakpoint
const generatedCSS = Object.keys(breakpoints).map((breakpoint) => {
  return generateMediaQueriesWithPrefixes(css, breakpoint);
});

// Combine all generated CSS into one string
const combinedCSS = generatedCSS.join("\n");

// Write the combined CSS to a single file
fs.writeFileSync("responsive-styles.css", combinedCSS, "utf-8");

console.log(
  "Combined responsive styles with breakpoints and prefixes generated."
);
