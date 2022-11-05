import React from 'react';
import UserStatus from './common/user/UserStatus';

function Header() {
    return (
        <div className='flex flex-nowrap gap-4 p-2   border-b-[1px] border-white'>
            <div className="w-1/3 grid">
               <span className='self-center'> MY DEV JOURNEY</span>
            </div>
        
            <UserStatus />

        </div>
    );
}

export default Header;