/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
        borderRadius: {
            "md": "var(--mantine-radius-md)",
            "sm": "var(--mantine-radius-sm)",
            "full": "100%"
        }
    },
    plugins: [],
}