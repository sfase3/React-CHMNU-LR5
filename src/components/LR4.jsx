import React, { useEffect, useState } from 'react';
import useOffset from '../hooks/useOffset';
import useWindowSize from '../hooks/useWindowSize';
import styles from '../styles/styles.css';

const LR4 = () => {
    const position = useOffset();
    const {windowWidth, windowHeight} = useWindowSize();

    const [effectState, setEffectState] = useState(0)
    const [notEffectState, setNotEffectState] = useState(0);

    useEffect(() => {
        console.log('useEffect dependencies was changed');
    }, [effectState])

    return (
        <div className={styles.lr4_wrapper}>
            
            <div className='bg-gray-300'>
            <div>
                Use effect dependencies example
            </div>
            <div className={styles.button_wrapper}>
                <button onClick={() => setEffectState(effectState + 1)} className='bg-red-200'>Change effect dep state</button>
                <button onClick={() => setNotEffectState(notEffectState + 1)} className='bg-green-200'>Change non-effect dep state</button>
            </div>
            <div>
                <div>
                    useEffect state changes times: {effectState}
                </div>
                <div>
                    not-useEffect state chages times: {notEffectState}
                </div>
            </div>
            </div>
            <div className={styles.hook_list}>Page offset: {position.offset}</div>
            <div>1. useOffset hook</div>
            <div>
                2. Window Size hook
            </div>
            <div>Window height: {windowHeight}</div>
            <div>Window width: {windowWidth}</div>
        </div>
    )
}

export default LR4;