export default function Loading() {
    return (
        <div>
            <p className="sr-only">Loading content</p>
            <div className="mb-6 mt-10 animate-pulse">
                <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg sm:grid-cols-4">
                    {Array(8)
                        .fill(undefined)
                        .map((_, i) => {
                            return (
                                <div
                                    key={i}
                                    className="aspect-square bg-contrast-low"
                                />
                            );
                        })}
                </div>
                <div className="mx-auto mt-4 h-8 max-w-sm rounded bg-contrast-low"></div>
            </div>
            <div className="mb-2 h-12 max-w-48 animate-pulse rounded bg-contrast-low delay-75" />
            <div className="h-4 max-w-20 animate-pulse rounded bg-contrast-low" />

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
