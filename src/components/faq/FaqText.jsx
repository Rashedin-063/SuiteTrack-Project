import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const FaqText = () => {
    const [text] = useTypewriter({
        words: ['Frequently Asked Question', 'Frequently Asked Questions'],
        loop: 2,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div>        
            <div className='App'>
            <span>{text}</span>
            <Cursor cursorColor='blue' />
        </div>

        </div>
    );
};

export default FaqText;