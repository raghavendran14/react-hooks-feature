## React + Vite

### 1. Create the Vite App - npm
npm create vite@latest react-hooks-lifecycle -- --template react

### 2. Yarn
yarn create vite react-hooks-lifecycle --template react

### 3. Install Dependencies
npm run dev

### 4. Build for Production
npm run build

### 5. Preview the Production Build
npm run preview


# ⚛️ React Hooks Lifecycle Explained

React Function Components don’t use traditional lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. Instead, they use **React Hooks** like `useEffect` to manage side effects and lifecycle events.

---

## 📌 What is `useEffect`?

`useEffect` is the primary hook used for performing side effects in function components such as:
- Data fetching
- Subscriptions
- Logging
- Event listeners

### Syntax:
```jsx
useEffect(() => {
  // Runs on mount and updates
  return () => {
    // Cleanup logic, runs on unmount
  };
}, [dependencies]);
```

---

## 🧬 Lifecycle Comparison: Class vs Hooks

| Lifecycle Phase      | Class Component             | React Hooks Equivalent                      |
|----------------------|-----------------------------|----------------------------------------------|
| Mount (initial load) | `componentDidMount`         | `useEffect(() => { ... }, [])`               |
| Update               | `componentDidUpdate`        | `useEffect(() => { ... }, [dependency])`     |
| Unmount              | `componentWillUnmount`      | `useEffect(() => { return () => {...} }, [])`|

---

## 🔁 Full Example

```jsx
import React, { useState, useEffect } from "react";

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);

  // Mount only
  useEffect(() => {
    console.log("🟢 Parent Mounted");

    return () => {
      console.log("🔴 Parent Unmounted");
    };
  }, []);

  // On count update
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
      console.log("🚨 Child Unmounted");
    };
  }, []);

  return <p>I am a child component</p>;
};

export default LifecycleDemo;
```

---

## 🧠 Summary

- `useEffect(() => { ... }, [])` → Runs on **mount**, and returns function runs on **unmount**
- `useEffect(() => { ... }, [dep])` → Runs on **update when dep changes**
- Always clean up subscriptions, intervals, and listeners in the returned function

---

## 🛠 Common Use Cases

| Task                     | Implementation                          |
|--------------------------|-------------------------------------------|
| Fetch data on mount      | `useEffect(() => fetchData(), [])`       |
| Set up event listener    | `useEffect(() => { window.addEventListener(...) }, [])` |
| Handle interval/timer    | Use `setInterval` inside `useEffect` with cleanup |
| Unsubscribe from streams | Cleanup logic in `return () => { ... }`   |

---

## 📌 Pro Tips

- Always define dependencies properly in the dependency array
- Always return a cleanup function when using effects that register something (like a timer or event)

---


# 🧰 React Redux Setup and Basics (JavaScript)

Redux helps manage application state in a predictable way. Here's how to integrate Redux in a Vite + React app using plain JavaScript.

---

## 🔧 Step 1: Install Required Packages

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 🏗️ Step 2: Setup Redux Store

### Create `src/store.js`:
```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

## 🧩 Step 3: Create a Slice

### Create `src/features/counterSlice.js`:
```js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    reset: (state) => { state.value = 0 }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## 🌍 Step 4: Wrap App with Redux Provider

### Update `main.jsx`:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## ⚙️ Step 5: Use Redux in Components

### Example in `App.jsx`:
```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default App;
```

---

## ✅ Summary

- Redux helps manage global state
- `createSlice` simplifies reducer + actions
- Use `useSelector` to access state, `useDispatch` to update it







