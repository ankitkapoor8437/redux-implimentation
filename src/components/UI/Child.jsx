import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue, decrementByValue, incrementByTypedValue, decrementByTypedValue } from "../../features/counter/counterSlice";


const Child = () => {
    const count = useSelector((c) => c.counter.value);
    const dispatch = useDispatch();

    const [input, setInput] = useState(0);

    const handleInput = (e) => {
        setInput(Number(e.target.value));
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "40%",
                    alignItems: "center",
                }}
            >
                <input type="number" name='number' onChange={handleInput} value={input} />
                <br />
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(incrementByValue(10))}>Increment by value</button>
                <button onClick={() => dispatch(incrementByTypedValue(input))}>Increment by Typed value</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(decrementByValue(20))}>Decrement By Value</button>
                <button onClick={() => dispatch(decrementByTypedValue(input))}>Decrement Typed By Value</button>
            </div>
        </>
    )
}

export default Child