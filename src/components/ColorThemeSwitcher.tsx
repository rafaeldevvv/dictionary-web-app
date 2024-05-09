import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Themes } from '@/ts/types';

export default function ColorThemeSwitcher({theme}: {theme: Themes}) {
    return (
        <button
            aria-label="Switch to Dark Mode"
            className="flex items-center gap-x-4"
        >
            <span className="block h-4 w-8 rounded-xl bg-contrast-normal p-0.5">
                <span className="block aspect-square h-full rounded-xl bg-white"></span>
                <span></span>
            </span>
            <span>
                <FontAwesomeIcon icon={faMoon} size="xl" />
            </span>
        </button>
    );
}
