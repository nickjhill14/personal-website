import { ReactElement } from 'react';
import { Box, Card, CardHeader, Container, makeStyles } from '@material-ui/core';
import Header from './header/Header';

const useStyles = makeStyles(() => ({
    main: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    sections: {
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
            <Box className={classes.sections}>
                <Card>
                    <CardHeader title="Experience" />
                </Card>
                <Card>
                    <CardHeader title="Education" />
                </Card>
                <Card>
                    <CardHeader title="Projects" />
                </Card>
            </Box>
            <Header />
            <Box className={classes.sections}>
                <Card>
                    <CardHeader title="Skills" />
                </Card>
                <Card>
                    <CardHeader title="Achievements" />
                </Card>
                <Card>
                    <CardHeader title="Involvements" />
                </Card>
            </Box>
        </Container>
    );
}
