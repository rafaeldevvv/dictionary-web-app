import ExternalLink from './ExternalLink';
import { Word } from '@/ts/types';

export default function WordFooter({ word }: { word: Word }) {
    return (
        <footer className="mt-8">
            {word.sourceUrls.length !== 0 && (
                <figure className="mb-3">
                    <figcaption className="mb-1 text-xl font-bold">
                        Sources
                    </figcaption>
                    <ul className="list-disc space-y-1 pl-8">
                        {word.sourceUrls.map((s) => (
                            <li key={s}>
                                <ExternalLink
                                    className="break-words text-primary underline visited:text-primary-visited hover:no-underline focus-visible:no-underline"
                                    href={s}
                                >
                                    {s}
                                </ExternalLink>
                            </li>
                        ))}
                    </ul>
                </figure>
            )}
            {word.license && (
                <p>
                    License:{' '}
                    <ExternalLink
                        href={word.license.url}
                        className="text-primary underline visited:text-primary-visited hover:no-underline focus-visible:no-underline"
                    >
                        {word.license.name}
                    </ExternalLink>
                </p>
            )}
        </footer>
    );
}
