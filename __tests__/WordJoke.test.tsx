import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import WordJoke from '@/components/WordJoke';

describe('<WordJoke />', () => {
    test('should have no violations', async () => {
        const { container } = render(
            <WordJoke joke="What did the Zen Buddist say to the hotdog vendor? Make me one with everything." />,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})
