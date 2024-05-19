'use client';

import Image from 'next/image';
import Link from 'next/link';
import Modal from 'react-modal';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function WordImages({
    imagesData,
    word,
}: {
    imagesData: Photos;
    word: string;
}) {
    const [modalImageId, setModalImageId] = useState<string | null>(null);

    const { results } = imagesData;
    const images = [];
    const maxIndex = Math.min(8, results.length);
    for (let i = 0; i < maxIndex; i++) {
        const img = results[i];
        images.push(
            <li key={img.id}>
                <button
                    type="button"
                    onClick={() => setModalImageId(img.id)}
                    className="block outline-0 transition-opacity hover:cursor-zoom-in hover:opacity-60 focus-visible:opacity-50"
                >
                    <Image
                        src={img.urls.small}
                        width="200"
                        height="200"
                        alt={img.alt_description || ''}
                        className="aspect-square object-cover object-center"
                    />
                </button>
            </li>,
        );
    }
    const attributionLinks = [];
    for (let i = 0; i < maxIndex; i++) {
        const { user } = results[i];
        attributionLinks.push(
            <Link
                href={user.links.html}
                target="_blank"
                className="text-contrast-highest underline hover:no-underline focus-visible:no-underline"
                key={user.id + i}
            >
                {user.name}
            </Link>,
        );
        if (i < maxIndex - 1) attributionLinks.push(', ');
    }

    const modalImg = results.find((i) => i.id === modalImageId);
    const isModalOpen = !!modalImg;

    const closeModal = useCallback(() => {
        setModalImageId(null);
        const body = document.body;

        /* remove extra padding */
        body.style.paddingInlineEnd = '0';
        body.style.overflow = 'auto';
    }, []);

    return (
        <div>
            <figure>
                <div className="rounded-lg outline-4 outline-offset-2 focus-within:outline focus-within:outline-contrast-high">
                    <ul className="mx-auto mb-4 grid max-w-72 grid-cols-[repeat(2,minmax(0,100%))] gap-1 overflow-hidden rounded-lg sm:max-w-full sm:grid-cols-4">
                        {images}
                    </ul>
                </div>
                <figcaption className="mx-auto max-w-sm text-center text-xs text-contrast-high">
                    Photos of &quot;
                    <strong className="text-contrast-highest">{word}</strong>
                    &quot; by {attributionLinks} on{' '}
                    <Link
                        href="https://unsplash.com/?utm_source=Dictionary_Web_App&utm_medium=referral"
                        target="_blank"
                        className="text-contrast-highest underline hover:no-underline focus-visible:no-underline"
                    >
                        Unsplash
                    </Link>
                </figcaption>
            </figure>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onAfterOpen={() => {
                    const body = document.body;

                    /* add extra padding to mitigate shift layout 
                    when overflow property value becomes 'hidden' */
                    body.style.paddingInlineEnd =
                        innerWidth - body.clientWidth + 'px';
                    body.style.overflow = 'hidden';
                }}
                style={{
                    overlay: {
                        padding: '0',
                        backgroundColor: 'hsl(0 0% 0% / .6)',
                        display: 'flex',
                        alignItems: 'center',
                        inset: '0',
                        overflowY: 'auto',
                        height: '100vh',
                    },
                }}
                className="static mx-auto max-h-full w-full max-w-xl"
                contentLabel={`Image for ${word}`}
                shouldFocusAfterRender
                shouldReturnFocusAfterClose
            >
                {modalImg && (
                    <ModalContents onClose={closeModal} img={modalImg} />
                )}
            </Modal>
        </div>
    );
}

export function ModalContents({
    img,
    onClose,
}: {
    img: Photos['results'][number];
    onClose: () => void;
}) {
    const [isImgLoading, setIsImgLoading] = useState(true);
    return (
        <div className="mx-auto px-2 py-6">
            <button
                type="button"
                className="mb-8 ms-auto block h-10 transition-opacity hover:opacity-70"
                aria-label="Close modal"
                onClick={onClose}
            >
                <FontAwesomeIcon
                    icon={faClose}
                    size="3x"
                    className="text-white"
                />
            </button>
            <figure>
                <div className="relative">
                    <Image
                        alt={img.alt_description || ''}
                        src={img.urls.full}
                        width="800"
                        height="0"
                        className="w-full rounded-lg"
                        onLoad={() => {
                            setIsImgLoading(false);
                        }}
                    />
                    {isImgLoading && (
                        <div className="aspect-square rounded-lg">
                            <span className="sr-only">Loading image</span>
                            <span className="absolute left-1/2 top-1/2 block w-28 -translate-x-1/2 -translate-y-1/2">
                                <span className="block aspect-square w-full animate-spin rounded-full border-[.8rem] border-transparent border-r-white border-t-white"></span>
                            </span>
                        </div>
                    )}
                </div>
                <figcaption className="py-4 text-center text-sm italic text-gray-200">
                    Photo by{' '}
                    <Link
                        href={img.user.links.html}
                        target="_blank"
                        className="text-white underline hover:no-underline focus-visible:no-underline"
                    >
                        {img.user.name}
                    </Link>{' '}
                    on{' '}
                    <Link
                        href="https://unsplash.com/?utm_source=Dictionary_Web_App&utm_medium=referral"
                        target="_blank"
                        className="text-white underline hover:no-underline focus-visible:no-underline"
                    >
                        Unsplash
                    </Link>
                </figcaption>
            </figure>
        </div>
    );
}
