import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link';

import {
    Paper,
    Tabs,
    Tab
} from '@material-ui/core';

const Layout = () => {
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Active" />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                </Tabs>
            </Paper>
        </>
    )
}

export default Layout;