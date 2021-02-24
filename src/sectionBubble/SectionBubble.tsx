import { ReactElement } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';

export interface SectionBubbleProps {
    name: string;
}

export default function SectionBubble({ name }: SectionBubbleProps): ReactElement {
    return (
        <Card>
            <CardHeader title={name} />
            <CardContent>
                <ul aria-label={`${name} List`}></ul>
            </CardContent>
        </Card>
    );
}
