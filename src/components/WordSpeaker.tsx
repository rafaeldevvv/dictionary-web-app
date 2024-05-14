'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect, useCallback, MutableRefObject } from 'react';

export default function WordSpeaker({ audioUrl }: { audioUrl: string }) {
    const audioRef = useRef<HTMLAudioElement>(
        null,
    ) as MutableRefObject<HTMLAudioElement>;

    /* AT THE TIME I WRITE THIS CODE (2024-05-11), THE FREE
    DICTIONARY API SERVER IS NOT WORKING TO RETRIEVE AUDIO
    SO THIS COMPONENT DOESN'T WORK */
    useEffect(() => {
        const a = new Audio(audioUrl);
        a.load();
        audioRef.current = a;
    }, [audioUrl]);

    const handleClick = useCallback(() => {
        const audio = audioRef.current!;
        audio.currentTime = 0;
        audio.play();
    }, []);

    const label = 'Listen to the pronunciation';

    return (
        <button
            type="button"
            aria-label={label}
            title={label}
            className="group"
            onClick={handleClick}
        >
            <FontAwesomeIcon
                icon={faVolumeHigh}
                className="text-contrast-normal transition-colors group-hover:text-contrast-high group-focus-visible:text-contrast-high group-active:scale-90"
            />
        </button>
    );
}
