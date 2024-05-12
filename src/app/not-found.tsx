import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="mx-auto h-full max-w-sm text-center">
            <figure className='py-4'>
                <Image
                    alt="Book displaying 404 Not Found"
                    width="300"
                    height="300"
                    src="/not-found.svg"
                    className='mx-auto'
                />
            </figure>
            <h1 className="mb-4 text-4xl font-bold">No Definitions Found</h1>
            <p className="mb-2">
                Sorry pal, we couldn&apos;t find definitions for the word you
                were looking for.
            </p>
            <p>
                You can try the search again at a much later time or head to the
                web instead.
            </p>
        </div>
    );
}
