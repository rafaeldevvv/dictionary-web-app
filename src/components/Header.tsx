import DropdownMenu from './DropdownMenu';
import ColorThemeToggle from './ColorThemeToggle';
import { FontFamilies, FontFamiliesClassnames, Themes } from '@/ts/types';
import Image from 'next/image';

export interface HeaderProps {
    theme: Themes;
    font: FontFamilies;
    onChangeFont: (newFont: FontFamilies) => void;
    onChangeTheme: (newTheme: Themes) => void;
    fontFamiliesClassnames?: FontFamiliesClassnames;
}

export default function Header({
    theme,
    font,
    onChangeTheme,
    onChangeFont,
    fontFamiliesClassnames,
}: HeaderProps) {
    return (
        <header className="flex flex-wrap items-center justify-center gap-y-2 py-6 xs:justify-between">
            <figure>
                <Image
                    src="/logo.svg"
                    alt="Dictionary Web App Logo: an open pixel-art book"
                    width="45"
                    height="45"
                    role="img"
                />
            </figure>
            <div className="flex items-center gap-x-[min(1rem,1vw)]">
                <DropdownMenu
                    options={['cursive', 'mono', 'sans', 'serif'] as const}
                    current={font}
                    onChange={onChangeFont}
                    optionClassNames={fontFamiliesClassnames}
                    baseId="font-menu"
                    baseLabel="Font Family"
                />
                <span className="text-contrast-low">|</span>
                <ColorThemeToggle theme={theme} onChange={onChangeTheme} />
            </div>
        </header>
    );
}
