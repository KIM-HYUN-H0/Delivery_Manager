import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Paper,
    Tabs,
    Tab,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    tabWrapper: {
        bottom: 0,
        position: 'fixed',
        width: '100%',
        textAlign: 'center'
    },
    tabs: {
        display: 'inline-block'
    }
})
const Layout = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const classes = useStyles();
    return (
        <>

            {/* //bottom navigation */}
            <Paper elevation={3} className={classes.tabWrapper} square>
                <Tabs
                    value={value}
                    className={classes.tabs}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Link href="/">
                        <Tab label="배달목록" />
                    </Link>
                    <Link href="/map">
                        <Tab label="지도" />
                    </Link>
                    <Link href="/manage">
                        <Tab label="관리자" />
                    </Link>
                </Tabs>
            </Paper>
            {/* //bottom navigation */ }
        </>
    )
}

export default Layout;