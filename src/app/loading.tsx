export default function Loading() {
    return (
        <div>
            <p className="sr-only">Loading content</p>
            <div className="mb-2 mt-10 h-14 max-w-sm animate-pulse rounded bg-contrast-low delay-75"></div>
            <div className="h-4 max-w-20 animate-pulse rounded bg-contrast-low"></div>

            <div className="space-y-6">
                {Array(3)
                    .fill(undefined)
                    .map((_, i) => {
                        return (
                            <div key={i}>
                                <div className="my-10 flex items-center gap-x-2">
                                    <div className="h-6 w-20 max-w-full animate-pulse rounded bg-contrast-low"></div>
                                    <div className="h-1 grow rounded bg-contrast-lower"></div>
                                </div>

                                <div className="">
                                    <ul className="list-disc space-y-6 ps-8">
                                        {Array(3)
                                            .fill(undefined)
                                            .map((_, i) => {
                                                return (
                                                    <li key={i}>
                                                        <div className="mb-2 h-5 animate-pulse rounded bg-contrast-low"></div>
                                                        <div className="h-5 w-3/4 animate-pulse rounded bg-contrast-lowerish"></div>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
