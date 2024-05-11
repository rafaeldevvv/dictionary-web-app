import type { Word as IWord } from '@/ts/types';
import WordFooter from './WordFooter';
import WordHeader from './WordHeader';
import WordMeaning from './WordMeaning';
import WordOrigin from './WordOrigin';

export default function Word({
    word,
    number,
}: {
    word: IWord;
    number: number;
}) {
    const headingId = `${word.word}-definition-${number}`;

    return (
        <article>
            <WordHeader word={word} number={number} headingId={headingId} />
            <div className="space-y-14">
                {word.meanings.map((m) => (
                    <WordMeaning
                        meaning={m}
                        key={m.partOfSpeech}
                        headingId={headingId}
                    />
                ))}
            </div>
            {word.origin && <WordOrigin word={word} />}
            <WordFooter word={word} />
        </article>
    );
}
