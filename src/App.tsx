import { ReactElement } from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import { Email, Phone, GitHub, Description } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    main: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        <main className={classes.main}>
            <Typography variant="h1">Nicholas Hill</Typography>
            <section className={classes.buttonGroup}>
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
            </section>
        </main>
    );
}
