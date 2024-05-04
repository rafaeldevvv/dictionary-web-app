import type { Word } from '@/ts/types';
import getPhoneticInfo from '../utils/getPhoneticInfo';
import WordSpeaker from './WordSpeaker';

export default function WordHeader({ word }: { word: Word }) {
    const { phonetic, audio } = getPhoneticInfo(word);

    return (
        <header className="mb-6">
            <div>
                <h1 className="mb-1 text-5xl text-contrast-high">
                    {word.word}
                </h1>
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
