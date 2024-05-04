import ExternalLink from './ExternalLink';

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
         <p className="mt-4">
            Powered by the{' '}
            <ExternalLink
               href="https://dictionaryapi.dev"
               className="text-primary underline visited:text-primary-visited hover:no-underline focus-visible:no-underline"
            >
               Free Dictionary API
            </ExternalLink>
         </p>
      </footer>
   );
}
