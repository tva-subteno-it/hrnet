/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#586D04",
                secondary: "#28190E",
                tertiary: "#C5C5C5",
            },
            fontFamily: {
                playfair: ["Playfair Display", ...defaultTheme.fontFamily.serif],
                pt: ["PT Sans", ...defaultTheme.fontFamily.sans],
            }
        },
    },
    plugins: [],
    important: true,
};