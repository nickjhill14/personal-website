import { ReactElement, useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Header from './header/Header';
import SectionBubble from './sectionBubble/SectionBubble';
import sectionBubblesConfig from './config/sectionBubblesConfig.json';
import HongKong from './assets/hong-kong.jpg';

const useStyles = makeStyles(() => ({
    main: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${HongKong})`,
        backgroundSize: 'cover',
    },
    header: {
        height: '75%',
    },
    sectionBubbles: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
}));

export enum SectionBubbles {
    None,
    Experience,
    Education,
    Projects,
    Skills,
    Achievements,
    Involements,
}

export default function App(): ReactElement {
    const [openSectionBubble, setOpenSectionBubble] = useState<SectionBubbles>(SectionBubbles.None);
    const classes = useStyles();

    return (
        <Container className={classes.main} maxWidth={false}>
            <Box className={classes.sectionBubbles}>
                <SectionBubble
                    type={SectionBubbles.Experience}
                    open={openSectionBubble}
                    setOpen={setOpenSectionBubble}
                    {...sectionBubblesConfig.experience}
                />
                <SectionBubble
                    type={SectionBubbles.Education}
                    open={openSectionBubble}
                    setOpen={setOpenSectionBubble}
                    {...sectionBubblesConfig.education}
                />
                <SectionBubble
                    type={SectionBubbles.Projects}
                    open={openSectionBubble}
                    setOpen={setOpenSectionBubble}
                    {...sectionBubblesConfig.projects}
                />
            </Box>
            <Box className={classes.header}>
                <Header />
            </Box>
            <Box className={classes.sectionBubbles}>
                <SectionBubble
                    type={SectionBubbles.Skills}
                    open={openSectionBubble}
                    setOpen={setOpenSectionBubble}
                    {...sectionBubblesConfig.skills}
                />
                <SectionBubble
                    type={SectionBubbles.Achievements}
                    open={openSectionBubble}
                    setOpen={setOpenSectionBubble}
                    {...sectionBubblesConfig.achievements}
                />
                <SectionBubble
                    type={SectionBubbles.Involements}
                    open={openSectionBubble}
                    setOpen={setOpenSectionBubble}
                    {...sectionBubblesConfig.involvements}
                />
            </Box>
        </Container>
    );
}
