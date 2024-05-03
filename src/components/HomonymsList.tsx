export default function HomonymsList({
   areSynonyms,
   words,
}: {
   areSynonyms: boolean;
   words: string[];
}) {
   return (
      <figure>
         <figcaption className="mb-1 text-contrast-normal">
            {areSynonyms ? 'Synonyms' : 'Antonyms'}
         </figcaption>
         <ul className="flex flex-wrap gap-2">
            {words.map((w, i) => (
               <li key={`${w}-${i}`}>
                  <a
                     href={
                        'https://api.dictionaryapi.dev/api/v2/entries/en/' + w
                     }
                     className={`inline-block rounded-xl border border-solid border-contrast-normal px-2 py-0.5 transition-colors hover:text-background focus-visible:text-background ${
                        areSynonyms
                           ? 'text-synonym hover:border-synonym hover:bg-synonym focus-visible:border-synonym focus-visible:bg-synonym'
                           : 'text-antonym hover:border-antonym hover:bg-antonym focus-visible:border-antonym focus-visible:bg-antonym'
                     }`}
                  >
                     {w}
                  </a>
               </li>
            ))}
         </ul>
      </figure>
   );
}
