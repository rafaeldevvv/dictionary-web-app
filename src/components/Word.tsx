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
    const headingId = `${word.word.replace(/\W/g, '-')}-definition-${number}`;

    return (
        <section aria-labelledby={headingId}>
            <WordHeader word={word} number={number} headingId={headingId} />
            <div className="space-y-14">
                {word.meanings.map((m) => (
                    <WordMeaning
                        word={word.word}
                        meaning={m}
                        key={m.partOfSpeech}
                        headingId={headingId}
                    />
                ))}
            </div>
            {word.origin && <WordOrigin word={word} baseId={headingId} />}
            <WordFooter word={word} />
        </section>
    );
}
