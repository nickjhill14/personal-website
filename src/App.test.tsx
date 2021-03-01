import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    it('should render a header', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'Nicholas Hill' })).toBeInTheDocument();
    });

    describe('section bubbles', () => {
        it.each([['Experience'], ['Education'], ['Projects'], ['Skills'], ['Achievements'], ['Involvements']])(
            'should display a %s heading and listed content',
            (heading: string) => {
                render(<App />);
                expect(screen.getByText(heading)).toBeInTheDocument();
                screen.getByRole('button', { name: `${heading} Show More` }).click();
                expect(screen.getByRole('list', { name: `${heading} List` })).toBeInTheDocument();
            },
        );

        it('should only open one section bubble at a time', async () => {
            render(<App />);
            screen.getByRole('button', { name: 'Experience Show More' }).click();
            expect(screen.getByRole('list', { name: 'Experience List' })).toBeInTheDocument();
            screen.getByRole('button', { name: 'Education Show More' }).click();
            await waitFor(() => {
                expect(screen.queryByRole('list', { name: 'Experience List' })).not.toBeInTheDocument();
                expect(screen.getByRole('list', { name: 'Education List' })).toBeInTheDocument();
            });
        });
    });
});
