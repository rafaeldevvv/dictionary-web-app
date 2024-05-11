import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Themes } from '@/ts/types';
import classNames from 'classnames';

export interface ColorThemeSwitcherProps {
    theme: Themes;
    onChange: (newTheme: Themes) => void;
}

export default function ColorThemeToggle({
    theme,
    onChange,
}: ColorThemeSwitcherProps) {
    const otherTheme = theme === 'dark' ? 'light' : 'dark';
    return (
        <button
            aria-label={`Change to ${otherTheme} theme`}
            className="flex items-center gap-x-4 rounded-xl px-2 py-1 hover:bg-contrast-lower"
            onClick={() => {
                onChange(otherTheme);
            }}
        >
            <Toggle theme={theme} />
            <span className="inline-block w-5">
                {theme === 'dark' ? (
                    <FontAwesomeIcon icon={faSun} size="xl" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} size="xl" />
                )}
            </span>
        </button>
    );
}

export function Toggle({ theme }: { theme: Themes }) {
    return (
        <span
            className={classNames(
                'flex h-4 w-8 rounded-xl bg-contrast-normal p-0.5',
                {
                    'justify-end': theme === 'dark',
                    'bg-primary': theme === 'dark',
                },
            )}
        >
            <span
                className={classNames('block aspect-square h-full rounded-xl', {
                    'bg-black': theme === 'dark',
                    'bg-white': theme === 'light',
                })}
            ></span>
        </span>
    );
}
