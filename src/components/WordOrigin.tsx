import type { Word } from '@/ts/types';

export default function WordOrigin({
    word,
    baseId,
}: {
    word: Word;
    baseId: string;
}) {
    const id = baseId + '-origin';
    return (
        <section aria-labelledby={id} className="my-6">
            <h2 id={id} className="mb-4 flex items-center gap-x-2">
                <a
                    href={'#' + id}
                    className="text-lg font-bold uppercase hover:underline"
                >
                    Origin
                </a>
                <span className="block h-0.5 grow bg-contrast-lower"></span>
            </h2>
            <p>{word.origin}</p>
        </section>
    );
}
