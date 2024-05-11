'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

function getSearchedWord(word?: string | null) {
    return word ? decodeURIComponent(word) : '';
}

export default function WordForm() {
    const searchedWord = useSelectedLayoutSegment();
    const [word, setWord] = useState(getSearchedWord(searchedWord));
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        setWord(getSearchedWord(searchedWord));
    }, [searchedWord]);

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    linkRef.current!.click();
                }}
                role="search"
                className="relative mb-6 h-12"
            >
                <label htmlFor="word-input" className="block h-full">
                    <span className="sr-only">Type a Word</span>
                    <input
                        type="search"
                        value={word}
                        onChange={(e) => {
                            setWord(e.target.value);
                        }}
                        id="word-input"
                        placeholder="Search for any word"
                        className="block h-full w-full rounded-lg bg-contrast-lower pl-3 pr-14 text-contrast-high placeholder:text-contrast-normal"
                    />
                </label>
                <Link
                    ref={linkRef}
                    href={`/${word}`}
                    aria-label="Go to word definition"
                    className="group absolute bottom-0 right-0 top-0 flex items-center px-4"
                >
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="text-contrast-low transition-colors group-hover:text-contrast-high group-focus-visible:text-contrast-high"
                    />
                </Link>
            </form>
        </div>
    );
}
