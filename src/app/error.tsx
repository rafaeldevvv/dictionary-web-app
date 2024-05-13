'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="mx-auto h-full max-w-sm text-center">
            <figure className="bg-[radial-gradient(circle_closest-side_at_center,hsla(0_0%_100%_/_.4),theme(colors.background))] py-4">
                <Image
                    alt="Fainted book"
                    width="200"
                    height="200"
                    src="/error.png"
                    className="mx-auto max-w-full"
                />
            </figure>
            <h1 className="mb-4 text-[clamp(1.5rem,6vw,2.25rem)] font-bold">
                Unexpected Error
            </h1>
            <p className="mb-4">Sorry pal, something is not right here.</p>
            <div className="flex flex-wrap justify-center gap-3">
                <button
                    type="button"
                    onClick={reset}
                    className="hover:text-backgrou''nd border-2 border-solid border-primary px-3 py-2 font-bold uppercase text-primary outline-offset-4 transition-colors hover:bg-primary focus-visible:bg-primary focus-visible:text-background focus-visible:outline-primary"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="border-2 border-solid border-primary px-3 py-2 font-bold uppercase text-primary outline-offset-4 transition-colors hover:bg-primary hover:text-background focus-visible:bg-primary focus-visible:text-background focus-visible:outline-primary"
                >
                    Take me home
                </Link>
            </div>
        </div>
    );
}
