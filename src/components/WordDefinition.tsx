import type { Definition } from '@/ts/types';
import HomonymsList from './HomonymsList';

export default function WordDefinition({
    word,
    def,
}: {
    def: Definition;
    word: string;
}) {
    const { definition, example, synonyms, antonyms } = def;

    const synonymsAvailable = synonyms && synonyms.length !== 0,
        antonymsAvailable = antonyms && antonyms.length !== 0;
    return (
        <div>
            <p>{definition}</p>
            {example && <Example example={example} word={word} />}
            {synonymsAvailable && (
                <div className="mt-4">
                    <HomonymsList areSynonyms={true} words={synonyms} />
                </div>
            )}
            {antonymsAvailable && (
                <div className="mt-4">
                    <HomonymsList areSynonyms={false} words={antonyms} />
                </div>
            )}
        </div>
    );
}

export function Example({ word, example }: { word: string; example: string }) {
    const regexp = new RegExp(`\\w*${word}\\w*`, 'i');
    const execArr = regexp.exec(example);

    if (!execArr) {
        return <p className="text-contrast-normal">&quot;{example}&quot;</p>;
    }

    const match = execArr[0];
    const parts = example.split(match);
    return (
        <p className="italic text-contrast-normal">
            &quot;{parts[0]}
            <strong className="text-contrast-high">{match}</strong>
            {parts[1]}&quot;
        </p>
    );
}
