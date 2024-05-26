import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import Footer from '@/components/Footer';

describe('Global <Footer />', () => {
    test('should should have no violations', async () => {
        const { container } = render(<Footer />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

})
