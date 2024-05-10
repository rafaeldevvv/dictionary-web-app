import DropdownMenu from './DropdownMenu';
import ColorThemeSwitcher from './ColorThemeSwitcher';
import { FontFamilies, FontFamiliesClassnames, Themes } from '@/ts/types';

export interface HeaderProps {
    theme: Themes;
    font: FontFamilies;
    onChangeFont: (newFont: FontFamilies) => void;
    onChangeTheme: (newTheme: Themes) => void;
    fontFamiliesClassnames: FontFamiliesClassnames;
}

export default function Header({
    theme,
    font,
    onChangeTheme,
    onChangeFont,
    fontFamiliesClassnames,
}: HeaderProps) {
    return (
        <header className="flex items-center justify-between py-6">
            <div>
                <span className="font-mono text-3xl">D</span>
            </div>
            <div className="flex items-center gap-x-4">
                <DropdownMenu
                    options={['cursive', 'mono', 'sans', 'serif'] as const}
                    current={font}
                    onChange={onChangeFont}
                    optionClassNames={fontFamiliesClassnames}
                    baseId='font-menu'
                    baseLabel='Font Family'
                />
                <span className="text-contrast-low">|</span>
                <ColorThemeSwitcher theme={theme} onChange={onChangeTheme} />
            </div>
        </header>
    );
}
