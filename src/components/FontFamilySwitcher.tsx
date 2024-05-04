import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function FontFamilySwitcher() {
    return (
        <div role="listbox" aria-label="Font Family">
            <button role="option" className="font-sans" aria-selected={true}>
                Sans
            </button>
            <button
                role="option"
                className="hidden font-serif"
                aria-selected={false}
            >
                Serif
            </button>
            <button
                role="option"
                className="hidden font-mono"
                aria-selected={false}
            >
                Mono
            </button>
            <button
                role="option"
                className="hidden font-cursive"
                aria-selected={false}
            >
                Cursive
            </button>
            <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-4 text-primary"
            />
        </div>
    );
}
