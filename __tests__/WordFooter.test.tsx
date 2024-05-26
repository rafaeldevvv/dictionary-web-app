import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { toHaveNoViolations, axe } from 'jest-axe';
expect.extend(toHaveNoViolations);

import WordFooter from '@/components/WordFooter';

import { testWord } from './ignore/test-objects';

describe('<WordFooter />', () => {
    test('should have no violations', async () => {
        const { container } = render(<WordFooter word={{ ...testWord }} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test('should not render sources when there isn\'t any', () => {
        render(<WordFooter word={{...testWord, sourceUrls: []}} />);
        expect(screen.queryByText('sources')).toBeNull();
    })
});
