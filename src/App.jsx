// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import GlobalRouter from "./Global/GlobalRouter";
import { Provider } from "react-redux";
import store from "./Redux/store";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store}>
        <GlobalRouter />
      </Provider>
    </div>
  )
}

export default App
