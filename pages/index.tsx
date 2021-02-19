import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {
    Paper,
    Tabs,
    Tab,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    tabWrapper: {
        width: '100%',
        textAlign: 'center'
    },
    tabs: {
        display: 'inline-block'
    }
})

const Index = () => {

    const [value, setvalue] = useState(0);

    const handleChange = (event, newValue) => {
        setvalue(newValue);
    }
    const classes = useStyles();

    return (
        <>
            <Paper elevation={3} className={classes.tabWrapper} square>
                <Tabs
                    value={value}
                    className={classes.tabs}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab label="대기중" value={0} />
                    <Tab label="완료" value={1}/>
                </Tabs>
            </Paper>
        </>
    )
}

export default Index;