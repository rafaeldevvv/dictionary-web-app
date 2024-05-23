import { Meaning } from '@/ts/types';
import HomonymsList from './HomonymsList';
import WordDefinition from './WordDefinition';
import classNames from 'classnames';

export default function WordMeaning({
    word,
    meaning,
    headingId,
}: {
    meaning: Meaning;
    headingId: string;
    word: string;
}) {
    const id = headingId + '-' + meaning.partOfSpeech;
    const areSynonymsAvailable =
            meaning.synonyms && meaning.synonyms.length !== 0,
        areAntonymsAvailable =
            meaning.antonyms && meaning.antonyms.length !== 0;
    return (
        <section aria-labelledby={id}>
            <h3 id={id} className="mb-4 flex items-center gap-x-2">
                <a
                    href={`#${id}`}
                    className="text-lg font-bold uppercase hover:underline"
                >
                    {meaning.partOfSpeech}
                </a>
                <span className="block h-0.5 grow bg-contrast-lower"></span>
            </h3>
            <figure>
                <figcaption className="my-4 text-contrast-normal">
                    Meaning
                </figcaption>
                <ol className="list-decimal space-y-3 ps-8">
                    {meaning.definitions.map((d) => {
                        return (
                            <li key={d.definition}>
                                <WordDefinition word={word} def={d} />
                            </li>
                        );
                    })}
                </ol>
            </figure>
            {areSynonymsAvailable && (
                <div className="mt-8">
                    <HomonymsList
                        areSynonyms={true}
                        words={meaning.synonyms!}
                    />
                </div>
            )}
            {areAntonymsAvailable && (
                <div
                    className={classNames({
                        'mt-4': areSynonymsAvailable,
                        'mt-8': !areSynonymsAvailable,
                    })}
                >
                    <HomonymsList
                        areSynonyms={false}
                        words={meaning.antonyms!}
                    />
                </div>
            )}
        </section>
    );
}
