import type { Word } from '../types';

export default function getPhoneticInfo(word: Word): {
   phonetic?: string;
   audio?: string;
} {
   let phonetic: string;
   if (word.phonetic) {
      phonetic = word.phonetic;
   } else {
      for (const p of word.phonetics) {
         if (p.text) {
            phonetic = p.text;
            break;
         }
      }
   }

   let audio: string | undefined;
   for (const p of word.phonetics) {
      if (p.audio) {
         audio = p.audio;
         break;
      }
   }

   return {
      // @ts-ignore
      phonetic,
      audio,
   };
}
