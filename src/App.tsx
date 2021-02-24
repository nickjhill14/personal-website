import { ReactElement } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Header from './header/Header';
import SectionBubble from './sectionBubble/SectionBubble';
import sectionBubblesConfig from './config/sectionBubblesConfig.json';

const useStyles = makeStyles(() => ({
    main: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    sectionBubbles: {
        height: '100%',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
}));

export default function App(): ReactElement {
    const classes = useStyles();

    return (
        <Container className={classes.main}>
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
