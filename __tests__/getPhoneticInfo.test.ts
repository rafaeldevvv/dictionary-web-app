import type { Word } from '@/ts/types';
import getPhoneticInfo from '@/utils/getPhoneticInfo';

const testWords = [
    {
        phonetic: 'phonetic0',
        phonetics: [
            {
                text: 'phonetic1',
                audio: 'audio0',
            },
        ],
    },
    {
        phonetic: 'phonetic0',
        phonetics: [
            {
                text: '',
                audio: 'audio0',
            },
        ],
    },
    {
        phonetic: 'phonetic0',
        phonetics: [
            {
                text: 'phonetic1',
                audio: 'audio0',
            },
            {
                text: 'phonetic2',
                audio: 'audio1',
            },
        ],
    },
    {
        phonetic: 'phonetic0',
        phonetics: [
            {
                text: 'phonetic1',
                audio: 'audio0',
            },
            {
                text: 'phonetic2',
                audio: undefined,
            },
        ],
    },
    {
        phonetic: undefined,
        phonetics: [
            {
                text: undefined,
                audio: undefined,
            },
            {
                text: undefined,
                audio: undefined,
            },
        ],
    },
] as Word[];

const results = [
    [
        {
            phonetic: 'phonetic1',
            audio: 'audio0',
        },
    ],
    [
        {
            phonetic: 'phonetic0',
            audio: 'audio0',
        },
    ],
    [
        {
            phonetic: 'phonetic1',
            audio: 'audio0',
        },
        {
            phonetic: 'phonetic2',
            audio: 'audio1',
        },
    ],
    [
        {
            phonetic: 'phonetic1',
            audio: 'audio0',
        },
    ],
    [],
];

if (testWords.length !== results.length)
    throw new Error('Inputs and Outputs are inconsistent');

describe('getPhoneticInfo()', () => {
    results.forEach((r, i) => {
        const input = testWords[i];
        test(`should work for ${JSON.stringify(input, null, 4)}`, () => {
            expect(getPhoneticInfo(input)).toEqual(r);
        });
    });
});
