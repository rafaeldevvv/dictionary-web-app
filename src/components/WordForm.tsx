import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function WordForm({
    word,
    onSubmit,
}: {
    word: string;
    onSubmit: () => void;
}) {
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
                role="search"
                className="relative mb-6 h-12"
            >
                <label htmlFor="word-input" className="block h-full">
                    <span className="sr-only">Type a Word</span>
                    <input
                        type="text"
                        value={word}
                        id="word-input"
                        placeholder="Search for any word"
                        className="block h-full w-full rounded-lg bg-contrast-lower pl-3 pr-10 text-contrast-high placeholder:text-contrast-normal"
                    />
                </label>
                <button
                    aria-label="Search word"
                    className="group absolute bottom-0 right-0 top-0 block px-4"
                >
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="text-contrast-low transition-colors group-hover:text-contrast-high group-focus-visible:text-contrast-high"
                    />
                </button>
            </form>
        </div>
    );
}
