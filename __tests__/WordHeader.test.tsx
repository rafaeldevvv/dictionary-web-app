import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import WordHeader from '@/components/WordHeader';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import { testWord } from './ignore/test-objects';

describe('<WordHeader />', () => {
    test('should render heading with specified word', () => {
        render(<WordHeader word={testWord} number={1} headingId="heading-1" />);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
            /hello/i,
        );
        cleanup();
    });

    test('should render heading with specified definition set number', () => {
        render(<WordHeader word={testWord} number={1} headingId="heading-1" />);
        expect(screen.getByRole('heading')).toHaveTextContent(
            /first set of definitions/i,
        );
        cleanup();

        render(<WordHeader word={testWord} number={2} headingId="heading-1" />);
        expect(screen.getByRole('heading')).toHaveTextContent(
            /second set of definitions/i,
        );
        cleanup();

        render(<WordHeader word={testWord} number={35} headingId="heading-1" />);
        expect(screen.getByRole('heading')).toHaveTextContent(
            /thirty-fifth set of definitions/i,
        );
        cleanup();
    });

    test('should have no violations', async () => {
        const { container } = render(
            <WordHeader word={testWord} number={1} headingId="heading-1" />,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
