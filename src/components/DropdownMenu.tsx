'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import {
    useCallback,
    useState,
    useEffect,
    useRef,
    forwardRef,
    ForwardedRef,
} from 'react';
import classNames from 'classnames';
import findItemIndexWithLetter from '@/utils/findItemIndexWithLetter';

export interface MenuToggleProps {
    controls: string;
    label: string;
    className?: string;
    onClick: (e: React.MouseEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    children: React.ReactNode;
    expanded: boolean;
}

export const MenuToggle = forwardRef(function MenuToggle(
    {
        controls,
        label,
        className,
        onClick,
        onKeyDown,
        children,
        expanded,
    }: MenuToggleProps,
    ref: ForwardedRef<HTMLButtonElement>,
) {
    return (
        <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={expanded}
            aria-controls={controls}
            onClick={onClick}
            onKeyDown={onKeyDown}
            className="rounded-xl px-4 py-1 capitalize hover:bg-contrast-lower focus-visible:bg-contrast-lower"
            aria-label={label}
            ref={ref}
        >
            <span className={className}>{children}</span>
            <FontAwesomeIcon
                icon={faChevronDown}
                className={classNames(
                    `ml-3 text-primary transition-transform`,
                    {
                        '-rotate-180': expanded,
                    },
                )}
            />
        </button>
    );
});

export interface MenuItemRadioProps {
    checked: boolean;
    className?: string;
    onClick: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    children: React.ReactNode;
    focused: boolean;
    id: string;
}

export function MenuItemRadio({
    checked,
    className,
    onClick,
    onKeyDown,
    children,
    focused,
    id,
}: MenuItemRadioProps) {
    const btnRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (focused) {
            btnRef.current!.focus();
            console.log('focused');
        } else if (document.activeElement === btnRef.current) {
            btnRef.current!.blur();
        }
    }, [focused]);

    return (
        <button
            role="menuitemradio"
            aria-checked={checked}
            className={classNames(
                className,
                'block w-full rounded-md px-3 py-1 text-right capitalize transition-colors hover:bg-contrast-high hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-contrast-high',
                {
                    'rounded-r-none border-r-4 border-r-primary text-primary':
                        checked,
                },
            )}
            tabIndex={focused ? 0 : -1}
            ref={btnRef}
            onClick={onClick}
            onKeyDown={onKeyDown}
            id={id}
        >
            {children}
        </button>
    );
}

export interface DropdownMenuProps<Option extends string> {
    options: Option[];
    current: Option;
    onChange: (newValue: Option) => void;
    baseId: string;
    baseLabel: string;
    optionClassNames?: {
        [Key in Option]: string;
    };
}

