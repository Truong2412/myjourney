import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';

function Layout({children}: any) {
    return (
        <div className="w-full">
            <Header />
            <main>
                {children}
            </main>
            <footer className="text-center">
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;