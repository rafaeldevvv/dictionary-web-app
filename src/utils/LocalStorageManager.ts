'use client';

import type { DictionaryWebAppData } from '@/ts/types';

const localStorageField = 'dictionary-web-app';

const localStorageData = localStorage.getItem(localStorageField);
const data = (
    localStorageData
        ? JSON.parse(localStorageData)
        : {
              font: 'sans',
              theme: 'light',
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
