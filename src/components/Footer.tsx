import Image from 'next/image';
import ExternalLink from './ExternalLink';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mt-10 py-8 text-center">
            <p>
                Coded by{' '}
                <ExternalLink
                    href="https://rafaeldevvv.github.io/portfolio"
                    className="text-primary underline visited:text-primary-visited hover:no-underline focus-visible:no-underline"
                >
                    Rafael Maia
                </ExternalLink>
            </p>
            <p className="mt-3">
                Powered by the{' '}
                <ExternalLink
                    href="https://dictionaryapi.dev"
                    className="text-primary underline visited:text-primary-visited hover:no-underline focus-visible:no-underline"
                >
                    Free Dictionary API
                </ExternalLink>
            </p>
            <Link
                href="https://www.buymeacoffee.com/rafael.maia"
                aria-label="Buy me a coffee"
                className="mx-auto mt-6 block w-max max-w-full"
                target="_blank"
            >
                <Image
                    src="/buymeacoffee.png"
                    alt="Buy me a coffee"
                    width="200"
                    height="56"
                />
            </Link>
        </footer>
    );
}
