import Link from 'next/link';
import classNames from 'classnames';
import getWord from '@/utils/getWord';
import 'server-only';

export default async function HomonymsList({
    areSynonyms,
    words,
}: {
    areSynonyms: boolean;
    words: string[];
}) {
    const available = (
        await Promise.all(words.map((w) => getWord(w).catch(() => null)))
    ).map((w) => w !== null);

    const sharedClasses = classNames(
        'inline-block rounded-lg border border-solid border-contrast-normal px-2 py-0.5',
        {
            'text-synonym': areSynonyms,
            'text-antonym': !areSynonyms,
        },
    );

    return (
        <figure>
            <figcaption className="mb-1 text-contrast-normal">
                {areSynonyms ? 'Synonyms' : 'Antonyms'}
            </figcaption>
            <ul className="flex flex-wrap gap-2">
                {words.map((w, i) => (
                    <li key={`${w}-${i}`}>
                        {available[i] ? (
                            <Link
                                href={'/' + encodeURIComponent(w)}
                                className={classNames(
                                    sharedClasses,
                                    'underline underline-offset-2 transition-colors hover:text-background focus-visible:text-background',
                                    {
                                        'hover:border-synonym hover:bg-synonym focus-visible:border-synonym focus-visible:bg-synonym':
                                            areSynonyms,
                                        'hover:border-antonym hover:bg-antonym focus-visible:border-antonym focus-visible:bg-antonym':
                                            !areSynonyms,
                                    },
                                )}
                            >
                                {w}
                            </Link>
                        ) : (
                            <span className={sharedClasses}>{w}</span>
                        )}
                    </li>
                ))}
            </ul>
        </figure>
    );
}
