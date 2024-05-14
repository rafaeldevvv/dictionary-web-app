import { Word as IWord } from '@/ts/types';
import Word from '@/components/Word';
import { keywords } from '@/metadata/shared';
import getWord from '@/utils/getWord';
import { notFound } from 'next/navigation';

interface WordParams {
    word: string;
}

export async function generateMetadata({ params }: { params: WordParams }) {
    const word = params.word;
    let wordData: IWord[];

    try {
        wordData = await getWord(word);
    } catch (err) {
        notFound();
    }

    return {
        title: word,
        keywords: [...keywords, word],
        description: wordData[0].meanings[0].definitions[0].definition,
    };
}

export default async function WordPage({ params }: { params: WordParams }) {
    const { word } = params;
    const wordData = await getWord(word);
    return (
        <article>
            <h1 className="sr-only">
                All sets of definitions for the word {word}
            </h1>
            <div className="space-y-20">
                {wordData.map((d, i) => {
                    return <Word word={d} number={i + 1} key={i} />;
                })}
            </div>
        </article>
    );
}
