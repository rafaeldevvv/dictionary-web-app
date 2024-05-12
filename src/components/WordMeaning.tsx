import { Meaning } from '@/ts/types';
import HomonymsList from './HomonymsList';
import WordDefinition from './WordDefinition';

export default function WordMeaning({ meaning, headingId }: { meaning: Meaning; headingId: string }) {
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
                <ul className="list-disc space-y-3 ps-8">
                    {meaning.definitions.map((d) => {
                        return (
                            <li key={d.definition}>
                                <WordDefinition def={d} />
                            </li>
                        );
                    })}
                </ul>
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
                <div className="mt-4">
                    <HomonymsList
                        areSynonyms={false}
                        words={meaning.antonyms!}
                    />
                </div>
            )}
        </section>
    );
}
