import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import Home from "../Components/Home"
import Footer from "../Components/Footer"
import "../App.css"
const UserLayout = () => {
  return (
    <div className="app-shell">
        <Header/>
        <Navbar/>
        <Home/>
        <Footer/>
    </div> 
    

   
  )
}



export default UserLayout
