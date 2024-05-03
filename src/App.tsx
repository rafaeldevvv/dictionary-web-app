import Header from './components/Header';
import './output.css';
import WordForm from './components/WordForm';
import Word from './components/Word';
import type { Word as IWord } from './types';
import Footer from './components/Footer';

const testWords = [
   {
      word: 'good',
      phonetic: '/ɡʊ(d)/',
      phonetics: [
         {
            text: '/ɡʊ(d)/',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-uk.mp3',
            sourceUrl:
               'https://commons.wikimedia.org/w/index.php?curid=9021875',
            license: {
               name: 'BY 3.0 US',
               url: 'https://creativecommons.org/licenses/by/3.0/us',
            },
         },
         {
            text: '[ɡɪ̈d]',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-us.mp3',
            sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=380162',
         },
      ],
      meanings: [
         {
            partOfSpeech: 'adjective',
            definitions: [
               {
                  definition: '(of people)',
                  synonyms: [],
                  antonyms: [],
               },
               {
                  definition: '(of capabilities)',
                  synonyms: [],
                  antonyms: [],
               },
               {
                  definition: '(properties and qualities)',
                  synonyms: [],
                  antonyms: [],
               },
               {
                  definition: '(when with and) Very, extremely. See good and.',
                  synonyms: [],
                  antonyms: [],
                  example: 'The soup is good and hot.',
               },
               {
                  definition: 'Holy (especially when capitalized) .',
                  synonyms: [],
                  antonyms: [],
                  example: 'Good Friday',
               },
               {
                  definition: '(of quantities)',
                  synonyms: [],
                  antonyms: [],
               },
            ],
            synonyms: [
               'accomplished',
               'all right',
               'decent',
               'not bad',
               'satisfactory',
               'well',
            ],
            antonyms: ['bad', 'evil', 'bad', 'poor'],
         },
         {
            partOfSpeech: 'interjection',
            definitions: [
               {
                  definition:
                     'That is good; an elliptical exclamation of satisfaction or commendation.',
                  synonyms: [],
                  antonyms: [],
                  example: 'Good! I can leave now.',
               },
            ],
            synonyms: [],
            antonyms: [],
         },
      ],
      license: {
         name: 'CC BY-SA 3.0',
         url: 'https://creativecommons.org/licenses/by-sa/3.0',
      },
      sourceUrls: ['https://en.wiktionary.org/wiki/good'],
   },
   {
      word: 'good',
      phonetic: '/ɡʊ(d)/',
      phonetics: [
         {
            text: '/ɡʊ(d)/',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-uk.mp3',
            sourceUrl:
               'https://commons.wikimedia.org/w/index.php?curid=9021875',
            license: {
               name: 'BY 3.0 US',
               url: 'https://creativecommons.org/licenses/by/3.0/us',
            },
         },
         {
            text: '[ɡɪ̈d]',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-us.mp3',
            sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=380162',
         },
      ],
      meanings: [
         {
            partOfSpeech: 'adverb',
            definitions: [
               {
                  definition: 'Well; satisfactorily or thoroughly.',
                  synonyms: [],
                  antonyms: [],
                  example: 'The boy done good. (did well)',
               },
            ],
            synonyms: [],
            antonyms: [],
         },
      ],
      license: {
         name: 'CC BY-SA 3.0',
         url: 'https://creativecommons.org/licenses/by-sa/3.0',
      },
      sourceUrls: ['https://en.wiktionary.org/wiki/good'],
   },
   {
      word: 'good',
      phonetic: '/ɡʊ(d)/',
      phonetics: [
         {
            text: '/ɡʊ(d)/',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-uk.mp3',
            sourceUrl:
               'https://commons.wikimedia.org/w/index.php?curid=9021875',
            license: {
               name: 'BY 3.0 US',
               url: 'https://creativecommons.org/licenses/by/3.0/us',
            },
         },
         {
            text: '[ɡɪ̈d]',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-us.mp3',
            sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=380162',
         },
      ],
      meanings: [
         {
            partOfSpeech: 'noun',
            definitions: [
               {
                  definition:
                     'The forces or behaviours that are the enemy of evil. Usually consists of helping others and general benevolence.',
                  synonyms: [],
                  antonyms: ['bad', 'evil'],
               },
               {
                  definition:
                     'A result that is positive in the view of the speaker.',
                  synonyms: [],
                  antonyms: ['bad'],
               },
               {
                  definition:
                     'The abstract instantiation of goodness; that which possesses desirable qualities, promotes success, welfare, or happiness, is serviceable, fit, excellent, kind, benevolent, etc.',
                  synonyms: [],
                  antonyms: [],
                  example: 'The best is the enemy of the good.',
               },
               {
                  definition: '(usually in the plural) An item of merchandise.',
                  synonyms: [],
                  antonyms: [],
               },
            ],
            synonyms: [],
            antonyms: ['bad', 'bad', 'evil'],
         },
      ],
      license: {
         name: 'CC BY-SA 3.0',
         url: 'https://creativecommons.org/licenses/by-sa/3.0',
      },
      sourceUrls: ['https://en.wiktionary.org/wiki/good'],
   },
   {
      word: 'good',
      phonetic: '/ɡʊ(d)/',
      phonetics: [
         {
            text: '/ɡʊ(d)/',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-uk.mp3',
            sourceUrl:
               'https://commons.wikimedia.org/w/index.php?curid=9021875',
            license: {
               name: 'BY 3.0 US',
               url: 'https://creativecommons.org/licenses/by/3.0/us',
            },
         },
         {
            text: '[ɡɪ̈d]',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-us.mp3',
            sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=380162',
         },
      ],
      meanings: [
         {
            partOfSpeech: 'verb',
            definitions: [
               {
                  definition: 'To thrive; fatten; prosper; improve.',
                  synonyms: [],
                  antonyms: [],
               },
               {
                  definition: 'To make good; turn to good; improve.',
                  synonyms: [],
                  antonyms: [],
               },
               {
                  definition: 'To make improvements or repairs.',
                  synonyms: [],
                  antonyms: [],
               },
               {
                  definition: 'To benefit; gain.',
                  synonyms: [],
                  antonyms: [],
               },
               {
                  definition:
                     'To do good to (someone); benefit; cause to improve or gain.',
                  synonyms: [],
                  antonyms: [],
               },
               {
                  definition: 'To satisfy; indulge; gratify.',
                  synonyms: [],
                  antonyms: [],
               },
               {
                  definition: 'To flatter; congratulate oneself; anticipate.',
                  synonyms: [],
                  antonyms: [],
               },
            ],
            synonyms: [],
            antonyms: [],
         },
      ],
      license: {
         name: 'CC BY-SA 3.0',
         url: 'https://creativecommons.org/licenses/by-sa/3.0',
      },
      sourceUrls: ['https://en.wiktionary.org/wiki/good'],
   },
   {
      word: 'good',
      phonetic: '/ɡʊ(d)/',
      phonetics: [
         {
            text: '/ɡʊ(d)/',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-uk.mp3',
            sourceUrl:
               'https://commons.wikimedia.org/w/index.php?curid=9021875',
            license: {
               name: 'BY 3.0 US',
               url: 'https://creativecommons.org/licenses/by/3.0/us',
            },
         },
         {
            text: '[ɡɪ̈d]',
            audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/good-us.mp3',
            sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=380162',
         },
      ],
      meanings: [
         {
            partOfSpeech: 'verb',
            definitions: [
               {
                  definition:
                     'To furnish with dung; manure; fatten with manure; fertilise.',
                  synonyms: [],
                  antonyms: [],
               },
            ],
            synonyms: [],
            antonyms: [],
         },
      ],
      license: {
         name: 'CC BY-SA 3.0',
         url: 'https://creativecommons.org/licenses/by-sa/3.0',
      },
      sourceUrls: ['https://en.wiktionary.org/wiki/good'],
   },
] as IWord[];

export default function App() {
   return (
      <div data-theme="light" className="min-h-screen bg-background font-sans">
         <div className="container">
            <Header />
            <main className="">
               <WordForm word={testWords[0].word} onSubmit={() => {}} />
               <Word word={testWords[0]} />
            </main>
            <Footer />
         </div>
      </div>
   );
}
