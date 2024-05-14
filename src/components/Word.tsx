import type { Word as IWord } from '@/ts/types';
import WordFooter from './WordFooter';
import WordHeader from './WordHeader';
import WordMeaning from './WordMeaning';
import WordOrigin from './WordOrigin';
import getJoke from '@/utils/getRandomJoke';
import WordJoke from './WordJoke';

export default async function Word({
    word,
    number,
    index
}: {
    word: IWord;
    number: number;
    /**
     * It is used to select a joke in the search results
     * returned by the canhazdadjoke api
     */
    index?: number;
}) {
    const headingId = `${word.word.replace(/\W/g, '-')}-definition-${number}`;
    let joke: string | null = null;
    if (index !== undefined) {
        joke = await getJoke(word.word, index);
    }

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
            {joke && <WordJoke joke={joke} />}
            <WordFooter word={word} />
        </section>
    );
}
