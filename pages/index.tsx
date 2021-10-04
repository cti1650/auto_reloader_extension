import React, { useEffect, useState } from 'react';
import { useChromeExtension } from '../hooks/useChromeExtension';

const Pages = () => {
    const sampleUrl = '';
    const { tabPageUrl, tabPageTitle } = useChromeExtension();
    // console.log(data);
    return (
        <>
            <div className='my-1 mx-6 w-80 h-1/2'>
                <h1 className='text-2xl text-center font-extrabold'>
                    Auto Reloader Extension
                </h1>
                <div className='pt-5 w-full truncate text-xs'>
                    ページURL : {tabPageUrl || sampleUrl}
                </div>
            </div>
        </>
    );
};

export default Pages;
