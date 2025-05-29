import { Outlet } from "react-router-dom"
import Loader from "./components/loader/Loader"

function App() {

  return (
    <div className="w-full ">
      <Outlet />
      <Loader />
    </div>
  )
}

export default App
