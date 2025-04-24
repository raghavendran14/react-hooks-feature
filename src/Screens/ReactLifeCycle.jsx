import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useReducer } from "react";
import { useImperativeHandle } from "react";
import { useLayoutEffect } from "react";

// import React, { useState, useEffect } from "react";

const ReactLifeCycle = () => {
    const [count, setCount] = useState(0);
    const [showChild, setShowChild] = useState(true);

    // 🔹 Runs only once on mount
    useEffect(() => {
        console.log("🟢 Parent Mounted");

        return () => {
            console.log("🔴 Parent Unmounted");
        };
    }, []);

    // 🔄 Runs on every count update - similar cpmponentDidUpdate / getDerivedFromProps
    useEffect(() => {
        if (count > 0) {
            console.log("🔁 Count Updated:", count);
        }
    }, [count]);

    return (
        <div>
            <h1>React Hooks Lifecycle Demo</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>
            <button onClick={() => setShowChild(!showChild)}>
                {showChild ? "Hide" : "Show"} Child Component
            </button>

            {showChild && <Child />}
        </div>
    );
};

const Child = () => {
    useEffect(() => {
        console.log("👶 Child Mounted");

        return () => {
            console.log("💨 Child Unmounted");
        };
    }, []);

    return <p>I am a child component</p>;
};

export default ReactLifeCycle;
