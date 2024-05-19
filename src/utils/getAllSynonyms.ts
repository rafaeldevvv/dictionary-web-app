import { Word } from '@/ts/types';

export default function getAllSynonyms(words: Word[]) {
    const synonyms = new Set<string>();
    for (const w of words) {
        for (const m of w.meanings) {
            if (m.synonyms) {
                for (const s of m.synonyms) synonyms.add(s);
            }
            for (const d of m.definitions) {
                for (const s of d.synonyms) synonyms.add(s);
            }
        }
    }
    return [...synonyms];
}
