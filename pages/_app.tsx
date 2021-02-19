import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from '../src/Layout';

export default class RootApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, ...other } = this.props;
        return (
            <>
                <Head>
                    <title>Delivery Manager</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    <meta name="description" content="My First Static Website" />
                    <meta name="keywords" content="nextjs,static,website" />
                    {/* <style global jsx>
                        {`
                            html, body, #__next {
                                height: 100%;
                                width: 100%;
                                overflow: hidden;
                            }
                        `}
                    </style> */}
                </Head>
                <CssBaseline />
                <Layout />
                <Component {...other} />
            </>
        );
    }
}