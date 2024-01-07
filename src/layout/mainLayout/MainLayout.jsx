import { Outlet } from "react-router-dom"
import Navber from "../../components/navber/Navber"
import Footer from "../../components/footer/Footer"

const MainLayout = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout