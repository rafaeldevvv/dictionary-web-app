'use client';

import Header from './Header';
import Footer from './Footer';
import WordForm from './WordForm';

import { useState, useMemo, useEffect } from 'react';
import { FontFamilies, FontFamiliesClassnames, Themes } from '@/ts/types';
import classNames from 'classnames';
import * as storage from '@/utils/LocalStorageManager';

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

    return (
        <div
            data-theme={theme}
            className={classNames(
                'bg-background text-contrast-high transition-colors',
                fontFamiliesClassnames[font],
            )}
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
