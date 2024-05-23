import type { Word } from '@/ts/types';
import getPhoneticInfo from '../utils/getPhoneticInfo';
import WordSpeaker from './WordSpeaker';

import { toWordsOrdinal } from 'number-to-words';

export default function WordHeader({
    word,
    number,
    headingId,
}: {
    word: Word;
    number: number;
    headingId: string;
}) {
    const phonetics = getPhoneticInfo(word);

    const isPhoneticInfoAvailable = phonetics.length !== 0;

    return (
        <header className="mb-8">
            <div>
                <div className="flex">
                    <h2
                        className="text-[clamp(2rem,10vw,3rem)] text-contrast-highest"
                        id={headingId}
                    >
                        <a href={'#' + headingId} className="hover:underline">
                            {word.word}{' '}
                            <span className="sr-only">
                                ({toWordsOrdinal(number)} Set of Definitions)
                            </span>
                        </a>
                    </h2>
                    <span
                        className="ml-1 align-super text-sm font-bold text-primary"
                        aria-hidden="true"
                    >
                        {number}
                    </span>{' '}
                </div>
                {isPhoneticInfoAvailable && (
                    <figure>
                        <figcaption className="sr-only">
                            Pronunciations
                        </figcaption>
                        <ul className="flex flex-wrap gap-x-3">
                            {phonetics.map((p, i) => {
                                const { audio, phonetic } = p;
                                return (
                                    <li key={i}>
                                        <p className="flex items-center gap-x-2 rounded border-l-2 border-contrast-lowerish bg-contrast-lower px-3 py-0.5">
                                            <span className="text-base italic text-primary sm:text-lg">
                                                {phonetic}
                                            </span>
                                            {audio && (
                                                <WordSpeaker audioUrl={audio} />
                                            )}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </figure>
                )}
            </div>
        </header>
    );
}
