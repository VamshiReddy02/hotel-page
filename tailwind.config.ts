import type { Config } from "tailwindcss";

const config: Config = {
    content: [
       "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
       "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                "Manrope-Bold": ["Manrope-Bold", "sans-serif"],
                "Manrope-ExtraBold": ["Manrope-ExtraBold", "sans-serif"],
                "Manrope-ExtraLight": ["Manrope-ExtraLight", "sans-serif"],
                "Manrope-Light": ["Manrope-Light", "sans-serif"],
                "Manrope-Regular": ["Manrope-Regular", "sans-serif"],
                "Melodrama-Light": ["Melodrama-Light", "sans-serif"],
                "Melodrama-Bold": ["Melodrama-Bold", "sans-serif"],
                "Melodrama-Regular": ["Melodrama-Regular", "sans-serif"],
                "Melodrama-Semibold": ["Melodrama-Semibold", "sans-serif"],

            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(to bottom, #666 0%, #f0f0f0 20%, #999 100%)',
            },
        },
        
    },
    plugins: [],
};
export default config;