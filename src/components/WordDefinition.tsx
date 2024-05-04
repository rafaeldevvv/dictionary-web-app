import type { Definition } from '@/ts/types';
import HomonymsList from './HomonymsList';

export default function WordDefinition({ def }: { def: Definition }) {
    const { definition, example, synonyms, antonyms } = def;

    const synonymsAvailable = synonyms && synonyms.length !== 0,
        antonymsAvailable = antonyms && antonyms.length !== 0;
    return (
        <div>
            <p>{definition}</p>
            {example && (
                <p className="text-contrast-normal">&quot;{example}&quot;</p>
            )}
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
