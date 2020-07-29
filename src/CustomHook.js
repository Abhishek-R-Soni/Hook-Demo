// creating custom hook
import React, {useState} from 'react';

function useCustomCounter(){
    // declaring useState
    const [count, setCount] = useState(0)

    // increment count
    const handleCount = () => {
        setCount(count + 1)
    }

    return {
        count,
        handleCount
    }
}

export default useCustomCounter;