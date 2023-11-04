import React, { useContext, useEffect } from 'react';
import { HistoryContext } from '../../App';

const About = () => {
    const {history, setHistory} = useContext(HistoryContext);

    useEffect(() => {
        setHistory([...history, 'About page'])
    }, [])

    return (
        <div className='flex justify-center items-center text-2xl bg-green-100 font-bold w-full h-[200px]'>
            About page
        </div>
    )
}

export default About;