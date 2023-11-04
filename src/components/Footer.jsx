import React, { useState } from 'react';

const Footer = ({txt, updateText}) => {
    const [text, setText] = useState('');

    const updateHeader = () => {
        setText(text === 'helloHeader' ? 'goodbyeHeader' : 'helloHeader');
        updateText(text === 'helloHeader' ? 'goodbyeHeader' : 'helloHeader');
    };

    return (
        <div className='bg-red-600 flex flex-col'>
        <div>
            {txt}
        </div>
        <button className='ml-2' onClick={updateHeader}>change header text</button>
        </div>
    )
}

export default Footer;