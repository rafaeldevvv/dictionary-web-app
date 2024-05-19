import Image from 'next/image';
import Link from 'next/link';

export default function WordJoke({ joke }: { joke: string }) {
    return (
        <blockquote
            cite="https://icanhazdadjoke.com"
            className="my-6 flex flex-row-reverse items-center justify-end gap-x-4 rounded-lg bg-contrast-lower p-4"
        >
            <p className="text-[clamp(.75rem,4.5vw,.85rem)]">{joke}</p>
            <footer className="w-[clamp(1.75rem,10vw,3.75rem)] shrink-0">
                <Link href="https://icanhazdadjoke.com" target="_blank">
                    <Image
                        src="/icanhazdadjoke-logo.svg"
                        alt="icanhazdadjoke logo: a funny smiling yellow face"
                        width="60"
                        height="60"
                        role="img"
                    />
                    <cite className="sr-only">icanhazdadjoke</cite>
                </Link>
            </footer>
        </blockquote>
    );
}
