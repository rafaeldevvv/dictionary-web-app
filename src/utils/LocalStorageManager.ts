'use client';

import type { DictionaryWebAppData } from '@/ts/types';

const localStorageField = 'dictionary-web-app';

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

export function save<Key extends keyof DictionaryWebAppData>(
    key: Key,
    newData: DictionaryWebAppData[Key],
) {
    data[key] = newData;
    localStorage.setItem(localStorageField, JSON.stringify(data));
}

export function getWholeData() {
    return data;
}
