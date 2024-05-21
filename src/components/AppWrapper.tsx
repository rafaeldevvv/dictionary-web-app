'use client';

import Header from './Header';
import Footer from './Footer';
import WordForm from './WordForm';

import { useState, useMemo, useEffect } from 'react';
import { FontFamilies, FontFamiliesClassnames, Themes } from '@/ts/types';
import * as storage from '@/utils/localStorageManager';

import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function AppWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<Themes>('light');
    const [font, setFont] = useState<FontFamilies>('sans');
    const fontFamiliesClassnames = useMemo(() => {
        return {
            sans: 'font-sans',
            serif: 'font-serif',
            mono: 'font-mono',
            cursive: 'font-cursive',
        } as FontFamiliesClassnames;
    }, []);

    useEffect(() => {
        const savedOptions = storage.getWholeData();
        setTheme(savedOptions.theme);
        setFont(savedOptions.font);
    }, []);

    /* synchronizes  */
    useEffect(() => {
        const body = document.body;
        for (const fontClass in fontFamiliesClassnames) {
            body.classList.remove(
                fontFamiliesClassnames[fontClass as FontFamilies],
            );
        }
        body.classList.add(fontFamiliesClassnames[font]);
    }, [font, fontFamiliesClassnames]);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div
            className="text-sm text-contrast-highest transition-colors md:text-base"
            id="root"
        >
            <div className="container grid min-h-screen grid-rows-[min-content_1fr_min-content]">
                <Header
                    font={font}
                    theme={theme}
                    onChangeFont={(newFont) => {
                        setFont(newFont);
                        storage.save('font', newFont);
                    }}
                    onChangeTheme={(newTheme) => {
                        setTheme(newTheme);
                        storage.save('theme', newTheme);
                    }}
                    fontFamiliesClassnames={fontFamiliesClassnames}
                />
                <div>
                    <WordForm />
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </div>
    );
}
