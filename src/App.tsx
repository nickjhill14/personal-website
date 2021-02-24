import { ReactElement } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Header from './header/Header';
import SectionBubble from './sectionBubble/SectionBubble';

const useStyles = makeStyles(() => ({
    main: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    sectionBubbles: {
        height: '100%',
        width: '300px',
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
                <SectionBubble name="Experience" />
                <SectionBubble name="Education" />
                <SectionBubble name="Projects" />
            </Box>
            <Header />
            <Box className={classes.sectionBubbles}>
                <SectionBubble name="Skills" />
                <SectionBubble name="Achievements" />
                <SectionBubble name="Involvements" />
            </Box>
        </Container>
    );
}
