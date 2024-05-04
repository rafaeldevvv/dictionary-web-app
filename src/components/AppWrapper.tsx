'use client';

import Header from './Header';
import Footer from './Footer';
import WordForm from './WordForm';

export default function AppWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            data-theme="light"
            className="bg-background font-sans"
        >
            <div className="container grid min-h-screen grid-rows-[min-content_1fr_min-content]">
                <Header />
                <main>
                    <WordForm word={''} onSubmit={() => {}} />
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}
