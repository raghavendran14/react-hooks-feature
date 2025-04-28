import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../Redux/CouterSlice";
import { login, logout } from "../Redux/UserSlice";

const ReduxDemo = () => {
    // const [count, setCount] = useState(0);
    // const dispatch = useDispatch();
    // const reduxCount = useSelector((state) => state.count);

    // useEffect(() => {
    //     console.log("Redux Count Updated:", reduxCount);
    // }, [reduxCount]);

    // const increment = () => {
    //     setCount(count + 1);
    //     dispatch({ type: "INCREMENT" });
    // };

    // return (
    //     <div>
    //         <h1>Redux Demo</h1>
    //         <button onClick={increment}>Increment</button>
    //         <p>Local Count: {count}</p>
    //         <p>Redux Count: {reduxCount}</p>
    //     </div>
    // );

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const reduxCount = useSelector((state) => state.counter.count);
    // console.log("Redux Count:", reduxCount);

    //Similar to ComponentDidUpdate
    // This effect runs when reduxCount changes
    useEffect(() => {
        console.log("Redux Count Updated:", reduxCount);
        if (reduxCount) {
            setCount(reduxCount);
        }
    }, [reduxCount]);

    const countIncrement = () => {
        console.log("Incrementing  ");
        dispatch(increment());
    }

    return (
        <div>
            <h1>Redux Demo</h1>
            <button onClick={countIncrement}>Increment</button>
            <p>Local Count: {count}</p>
            <p>Redux Count: {reduxCount}</p>
            <button onClick={() => {
                dispatch(login({
                    user: "John Doe",
                    token: "sbnsbnsbnsbnsbns",
                    isLoggedIn: true,
                    isLoading: false,
                    error: null,
                    success: true,
                    message: "Login successful"
                }))
            }}>Login</button>
            <button onClick={() => {
                dispatch(logout({
                    user: null,
                    token: null,
                    isLoggedIn: false,
                    isLoading: false,
                    error: null,
                    success: true,
                    message: "Logout successful"
                }))
            }}
            >
                Logout
            </button>
        </div>
    );
}

export default ReduxDemo;