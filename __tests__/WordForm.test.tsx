import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { toHaveNoViolations, axe } from 'jest-axe';
expect.extend(toHaveNoViolations);

import WordForm from '@/components/WordForm';

describe('<WordForm />', () => {
    test('should have no violations', async () => {
        const { container } = render(<WordForm />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
