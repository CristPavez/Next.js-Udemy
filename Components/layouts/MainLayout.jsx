import React from 'react'
import styles from "./MainLayout.module.css";
import   NavBar   from '../NavBar';
import Head from "next/head";

export const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>
                { children }
            </main>

        </div>
    );
}
