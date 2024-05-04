'use client';
import AppWrapper from '@/components/AppWrapper';

export default function Home() {
    return (
        <AppWrapper>
            <div className="text-center mx-auto max-w-sm">
                <h1 className="text-3xl font-bold mb-4 mt-20">
                    Welcome to my Dictionary Web App!
                </h1>
                <p>
                    Enter any word in the text field above to see its meaning.
                </p>
            </div>
        </AppWrapper>
    );
}
