import React from 'react';
type Props = {
    children: any,
    size: string
}
function Button({children,size}: Props) {
    return (
        <button className={`rounded-[3px] bg-[#001a33] text-white p-1 ${size} hover:bg-blue-400 duration-300`}>
            {children}
        </button>
    );
}

export default Button;