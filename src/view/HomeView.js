import React, {useEffect, useState} from 'react'

export const HomeView = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h1>This is the HomeView</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
    )
}
