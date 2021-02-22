import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    it('should display a heading', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'Nicholas Hill' })).toBeInTheDocument();
    });

    describe('contact buttons', () => {
        it.each([['Email'], ['Phone'], ['GitHub'], ['CV']])('should display a %s button', (buttonTitle: string) => {
            render(<App />);
            expect(screen.getByRole('button', { name: buttonTitle })).toBeInTheDocument();
        });
    });
});
