import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WordSpeaker({ audioUrl }: { audioUrl: string }) {
   return (
      <button
         type="button"
         aria-label="Listen to the pronunciation"
         className="group"
      >
         <FontAwesomeIcon
            icon={'fa-solid fa-volume-high' as IconProp}
            className="text-contrast-normal transition-colors group-hover:text-contrast-high group-focus-visible:text-contrast-high"
         />
      </button>
   );
}
