import React from 'react'
import "./App.css"
import Signup from './Components/Signup';
import Restaurant from './Components/Restaurant';
import Outlet from './Components/Outlet';

function App() {
  return (
    <div className="default">
      {/* <Signup/> */}
      {/* <Restaurant/> */}
      <Outlet/>
    </div>
  )
}

export default App
