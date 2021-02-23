import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    describe('header', () => {
        it('should display a heading and sub-heading', () => {
            render(<App />);
            expect(screen.getByRole('heading', { name: 'Nicholas Hill' })).toBeInTheDocument();
            expect(screen.getByRole('heading', { name: 'Software Developer' })).toBeInTheDocument();
        });

        it.each([['Email'], ['Phone'], ['GitHub'], ['CV']])('should display a %s button', (buttonTitle: string) => {
            render(<App />);
            expect(screen.getByRole('button', { name: buttonTitle })).toBeInTheDocument();
        });
    });

    describe('sections', () => {
        it.each([['Experience'], ['Education'], ['Projects'], ['Skills'], ['Achievements'], ['Involvements']])(
            'should display a %s heading',
            (heading: string) => {
                render(<App />);
                expect(screen.getByText(heading)).toBeInTheDocument();
            },
        );
    });
});
