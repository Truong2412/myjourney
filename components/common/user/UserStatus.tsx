import React from 'react';

function UserStatus() {
    return (
        <div className="w-2/3 flex gap-2 flex-row-reverse">
            <img className=" rounded-[50%] w-[40px]" alt="useImg" src='https://i.pravatar.cc/150' />
            <div className="grid">
                <span className='self-center text-xs'>Truongochco</span>
            </div>
        </div>
    );
}

export default UserStatus;