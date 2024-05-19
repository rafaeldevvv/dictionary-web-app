import { Word as IWord } from '@/ts/types';
import Word from '@/components/Word';
import { keywords } from '@/metadata/shared';
import getWord from '@/utils/getWord';
import { notFound } from 'next/navigation';
import WordImages from '@/components/WordImages';
import getImagesForWord from '@/utils/server/getImagesForWord';

interface WordParams {
    word: string;
}

export const revalidate = 3600 * 24 * 7;

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
    const [wordData, imagesData] = await Promise.all([
        getWord(word),
        getImagesForWord(word),
    ]);
    const images = imagesData.errors ? null : imagesData.response;
    if (imagesData.errors) console.error(imagesData.errors.join('\n'));

    return (
        <article>
            <h1 className="sr-only">
                All sets of definitions for the word {word}
            </h1>
            {images && images.results.length > 1 && (
                <div className="mb-6 mt-10">
                    <WordImages word={word} imagesData={images} />
                </div>
            )}
            <div className="space-y-20">
                {wordData.map((d, i) => {
                    return <Word word={d} number={i + 1} key={i} index={i} />;
                })}
            </div>
        </article>
    );
}
