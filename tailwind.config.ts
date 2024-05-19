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
                    background: 'hsl(0 0% 98%)',
                    primary: 'hsl(208, 100%, 32%)',
                    'primary-visited': 'hsl(208, 100%, 32%)',
                    'contrast-lowest': 'hsl(0 0% 100%)',
                    'contrast-lower': 'hsl(0 0% 96%)',
                    'contrast-lowerish': 'hsl(0 0% 81%)',
                    'contrast-low': 'hsl(0 0% 66%)',
                    'contrast-normal': 'hsl(0 0% 57%)',
                    'contrast-high': 'hsl(0 0% 30%)',
                    'contrast-highest': 'hsl(0 0% 0%)',
                    synonym: 'hsl(110, 80%, 26%)',
                    antonym: 'hsl(356, 100%, 37%)',
                },
                dark: {
                    background: 'hsl(0 0% 5%)',
                    primary: 'hsl(208, 100%, 57%)',
                    'primary-visited': 'hsl(208, 100%, 57%)',
                    'contrast-lowest': 'hsl(0 0% 6%)',
                    'contrast-lower': 'hsl(0 0% 12%)',
                    'contrast-lowerish': 'hsl(0 0% 19%)',
                    'contrast-low': 'hsl(0 0% 26%)',
                    'contrast-normal': 'hsl(0 0% 54%)',
                    'contrast-high': 'hsl(0 0% 80%)',
                    'contrast-highest': 'hsl(0 0% 100%)',
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
