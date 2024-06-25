import React, { useState, useEffect } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`
    })

    const increment = () => {
        setCount(count => count + 1);
    }

    const decrement = () => {
        setCount(count => count - 1);
    }

    const reset = () => {
        setCount(count => count = 0);
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={decrement}>⬇️</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>⬆️</button>
        </div>
    ); 
}

export default Counter