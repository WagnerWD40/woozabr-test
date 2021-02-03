import React from 'react';

import {
    Background,
} from './styles/layout';

import Navbar from '../navbar';
import Footer from '../footer';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Background>
                {children}
            </Background>
            <Footer />
        </>
    );
}

export default Layout;