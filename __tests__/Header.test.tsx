import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import Header from '@/components/Header';

describe('Global <Header />', () => {
    test('should have no violations', async () => {
        const { container } = render(
            <Header
                theme="dark"
                font="mono"
                onChangeFont={() => {}}
                onChangeTheme={() => {}}
            />,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})
