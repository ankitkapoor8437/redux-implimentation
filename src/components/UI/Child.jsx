import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from "../../features/counter/counterSlice";
 

const Child = () => {
    const count = useSelector((c) => c.counter.value);
    const dispatch = useDispatch();
    return(
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
            <button onClick={() => dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </>
    )
}

export default Child