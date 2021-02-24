import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    it('should render a header', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'Nicholas Hill' })).toBeInTheDocument();
    });

    it.each([['Experience'], ['Education'], ['Projects'], ['Skills'], ['Achievements'], ['Involvements']])(
        'should display a %s heading and listed content',
        (heading: string) => {
            render(<App />);
            expect(screen.getByText(heading)).toBeInTheDocument();
            screen.getByRole('button', { name: `${heading} Show More` }).click();
            expect(screen.getByRole('list', { name: `${heading} List` })).toBeInTheDocument();
        },
    );
});
