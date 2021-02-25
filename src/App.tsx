import { ReactElement } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Header from './header/Header';
import SectionBubble from './sectionBubble/SectionBubble';
import sectionBubblesConfig from './config/sectionBubblesConfig.json';

const useStyles = makeStyles(() => ({
    main: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
    },
    sectionBubbles: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
}));

export default function App(): ReactElement {
    const classes = useStyles();

    return (
        <Container className={classes.main} maxWidth={false}>
            <Box className={classes.sectionBubbles}>
                <SectionBubble {...sectionBubblesConfig.experience} />
                <SectionBubble {...sectionBubblesConfig.education} />
                <SectionBubble {...sectionBubblesConfig.projects} />
            </Box>
            <Header />
            <Box className={classes.sectionBubbles}>
                <SectionBubble {...sectionBubblesConfig.skills} />
                <SectionBubble {...sectionBubblesConfig.achievements} />
                <SectionBubble {...sectionBubblesConfig.involvements} />
            </Box>
        </Container>
    );
}
