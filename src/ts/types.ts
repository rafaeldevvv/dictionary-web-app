export type Themes = 'dark' | 'light';
export type FontFamilies = 'sans' | 'serif' | 'mono' | 'cursive';

export type FontFamiliesClassnames = {
    [Family in FontFamilies]: string;
};

export interface DictionaryWebAppData {
    font: FontFamilies;
    theme: Themes;
}

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
    text?: string;
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

export interface Joke {
    id: string;
    joke: string;
}

export interface SearchedJoke {
    current_page: number;
    limit: number;
    next_page: number;
    previous_page: number;
    results: Joke[];
    search_term: string;
    status: number;
    total_jokes: number;
    total_pages: number;
}
