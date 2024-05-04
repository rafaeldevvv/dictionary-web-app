import type { Word } from '../types';

export default async function getWord(word: string): Promise<Word[]> {
    const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    if (res.status >= 400) {
        throw new Error(
            `Getting information for the word '${word}' failed with code ${res.status} (${res.statusText})`,
        );
    } else {
        return await res.json();
    }
}
