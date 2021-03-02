import { ReactElement, useState } from 'react';
import {
    Avatar,
    Card,
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
    EmojiEmotions,
    EmojiEvents,
    ExpandMore,
    Explore,
    FitnessCenter,
    Group,
    Headset,
    LibraryBooks,
    LocalBar,
    LocalCafe,
    Mic,
    MusicNote,
    Palette,
    PhoneAndroid,
    School,
    SportsEsports,
    SportsSoccer,
    Storage,
    Translate,
} from '@material-ui/icons';
import clsx from 'clsx';
import { SectionBubbles } from '../App';

export interface SectionBubbleProps {
    name: string;
    avatar: string;
    content: Content[];
    type: SectionBubbles;
    open: SectionBubbles;
    setOpen: (open: SectionBubbles) => void;
}

const useStyles = makeStyles((theme) => ({
    main: {
        width: '70%',
    },
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

export default function SectionBubble({
    name,
    avatar,
    content,
    type,
    open,
    setOpen,
}: SectionBubbleProps): ReactElement {
    const [showMore, setShowMore] = useState(false);
    const classes = useStyles();

    function handleShowMore(): void {
        setOpen(open === type ? SectionBubbles.None : type);
        setShowMore(!showMore);
    }

    return (
        <Card className={classes.main} raised>
            <CardHeader
                title={name}
                avatar={
                    <Avatar aria-label={`${avatar || 'EmojiEmotions'} Avatar`}>
                        <SvgIcon component={iconMap.get(avatar || '') || EmojiEmotions} />
                    </Avatar>
                }
                action={
                    <IconButton
                        onClick={handleShowMore}
                        aria-expanded={showMore && open === type}
                        aria-label={`${name} Show More`}
                        className={clsx(classes.showMore, {
                            [classes.showMoreOpen]: showMore && open === type,
                        })}
                    >
                        <ExpandMore />
                    </IconButton>
                }
            />
            <Collapse in={showMore && open === type}>
                <CardContent>
                    <List dense aria-label={`${name} List`}>
                        {content.map((item, index) => (
                            <ListItem key={`${name}-item-${index}`} disableGutters>
                                <ListItemIcon aria-label={`${item.icon || 'ChevronRight'} Icon`}>
                                    <SvgIcon component={iconMap.get(item.icon) || ChevronRight} />
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

const iconMap = new Map<string, typeof SvgIcon>([
    ['AccountTree', AccountTree],
    ['AssignmentTurnedIn', AssignmentTurnedIn],
    ['Build', Build],
    ['Code', Code],
    ['Explore', Explore],
    ['EmojiEmotions', EmojiEmotions],
    ['EmojiEvents', EmojiEvents],
    ['Group', Group],
    ['FitnessCenter', FitnessCenter],
    ['Headset', Headset],
    ['LibraryBooks', LibraryBooks],
    ['LocalBar', LocalBar],
    ['LocalCafe', LocalCafe],
    ['Mic', Mic],
    ['MusicNote', MusicNote],
    ['Palette', Palette],
    ['PhoneAndroid', PhoneAndroid],
    ['School', School],
    ['SportsEsports', SportsEsports],
    ['SportsSoccer', SportsSoccer],
    ['Storage', Storage],
    ['Translate', Translate],
]);
