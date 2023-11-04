import React, { useContext, useEffect } from 'react';
import { HistoryContext } from '../../App';

const Help = () => {
    const {history, setHistory} = useContext(HistoryContext);

    useEffect(() => {
        setHistory([...history, 'Help page'])
    }, [])

    return (
        <div className='flex justify-center items-center text-2xl bg-red-200 w-full font-bold h-[200px]'>
            Help page
        </div>
    )
}

export default Help;