export default function DropdownMenu<Option extends string>({
    options,
    current,
    onChange,
    optionClassNames,
    baseId,
    baseLabel,
}: DropdownMenuProps<Option>) {
    const [open, setOpen] = useState(false);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(
        null,
    );
    const menuRef = useRef<HTMLUListElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    const handleMenuKeydown = useCallback(
        (e: React.KeyboardEvent) => {
            if (open) {
                const { key, shiftKey } = e;
                if (key === 'Escape' || (key === 'Tab' && shiftKey)) {
                    /* close menu if pressed key is Esc or Tab + Shift */
                    e.preventDefault();
                    setOpen(false);
                    /* focus menu button */
                    btnRef.current!.focus();
                    setFocusedOptionIndex(null);
                } else if (key === 'Tab') {
                    setOpen(false);
                    setFocusedOptionIndex(null);
                } else if (key === 'Home') {
                    /* focus first */
                    setFocusedOptionIndex(0);
                } else if (key === 'End') {
                    /* focus last */
                    setFocusedOptionIndex(options.length - 1);
                } else if (/^\w$/.test(key)) {
                    const nextIndex = findItemIndexWithLetter(options, 0, key);
                    /* if there is an option that starts with the specified key */
                    if (nextIndex !== undefined) {
                        /* if there's a focused option */
                        if (focusedOptionIndex !== null) {
                            /* if the option that starts with the key 
                            is after the currently focused key */
                            if (nextIndex > focusedOptionIndex) {
                                /* focus it */
                                setFocusedOptionIndex(nextIndex);
                            } else {
                                /* otherwise, find an option that 
                                starts with the key after the currently 
                                focused option */
                                const afterCurrent = findItemIndexWithLetter(
                                    options,
                                    focusedOptionIndex + 1,
                                    key,
                                );
                                /* if there is an option that starts with the key after the
                                currently focused option */
                                if (afterCurrent !== undefined) {
                                    /* focus it */
                                    setFocusedOptionIndex(afterCurrent);
                                } else {
                                    /* otherwise focus the first one found */
                                    setFocusedOptionIndex(nextIndex);
                                }
                            }
                        } else {
                            setFocusedOptionIndex(nextIndex);
                        }
                    }
                }
            }
        },
        [open, options, focusedOptionIndex],
    );

    const handleMenuToggleKeydown = useCallback(
        (e: React.KeyboardEvent) => {
            const { key } = e;
            if (!open) {
                if (key === 'ArrowUp' || key === 'ArrowDown') {
                    setOpen(true);
                    if (key === 'ArrowUp') {
                        /* focus last */
                        setFocusedOptionIndex(options.length - 1);
                    } else {
                        /* focus first */
                        setFocusedOptionIndex(0);
                    }
                }
            }
        },
        [open, options.length],
    );

    const handleMenuToggleClick = useCallback(
        (e: React.MouseEvent) => {
            if (!open) {
                setFocusedOptionIndex(0);
                setOpen(true);
            } else {
                setFocusedOptionIndex(null);
                setOpen(false);
            }
            e.stopPropagation();
        },
        [open],
    );

    const handleOptionKeydown = useCallback(
        (e: React.KeyboardEvent, o: Option, i: number) => {
            const { key } = e;

            /* here it is necessary to call e.preventDefault()
            in each case block because otherwise it is going
            pressing tab from working */
            switch (key) {
                case 'Enter': {
                    onChange(o);
                    setOpen(false);
                    setFocusedOptionIndex(null);
                    btnRef.current!.focus();
                    e.preventDefault();
                    break;
                }
                case ' ': {
                    onChange(o);
                    e.preventDefault();
                    break;
                }
                /* Here, the focus movement with the arrows works
                because the KeyboardEvent is fired only when the 
                button is focused */
                case 'ArrowDown': {
                    setFocusedOptionIndex((i + 1) % options.length);
                    e.preventDefault();
                    break;
                }
                case 'ArrowUp': {
                    setFocusedOptionIndex(i === 0 ? options.length - 1 : i - 1);
                    e.preventDefault();
                    break;
                }
            }
        },
        [options.length, onChange],
    );

    useEffect(() => {
        function handleWindowClick(e: MouseEvent) {
            if (open) {
                const menu = menuRef.current!;
                if (!menu.contains(e.target as Node) && e.target !== menu) {
                    setOpen(false);
                    setFocusedOptionIndex(null);
                }
            }
        }
        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, [open]);

    const menuId = baseId;

    return (
        <div className="relative">
            <MenuToggle
                label={`${baseLabel}: ${current}`}
                controls={menuId}
                className={optionClassNames?.[current]}
                expanded={open}
                onClick={handleMenuToggleClick}
                onKeyDown={handleMenuToggleKeydown}
                ref={btnRef}
            >
                {current}
            </MenuToggle>

            <ul
                id={menuId}
                role="menu"
                tabIndex={-1}
                aria-label={baseLabel + ' options'}
                aria-activedescendant={
                    focusedOptionIndex !== null ? options[focusedOptionIndex] : undefined
                }
                className="absolute right-0 top-[130%] z-50 w-32 space-y-0.5 rounded-md bg-background p-1 drop-shadow-xl"
                hidden={!open}
                onKeyDown={handleMenuKeydown}
                ref={menuRef}
            >
                {options.map((o, i) => {
                    const checked = o === current;
                    return (
                        <li key={o} role="presentation">
                            <MenuItemRadio
                                checked={checked}
                                className={optionClassNames?.[o]}
                                onClick={() => {
                                    onChange(o);
                                    setOpen(false);
                                    setFocusedOptionIndex(null);
                                }}
                                onKeyDown={(e) => handleOptionKeydown(e, o, i)}
                                focused={focusedOptionIndex === i && open}
                                id={o}
                            >
                                {o}
                            </MenuItemRadio>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
