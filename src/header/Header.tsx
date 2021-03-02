import { ReactElement } from 'react';
import { Box, Button, Typography, makeStyles } from '@material-ui/core';
import { Description, Email, GitHub, Phone } from '@material-ui/icons';
import { grey, teal } from '@material-ui/core/colors';

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
        backgroundColor: teal[100],
        color: grey[600],
        '&:hover': {
            backgroundColor: teal[200],
        },
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
                <Button variant="contained" startIcon={<Email />} className={classes.button}>
                    Email
                </Button>
                <Button variant="contained" startIcon={<Phone />} className={classes.button}>
                    Phone
                </Button>
                <Button variant="contained" startIcon={<GitHub />} className={classes.button}>
                    GitHub
                </Button>
                <Button variant="contained" startIcon={<Description />} className={classes.button}>
                    CV
                </Button>
            </Box>
        </Box>
    );
}
