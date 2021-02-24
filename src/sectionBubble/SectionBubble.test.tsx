import { render, screen } from '@testing-library/react';
import SectionBubble, { SectionBubbleProps } from './SectionBubble';

describe('<SectionBubble/>', () => {
    function renderSectionBubble(propsOverride?: Partial<SectionBubbleProps>) {
        const props: SectionBubbleProps = {
            name: 'Example Name',
            content: [{ icon: '', text: 'Example Content' }],
            ...propsOverride,
        };
        render(<SectionBubble {...props} />);
    }

    it('should render a heading', () => {
        const name = 'Section Bubble';
        renderSectionBubble({ name });
        expect(screen.getByText(name)).toBeInTheDocument();
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
            renderSectionBubble({ name, content });
            screen.getByRole('button', { name: `${name} Show More` }).click();
            expect(screen.getByRole('list', { name: `${name} List` })).toBeInTheDocument();
            expect(screen.getAllByRole('listitem')).toHaveLength(2);
            expect(screen.getByText(firstItem)).toBeInTheDocument();
            expect(screen.getByText(secondItem)).toBeInTheDocument();
        });

        it.each([['Code'], ['LibraryBooks'], ['LocalBar'], ['LocalCafe']])(
            'should render listed content icons for %s',
            (icon: string) => {
                const name = 'Section Bubble';
                const content = [{ icon, text: 'Example Item' }];
                renderSectionBubble({ name, content });
                screen.getByRole('button', { name: `${name} Show More` }).click();
                expect(screen.getByLabelText(`${icon} Icon`)).toBeInTheDocument();
            },
        );
    });
});
