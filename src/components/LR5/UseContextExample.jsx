import React, { useContext } from 'react';
import { FirstContext, HistoryContext } from '../../App';

const UseContextExample = () => {
    const {firstCt, setFirstCt} = useContext(FirstContext);
    const {history} = useContext(HistoryContext);

    return (
        <div className='bg-yellow-100 w-full'>
            <div>{history}</div>
            <div>Change first context</div>
            <div>value: {firstCt}</div>
            <button onClick={() => setFirstCt(String(Math.random()))}>Update context value</button>
            <div className='flex mt-10'>
            <h1 className='font-bold mr-2'>History:</h1>
            {
                history.map(el => <div className='mr-1' key={Math.random()}>{el},</div>)
            }
            </div>
        </div>
    )
}

export default UseContextExample;