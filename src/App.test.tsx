import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    it('should display a heading', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'Nicholas Hill - Personal Website' })).toBeInTheDocument();
    });
});
