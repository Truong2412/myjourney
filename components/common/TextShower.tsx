import React, { useEffect, useState } from 'react';
type Props = {
    text: string
}
function TextShower({text}: Props) {
    const textToArr = text.split('');
    const [textShowing, setTextShowing] = useState<string>('')

    useEffect(()=>{
        textShowing.length < text.length && 
        setTimeout(()=>setTextShowing(textShowing+textToArr[textShowing.length]),100)
    },[text,textShowing])
    
    return (
        <p className=' w-full rounded-md bg-slate-500 font-mono text-green-400 p-5 text-xs'>
            {textShowing}
            <span className='animate-textPointer text-black'>|</span>
        </p>
    );
}

export default TextShower;