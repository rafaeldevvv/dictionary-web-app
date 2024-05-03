import type { Word } from '../types';

export default function WordOrigin({ word }: { word: Word }) {
   return (
      <section aria-labelledby="origin-heading" className="my-6">
         <h2 id="origin-heading" className="mb-4 flex items-center gap-x-2">
            <a
               href="#origin-heading"
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
