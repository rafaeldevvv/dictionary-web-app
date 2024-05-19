'use client';

import type { DictionaryWebAppData } from '@/ts/types';

const localStorageField = 'dictionary-web-app';

let data = {} as DictionaryWebAppData;

/* this function exists to prevent 
code from executing on the server */
function getData() {
    const mql = matchMedia('(prefers-color-scheme: dark)');
    const dark = mql.matches;

    const localStorageData = localStorage.getItem(localStorageField);
    const data = (
        localStorageData
            ? JSON.parse(localStorageData)
            : {
                  font: 'sans',
                  theme: dark ? 'dark' : 'light',
              }
    ) as DictionaryWebAppData;
    return data;
}

export function save<Key extends keyof DictionaryWebAppData>(
    key: Key,
    newData: DictionaryWebAppData[Key],
) {
    if (data.font === undefined) data = getData();
    data[key] = newData;
    localStorage.setItem(localStorageField, JSON.stringify(data));
}

export function getWholeData() {
    if (data.font === undefined) data = getData();
    return data;
}
