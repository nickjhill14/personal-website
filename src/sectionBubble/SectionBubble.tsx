import { ReactElement, useState } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SvgIcon,
    makeStyles,
} from '@material-ui/core';
import {
    AccountTree,
    AssignmentTurnedIn,
    Build,
    ChevronRight,
    Code,
    ExpandMore,
    FitnessCenter,
    Headset,
    LibraryBooks,
    LocalBar,
    LocalCafe,
    Mic,
    MusicNote,
    PhoneAndroid,
    SportsEsports,
    SportsSoccer,
    Storage,
    Translate,
} from '@material-ui/icons';
import clsx from 'clsx';

export interface SectionBubbleProps {
    name: string;
    content: Content[];
}

const useStyles = makeStyles((theme) => ({
    showMore: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    showMoreOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function SectionBubble({ name, content }: SectionBubbleProps): ReactElement {
    const [showMore, setShowMore] = useState(false);
    const classes = useStyles();

    return (
        <Card>
            <CardHeader title={name} />
            <CardActions>
                <IconButton
                    onClick={(): void => setShowMore(!showMore)}
                    aria-expanded={showMore}
                    aria-label={`${name} Show More`}
                    className={clsx(classes.showMore, {
                        [classes.showMoreOpen]: showMore,
                    })}
                >
                    <ExpandMore />
                </IconButton>
            </CardActions>
            <Collapse in={showMore}>
                <CardContent>
                    <List dense aria-label={`${name} List`}>
                        {content.map((item, index) => (
                            <ListItem key={`${name}-item-${index}`}>
                                <ListItemIcon aria-label={`${item.icon} Icon`}>
                                    <SvgIcon component={listItemIconMap.get(item.icon) || ChevronRight} />
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Collapse>
        </Card>
    );
}

interface Content {
    text: string;
    icon: string;
}

const listItemIconMap = new Map<string, typeof SvgIcon>([
    ['Code', Code],
    ['LibraryBooks', LibraryBooks],
    ['LocalBar', LocalBar],
    ['LocalCafe', LocalCafe],
    ['PhoneAndroid', PhoneAndroid],
    ['FitnessCenter', FitnessCenter],
    ['AccountTree', AccountTree],
    ['AssignmentTurnedIn', AssignmentTurnedIn],
    ['Build', Build],
    ['Storage', Storage],
    ['Translate', Translate],
    ['SportsEsports', SportsEsports],
    ['Mic', Mic],
    ['MusicNote', MusicNote],
    ['SportsSoccer', SportsSoccer],
    ['Headset', Headset],
]);
