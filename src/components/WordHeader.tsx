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
    const { phonetic, audio } = getPhoneticInfo(word);

    return (
        <header className="mb-6">
            <div>
                <div className="flex">
                    <h2
                        className="mb-1 text-[clamp(2rem,10vw,3rem)] text-contrast-high"
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
                <p className="flex items-center gap-x-2">
                    <span className="text-xl italic text-primary">
                        {phonetic}
                    </span>
                    {audio && <WordSpeaker audioUrl={audio} />}
                </p>
            </div>
        </header>
    );
}
