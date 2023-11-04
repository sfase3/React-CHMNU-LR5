import React, {useState} from 'react';

const Header = ({txt, updateText}) => {
    const [text, setText] = useState('');

    const updateFooter = () => {
        setText(text === 'helloFooter' ? 'goodbyeFooter' : 'helloFooter');
        updateText(text === 'helloFooter' ? 'goodbyeFooter' : 'helloFooter');
    };

    return (
        <div className='bg-red-400 flex flex-col'>
        <div>
            {txt}
        </div>
        <button className='ml-2' onClick={updateFooter}>change footer text</button>
        </div>
    )
}

export default Header;