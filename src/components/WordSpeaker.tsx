import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

export default function WordSpeaker({ audioUrl }: { audioUrl: string }) {
    return (
        <button
            type="button"
            aria-label="Listen to the pronunciation"
            className="group"
        >
            <FontAwesomeIcon
                icon={faVolumeHigh}
                className="text-contrast-normal transition-colors group-hover:text-contrast-high group-focus-visible:text-contrast-high"
            />
        </button>
    );
}
