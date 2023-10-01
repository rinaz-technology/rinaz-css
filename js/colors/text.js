const fs = require("fs");
const path = require("path");

const colorShades = {
  gray: {
    100: "#F7FAFC",
    200: "#EDF2F7",
    300: "#E2E8F0",
    400: "#CBD5E0",
    500: "#A0AEC0",
    600: "#718096",
    700: "#4A5568",
    800: "#2D3748",
    900: "#1A202C",
  },
  zinc: {
    100: "#F2F5F7",
    200: "#E6EBEF",
    300: "#D3DCE6",
    400: "#B5C0D0",
    500: "#94A3B8",
    600: "#778CA3",
    700: "#566B7A",
    800: "#3E4C59",
    900: "#273240",
  },
  neutral: {
    100: "#F4F4F4",
    200: "#E0E0E0",
    300: "#C6C6C6",
    400: "#A8A8A8",
    500: "#888888",
    600: "#666666",
    700: "#444444",
    800: "#2A2A2A",
    900: "#1A1A1A",
  },
  store: {
    100: "#FAFAFA",
    200: "#F5F5F5",
    300: "#E5E5E5",
    400: "#D4D4D4",
    500: "#A3A3A3",
    600: "#787878",
    700: "#525252",
    800: "#333333",
    900: "#202020",
  },
  red: {
    100: "#FFF5F5",
    200: "#FED7D7",
    300: "#FEB2B2",
    400: "#FC8181",
    500: "#F56565",
    600: "#E53E3E",
    700: "#C53030",
    800: "#9B2C2C",
    900: "#742A2A",
  },
  orange: {
    100: "#FFFAF0",
    200: "#FEEBC8",
    300: "#FBD38D",
    400: "#F6AD55",
    500: "#ED8936",
    600: "#DD6B20",
    700: "#C05621",
    800: "#9C4221",
    900: "#7B341E",
  },
  amber: {
    100: "#FFFBDD",
    200: "#FFEFC6",
    300: "#FFE59E",
    400: "#FFC94A",
    500: "#FFAB05",
    600: "#FF8C00",
    700: "#DB7000",
    800: "#B45900",
    900: "#92400E",
  },
  yellow: {
    100: "#FFFFF0",
    200: "#FEFCBF",
    300: "#FAF089",
    400: "#F6E05E",
    500: "#ECC94B",
    600: "#D69E2E",
    700: "#B7791F",
    800: "#975A16",
    900: "#744210",
  },
  lime: {
    100: "#F0FFF4",
    200: "#C6F6D5",
    300: "#9AE6B4",
    400: "#68D391",
    500: "#48BB78",
    600: "#38A169",
    700: "#2F855A",
    800: "#276749",
    900: "#22543D",
  },
  green: {
    100: "#F0FFF4",
    200: "#C6F6D5",
    300: "#9AE6B4",
    400: "#68D391",
    500: "#48BB78",
    600: "#38A169",
    700: "#2F855A",
    800: "#276749",
    900: "#22543D",
  },
  emerald: {
    100: "#ECFDF5",
    200: "#D1FAE5",
    300: "#A7F3D0",
    400: "#6EE7B7",
    500: "#34D399",
    600: "#10B981",
    700: "#059669",
    800: "#047857",
    900: "#065F46",
  },
  teal: {
    100: "#F0FDFA",
    200: "#C6F7E2",
    300: "#8EEDC7",
    400: "#65D6AD",
    500: "#3EBD93",
    600: "#27AB83",
    700: "#199473",
    800: "#147D64",
    900: "#0C6B58",
  },
  cyan: {
    100: "#EDFDFD",
    200: "#C4F1F9",
    300: "#9DECF9",
    400: "#76E4F7",
    500: "#0BC5EA",
    600: "#00A3D8",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666",
  },
  sky: {
    100: "#F0F9FF",
    200: "#C2E0F2",
    300: "#A0D8F1",
    400: "#83C5F7",
    500: "#3C9BB3",
    600: "#3182CE",
    700: "#2B6CB0",
    800: "#2C5282",
    900: "#2A4365",
  },
  blue: {
    100: "#EBF8FF",
    200: "#BEE3F8",
    300: "#90CDF4",
    400: "#63B3ED",
    500: "#4299E1",
    600: "#3182CE",
    700: "#2B6CB0",
    800: "#2C5282",
    900: "#2A4365",
  },
  indigo: {
    100: "#EBF4FF",
    200: "#C3DAFE",
    300: "#A3BFFA",
    400: "#7F9CF5",
    500: "#667EEA",
    600: "#5A67D8",
    700: "#4C51BF",
    800: "#434190",
    900: "#3C366B",
  },
  violet: {
    100: "#F5F3FF",
    200: "#DDD6FE",
    300: "#C4B5FD",
    400: "#A78BFA",
    500: "#8B5CF6",
    600: "#7C3AED",
    700: "#6D28D9",
    800: "#5B21B6",
    900: "#4C1D95",
  },
  purple: {
    100: "#FAF5FF",
    200: "#E9D8FD",
    300: "#D6BCFA",
    400: "#B794F4",
    500: "#9F7AEA",
    600: "#805AD5",
    700: "#6B46C1",
    800: "#553C9A",
    900: "#44337A",
  },
  fuchsia: {
    100: "#FDF4FF",
    200: "#FBCFE8",
    300: "#F9A8D4",
    400: "#F472B6",
    500: "#EC4899",
    600: "#DB2777",
    700: "#BE185D",
    800: "#9D174D",
    900: "#831843",
  },
  pink: {
    100: "#FFF5F7",
    200: "#FED7E2",
    300: "#FBB6CE",
    400: "#F687B3",
    500: "#ED64A6",
    600: "#D53F8C",
    700: "#B83280",
    800: "#97266D",
    900: "#702459",
  },
  rose: {
    100: "#FFF1F2",
    200: "#FEE2E2",
    300: "#FECACA",
    400: "#FCA5A5",
    500: "#F87171",
    600: "#EF4444",
    700: "#DC2626",
    800: "#B91C1C",
    900: "#991B1B",
  },
};

const generateBackgroundShadesCSS = () => {
  const cssCode = [];

  for (const color in colorShades) {
    for (const shade in colorShades[color]) {
      const className = `text-${color}-${shade}`;
      const hexColor = colorShades[color][shade];
      cssCode.push(`.${className} { color: ${hexColor}; }`);
    }
  }

  return cssCode.join("\n");
};

const cssCode = generateBackgroundShadesCSS();

// Specify the directory where you want to generate the CSS file for background shades
const outputDirectory = path.join(__dirname, "..", "..", "css", "color");

// Ensure the output directory exists, create it if necessary
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Specify the file path for the CSS file within the output directory
const outputPath = path.join(outputDirectory, "text.css");

// Write the generated CSS code to the specified file path
fs.writeFile(outputPath, cssCode, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log(`CSS code for background shades written to css file`);
  }
});
