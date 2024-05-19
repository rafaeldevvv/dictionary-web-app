import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import 'server-only';
import { cache } from 'react';

import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Language } from 'unsplash-js';

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY as string,
    fetch,
    headers: {
        'Accept-Version': 'v1',
    },
});

export default cache(async function getImagesForWord(
    word: string,
): Promise<ApiResponse<Photos>> {
    const data = await unsplash.search.getPhotos({
        query: word,
        lang: Language.English,
    });
    return data;
})
