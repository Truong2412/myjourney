import clsx from 'clsx';
import React from 'react';
type Props = {
    text: string,
    value?: string,
    size : string,
    boxColor: string
}
function TopicCard({text,value,size,boxColor}: Props) {
    const boxShadow = `shadow-${boxColor}`
    const boxHoverShadow = `hover:shadow-${boxColor}Hover`
    return (
        <div className={`cursor-pointer rounded-[10px]  text-center p-6 ${size} ${boxShadow} ${boxHoverShadow}`}>
            {text}
        </div>
    );
}

export default TopicCard;