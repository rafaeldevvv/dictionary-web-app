import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function ExternalLink({
   href,
   className,
   children,
}: {
   href: string;
   children: React.ReactNode;
   className?: string;
}) {
   return (
      <a href={href} target="_blank" className={className}>
         {children} <span className="sr-only">(Opens in new tab)</span>
         <FontAwesomeIcon
            icon={'fa-solid fa-arrow-up-right-from-square' as IconProp}
            size="sm"
         />
      </a>
   );
}
