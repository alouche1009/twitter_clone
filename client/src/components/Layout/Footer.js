import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        position: 'center',
        width: '100%',
        marginTop: 150
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root}>
            <Link to="/">
                <BottomNavigationAction label="Recents" value="recents" icon={<Home />} />
            </Link>
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
    );
}