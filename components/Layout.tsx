import React from 'react';
import TextShower from './common/TextShower';
import Footer from './Footer';
import Header from './Header';

function Layout({children}: any) {
    return (
        <div className="w-full">
            <Header />
            <main>
                <TextShower text="<p> Im just a internship, but i have something to share if you are newbie, hope all i have can help you better........... </p>" />
                {children}
            </main>
            <footer className="text-center">
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;