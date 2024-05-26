import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DropdownMenu, { MenuToggle } from '@/components/DropdownMenu';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

const options = ['a', 'b', 'c', 'd'] as const;

describe('<DropdownMenu />', () => {
    test('should have no violations', async () => {
        const { container } = render(
            <DropdownMenu
                options={options}
                current="a"
                baseId="alpha"
                baseLabel="alpha"
                onChange={() => {}}
            />,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test.each(options)('should render option %s', (o) => {
        render(
            <DropdownMenu
                options={options}
                current="a"
                baseId="alpha"
                baseLabel="alpha"
                onChange={() => {}}
            />,
        );
        expect(
            screen.queryAllByRole('menuitemradio', {
                name: new RegExp(o, 'i'),
            }),
        ).not.toEqual({ length: 0 });
    });

    test('should open when clicked', async () => {
        const user = userEvent.setup();

        render(
            <DropdownMenu
                options={options}
                current="a"
                baseId="alpha"
                baseLabel="alpha"
                onChange={() => {}}
            />,
        );

        expect(screen.getByRole('menu', { hidden: true })).not.toBeVisible();
        await user.click(screen.getByRole('button', { name: /alpha: a/ }));
        expect(screen.getByRole('menu')).toBeVisible();
    });

    test('should call onChange() event handler correctly', async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();

        render(
            <DropdownMenu
                options={options}
                current="a"
                baseId="alpha"
                baseLabel="alpha"
                onChange={handleChange}
            />,
        );

        await user.click(screen.getByRole('button', { name: /alpha: a/i }));
        await user.click(screen.getByRole('menuitemradio', { name: /a/i }));
        await user.click(screen.getByRole('button', { name: /alpha: a/i }));
        await user.click(screen.getByRole('menuitemradio', { name: /b/i }));

        expect(handleChange).toHaveBeenCalledTimes(2);
    });
});

describe('<MenuToggle />', () => {
    it('should render button with text "Test"', () => {
        const tree = renderer
            .create(
                <MenuToggle
                    expanded={true}
                    className="a"
                    controls="a"
                    label="a"
                    onClick={() => {}}
                    onKeyDown={() => {}}
                >
                    Test
                </MenuToggle>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot('MenuToggle');
    });
});
