import ExternalLink from './ExternalLink';

export default function Footer() {
   return (
      <footer className="mt-10 py-8 text-center">
         <p>
            Coded by{' '}
            <ExternalLink
               href="https://rafaeldevvv.github.io/portfolio"
               className="visited:text-primary-visited text-primary underline hover:no-underline focus-visible:no-underline"
            >
               Rafael Maia
            </ExternalLink>
         </p>
         <p className="mt-4">
            Powered by the{' '}
            <ExternalLink
               href="https://dictionaryapi.dev"
               className="visited:text-primary-visited text-primary underline hover:no-underline focus-visible:no-underline"
            >
               Free Dictionary API
            </ExternalLink>
         </p>
      </footer>
   );
}
