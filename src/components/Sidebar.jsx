import React, { useState } from 'react';

const Sidebar = () => {
    const [val, setVal] = useState(0);
    return (
        <div className='bg-yellow-100 w-48'>
            <h1>UAH TO USD</h1>
            <h3>UAH</h3>
           <input type='number' value={val} onChange={e => setVal(e.target.value)}/>
           <div>USD: {(val/36.53).toFixed(2)}</div>
        </div>
    )
}

export default Sidebar;