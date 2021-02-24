import { render, screen } from '@testing-library/react';
import SectionBubble from './SectionBubble';

describe('<SectionBubble/>', () => {
    it('should render a heading and listed content', () => {
        const name = 'Section Bubble';
        render(<SectionBubble name={name} />);
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByRole('list', { name: `${name} List` })).toBeInTheDocument();
    });
});
