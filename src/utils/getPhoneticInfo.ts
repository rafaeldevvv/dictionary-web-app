import type { Word } from '@/ts/types';

interface PhoneticInfoPiece {
    phonetic?: string;
    audio?: string;
}

/**
 * Extract phonetic information (phonetic transcription and/or audio) from a given {@link Word} object.
 * In case there's no phonetic information, an empty array is returned.
 *
 * @param word
 * @returns - An array of {@link PhoneticInfoPiece}s.
 */
export default function getPhoneticInfo(word: Word): PhoneticInfoPiece[] {
    const phoneticAudioPairs: PhoneticInfoPiece[] = [];
    // get complete pairs if any
    for (const p of word.phonetics) {
        if (p.text && p.text !== '' && p.audio && p.audio !== '') {
            phoneticAudioPairs.push({ phonetic: p.text, audio: p.audio });
        }
    }

    // if there is at least one complete pair, return
    if (phoneticAudioPairs.length !== 0) return phoneticAudioPairs;

    // otherwise, search for a phonetic and audio, if any
    let phonetic: string | undefined = undefined,
        audio: string | undefined = undefined;

    if (word.phonetic) {
        phonetic = word.phonetic;
    } else {
        for (const p of word.phonetics) {
            if (p.text && p.text !== '') {
                phonetic = p.text;
            }
        }
    }

    for (const p of word.phonetics) {
        if (p.audio && p.audio !== '') audio = p.audio;
    }

    // if there isn't complete pairs, we return an array with one item if
    // an audio or a phonetic was found
    // if there is no audio and phonetic, the returned array if empty
    if (phonetic || audio) phoneticAudioPairs.push({ phonetic, audio });
    return phoneticAudioPairs;
}
