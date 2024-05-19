import Image from 'next/image';
import Link from 'next/link';

export default function WordJoke({ joke }: { joke: string }) {
    return (
        <figure className="my-6 flex flex-row-reverse items-center justify-end gap-x-4 rounded-lg bg-contrast-lower p-4">
            <blockquote cite="https://icanhazdadjoke.com">
                <p className="text-[clamp(.75rem,4.5vw,.85rem)]">{joke}</p>
            </blockquote>
            <figcaption className="w-[clamp(1.75rem,10vw,3.75rem)] shrink-0">
                <span className="sr-only">by </span>
                <Link href="https://icanhazdadjoke.com" target="_blank">
                    <span className="sr-only">icanhazdadjoke</span>
                    <Image
                        src="/icanhazdadjoke-logo.svg"
                        alt="icanhazdadjoke logo: a funny smiling yellow face"
                        width="60"
                        height="60"
                        role="img"
                    />
                </Link>
            </figcaption>
        </figure>
    );
}
