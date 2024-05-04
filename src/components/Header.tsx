import FontFamilySwitcher from './FontFamilySwitcher';
import ColorThemeSwitcher from './ColorThemeSwitcher';

export default function Header() {
    return (
        <header className="flex items-center justify-between py-6">
            <div>
                <span className="font-mono text-3xl">D</span>
            </div>
            <div className="flex items-center gap-x-4">
                <FontFamilySwitcher />
                <span className="text-contrast-low">|</span>
                <ColorThemeSwitcher />
            </div>
        </header>
    );
}
