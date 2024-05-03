import type { Word as IWord } from '../types';
import WordFooter from './WordFooter';
import WordHeader from './WordHeader';
import WordMeaning from './WordMeaning';
import WordOrigin from './WordOrigin';

export default function Word({ word }: { word: IWord }) {
   return (
      <article>
         <WordHeader word={word} />
         <div className="space-y-14">
            {word.meanings.map((m) => (
               <WordMeaning meaning={m} key={m.partOfSpeech} />
            ))}
         </div>
         {word.origin && <WordOrigin word={word} />}
         <WordFooter word={word} />
      </article>
   );
}
