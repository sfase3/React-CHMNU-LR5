import {useEffect, useState} from "react";

const useOffset = () => {
    const [offset, setOffset] = useState(0);

    const onOffsetChange = () => {
        setOffset(window.pageYOffset || window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', onOffsetChange)
        return () => {
            window.removeEventListener('scroll', onOffsetChange)
        }
    })

    return {
        offset, setOffset
    }
};

export default useOffset;