import '@testing-library/jest-dom';
import { screen, render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import ColorThemeToggle from '@/components/ColorThemeToggle';

describe('<ColorThemeToggle />', () => {
    test('should render correct label based on theme', () => {
        render(<ColorThemeToggle theme="light" onChange={() => {}} />);
        expect(
            screen.getByLabelText(/change to dark theme/i),
        ).toBeInTheDocument();
        cleanup();
        render(<ColorThemeToggle theme="dark" onChange={() => {}} />);
        expect(
            screen.getByLabelText(/change to light theme/i),
        ).toBeInTheDocument();
    });

    test('should have no violations', async () => {
        const { container } = render(
            <ColorThemeToggle theme="dark" onChange={() => {}} />,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
