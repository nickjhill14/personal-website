import { render, screen } from '@testing-library/react';
import { SectionBubbles } from '../App';
import SectionBubble, { SectionBubbleProps } from './SectionBubble';

describe('<SectionBubble/>', () => {
    function renderSectionBubble(propsOverride?: Partial<SectionBubbleProps>) {
        const props: SectionBubbleProps = {
            name: 'Example Name',
            avatar: '',
            content: [{ icon: '', text: 'Example Content' }],
            type: SectionBubbles.Experience,
            open: SectionBubbles.None,
            setOpen: () => null,
            ...propsOverride,
        };
        render(<SectionBubble {...props} />);
    }

    it('should render a heading and avatar', () => {
        const name = 'Section Bubble';
        const avatar = 'Code';
        renderSectionBubble({ name, avatar });
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByLabelText(`${avatar} Avatar`)).toBeInTheDocument();
    });

    it('should render a default avatar', () => {
        renderSectionBubble({ avatar: '' });
        expect(screen.getByLabelText('EmojiEmotions Avatar')).toBeInTheDocument();
    });

    describe('content', () => {
        it('should hide listed content by default', () => {
            const name = 'Section Bubble';
            renderSectionBubble({ name });
            expect(screen.queryByRole('list', { name: `${name} List` })).not.toBeInTheDocument();
        });

        it('should render listed content on show more click', () => {
            const name = 'Section Bubble';
            const firstItem = 'First Item';
            const secondItem = 'Second Item';
            const content = [
                { icon: '', text: firstItem },
                { icon: '', text: secondItem },
            ];
            renderSectionBubble({ type: SectionBubbles.Experience, open: SectionBubbles.Experience, name, content });
            expect(screen.queryByRole('list', { name: `${name} List` })).not.toBeInTheDocument();
            screen.getByRole('button', { name: `${name} Show More` }).click();
            expect(screen.getByRole('list', { name: `${name} List` })).toBeInTheDocument();
            expect(screen.getAllByRole('listitem')).toHaveLength(2);
            expect(screen.getByText(firstItem)).toBeInTheDocument();
            expect(screen.getByText(secondItem)).toBeInTheDocument();
        });

        it('should render listed content icons', () => {
            const name = 'Section Bubble';
            renderSectionBubble({ name, content: [{ icon: 'Code', text: 'Example Item' }] });
            screen.getByRole('button', { name: `${name} Show More` }).click();
            expect(screen.getByLabelText('Code Icon')).toBeInTheDocument();
        });

        it('should render default listed content icons', () => {
            const name = 'Section Bubble';
            renderSectionBubble({ name, content: [{ icon: '', text: 'Example Item' }] });
            screen.getByRole('button', { name: `${name} Show More` }).click();
            expect(screen.getByLabelText('ChevronRight Icon')).toBeInTheDocument();
        });
    });
});
