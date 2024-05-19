import { SearchedJoke } from '@/ts/types';

export default async function getJoke(word: string, index: number) {
    const res = await fetch(`https://icanhazdadjoke.com/search?term=${word}`, {
        headers: {
            Accept: 'application/json',
            'User-Agent':
                'Dictionary Web App (https://github.com/rafaeldevvv/dictionary-web-app)',
        },
    });
    if (res.status >= 400) return null;
    const data = (await res.json()) as SearchedJoke;
    if (data.results.length === 0) return null;
    const joke = data.results[index];
    if (joke) return joke.joke;
    return null;
}
