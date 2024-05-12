import type { Config } from 'tailwindcss';

import { createThemes } from 'tw-colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['var(--ff-sans)', ...defaultTheme.fontFamily.sans],
            mono: ['var(--ff-mono)', ...defaultTheme.fontFamily.mono],
            serif: ['var(--ff-serif)', ...defaultTheme.fontFamily.serif],
            cursive: ['var(--ff-cursive)', 'cursive'],
        },
        container: {
            padding: '1.5rem',
            screens: {
                md: '40rem',
            },
            center: true,
        },
        screens: {
            xs: '320px',
            ...defaultTheme.screens,
        },
    },
    plugins: [
        createThemes(
            {
                light: {
                    background: 'hsl(0 100% 100%)',
                    primary: 'hsl(16, 80%, 50%)',
                    'primary-visited': 'hsl(16, 80%, 40%)',
                    'contrast-lowest': 'hsl(0 0% 98%)',
                    'contrast-lower': 'hsl(0 0% 96%)',
                    'contrast-low': 'hsl(0 0% 66%)',
                    'contrast-normal': 'hsl(0 0% 57%)',
                    'contrast-high': 'hsl(0 0% 0%)',
                    synonym: 'hsl(110, 80%, 26%)',
                    antonym: 'hsl(356, 100%, 37%)',
                },
                dark: {
                    background: 'hsl(0 0% 5%)',
                    primary: 'hsl(51, 100%, 50%)',
                    'primary-visited': 'hsl(51, 100%, 36%)',
                    'contrast-lowest': 'hsl(0 0% 6%)',
                    'contrast-lower': 'hsl(0 0% 12%)',
                    'contrast-low': 'hsl(0 0% 26%)',
                    'contrast-normal': 'hsl(0 0% 54%)',
                    'contrast-high': 'hsl(0 0% 100%)',
                    synonym: 'hsl(125, 100%, 65%)',
                    antonym: 'hsl(357, 100%, 69%)',
                },
            },
            {
                strict: true,
            },
        ),
    ],
};
export default config;
