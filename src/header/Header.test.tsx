import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
    it('should display a heading and sub-heading', () => {
        render(<Header />);
        expect(screen.getByRole('heading', { name: 'Nicholas Hill' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Software Developer' })).toBeInTheDocument();
    });

    it.each([['Email'], ['Phone'], ['GitHub'], ['CV']])('should display a %s button', (buttonTitle: string) => {
        render(<Header />);
        expect(screen.getByRole('button', { name: buttonTitle })).toBeInTheDocument();
    });
});
