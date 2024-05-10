import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Themes } from '@/ts/types';
import classNames from 'classnames';

export interface ColorThemeSwitcherProps {
    theme: Themes;
    onChange: (newTheme: Themes) => void;
}

export default function ColorThemeSwitcher({
    theme,
    onChange,
}: ColorThemeSwitcherProps) {
    return (
        <button
            aria-label="Switch to Dark Mode"
            className="flex items-center gap-x-4 rounded-xl px-2 py-1 hover:bg-contrast-lower"
            onClick={() => {
                onChange(theme === 'light' ? 'dark' : 'light');
            }}
        >
            <span
                className={classNames(
                    'flex h-4 w-8 rounded-xl bg-contrast-normal p-0.5',
                    {
                        'justify-end': theme === 'dark',
                        'bg-primary': theme === 'dark',
                    },
                )}
            >
                <span className={classNames("block aspect-square h-full rounded-xl bg-white")}></span>
                <span></span>
            </span>
            <span className='inline-block w-5'>
                {theme === 'dark' ? (
                    <FontAwesomeIcon icon={faSun} size="xl" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} size="xl" />
                )}
            </span>
        </button>
    );
}
