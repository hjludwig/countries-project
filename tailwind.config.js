module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Nunito Sans", "sans-serif"],
        },
        colors: {
            darkblue: "hsl(209, 23%, 22%)",
            darkbluebg: "hsl(207, 26%, 17%)",
            darkbluetext: "hsl(200, 15%, 8%)",
            darkgray: "hsl(0, 0%, 52%)",
            lightgray: "hsl(0, 0%, 98%)",
            white: "hsl(0, 0%, 100%)",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
