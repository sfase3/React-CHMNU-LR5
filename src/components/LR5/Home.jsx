import React, { useContext, useEffect } from 'react';
import { HistoryContext } from '../../App';

const Home = () => {
    const {history, setHistory} = useContext(HistoryContext);

    useEffect(() => {
        setHistory([...history, 'Home page'])
    }, [])

    return (
        <div className='flex justify-center items-center text-2xl bg-gray-200 font-bold w-full h-[200px]'>
            Home page
        </div>
    )
}

export default Home;