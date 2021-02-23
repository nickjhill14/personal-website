import { ReactElement } from 'react';
import { Box, Button, Card, CardHeader, Container, Typography, makeStyles } from '@material-ui/core';
import { Description, Email, GitHub, Phone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    main: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
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
    title: {
        textAlign: 'center',
    },
    buttonGroup: {
        display: 'flex',
    },
    button: {
        width: '100px',
        margin: theme.spacing(0.5),
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
            <Box className={classes.header}>
                <Typography variant="h2" component="h1" className={classes.title}>
                    Nicholas Hill
                </Typography>
                <Typography variant="h6" component="h2" className={classes.title}>
                    Software Developer
                </Typography>
                <Box className={classes.buttonGroup}>
                    <Button variant="contained" color="primary" startIcon={<Email />} className={classes.button}>
                        Email
                    </Button>
                    <Button variant="contained" color="primary" startIcon={<Phone />} className={classes.button}>
                        Phone
                    </Button>
                    <Button variant="contained" color="primary" startIcon={<GitHub />} className={classes.button}>
                        GitHub
                    </Button>
                    <Button variant="contained" color="primary" startIcon={<Description />} className={classes.button}>
                        CV
                    </Button>
                </Box>
            </Box>
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
