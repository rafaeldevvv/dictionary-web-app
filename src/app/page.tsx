'use client';
import AppWrapper from '@/components/AppWrapper';

export default function Home() {
    return (
        <AppWrapper>
            <div className="text-center">
                <h1 className="text-3xl font-bold">
                    Welcome to my Dictionary Web App!
                </h1>
                <p>
                    Enter any word in the text field above to see its meaning.
                </p>
            </div>
        </AppWrapper>
    );
}
