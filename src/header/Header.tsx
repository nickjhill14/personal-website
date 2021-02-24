import { ReactElement } from 'react';
import { Box, Button, Typography, makeStyles } from '@material-ui/core';
import { Description, Email, GitHub, Phone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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

export default function Header(): ReactElement {
    const classes = useStyles();

    return (
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
    );
}
