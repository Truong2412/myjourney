import React from 'react';
import TextShower from './common/TextShower';
import Footer from './Footer';
import Header from './Header';

function Layout({children}: any) {
    return (
        <div className="w-full">
            <Header />
            <main>
                <TextShower text="Coding somehow is best choice for every body.........." />
                {children}
            </main>
            <footer className="text-center">
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;