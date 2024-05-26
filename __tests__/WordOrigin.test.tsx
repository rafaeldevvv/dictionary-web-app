import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { toHaveNoViolations, axe } from 'jest-axe';
expect.extend(toHaveNoViolations);

import WordOrigin from '@/components/WordOrigin';
import { testWord } from './ignore/test-objects';

describe('<WordForm />', () => {
    test('should have no violations', async () => {
        const { container } = render(
            <WordOrigin
                baseId="hello-1"
                word={{
                    ...testWord,
                    origin: 'some time betwen 10,000 BC and 2024 AC',
                }}
            />,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
