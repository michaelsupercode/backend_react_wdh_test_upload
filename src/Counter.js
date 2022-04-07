import { useState } from 'react'

const Counter = (props) => {
    //... logik teil
    const [counter, setCounter] = useState(1)
    const incrementCounter = () => setCounter(counter + 1)

    // ... view teil
    return <h1 onClick={incrementCounter}>{counter}</h1>
}

export default Counter