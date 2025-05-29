import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className="w-full primary_bg">
      <Navbar />
      <Outlet />
      <Footer />
      <div className="border-t border-gray-300 py-4 bg-white">
          <p className="text-center text-sm">©2023 The Bachalors. All rights reserved. Developed by jabirstain3</p>
        </div>
    </div>
  )
}

export default App
