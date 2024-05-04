import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
        </a>
    );
}
