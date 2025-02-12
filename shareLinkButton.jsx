'use client';

import { LinkIcon }  from '@heroicons/react/20/solid';

import { useState } from "react";

export default function shareLinkButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        setClicked(true);
        setTimeout(() => setClicked(false), 1500);
    };
    // to print the message every time this component rendering
    console.log('[shareLinkbutton] rendering');
    return (
        <button onClick={handleClick}
        className="border flex gap-1 items-center px-2 py-1 rounded 
        text-slate-500 text-sm 
        hover:bg-orange-100 hover:text-slate-700">
            <LinkIcon className='h-4 w-4' />
            {clicked ? 'link copied!' : 'Share Link'}
        
        </button>
    );
}