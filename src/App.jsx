import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <div className="w-full primary_bg">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
