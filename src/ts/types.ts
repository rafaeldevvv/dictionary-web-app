export type Themes = 'dark' | 'light';

export interface Word {
   word: string;
   phonetic?: string;
   phonetics: Phonetic[];
   origin?: string;
   meanings: Meaning[];
   license: License;
   sourceUrls: string[];
}

export interface Phonetic {
   text: string;
   audio?: string;
   sourceUrl?: string;
   license?: License;
}

export interface License {
   name: string;
   url: string;
}

export interface Meaning {
   partOfSpeech: string;
   definitions: Definition[];
   synonyms?: string[];
   antonyms?: string[];
}

export interface Definition {
   definition: string;
   example?: string;
   synonyms: string[];
   antonyms: string[];
}
