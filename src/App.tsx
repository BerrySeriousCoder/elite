import { Route, BrowserRouter as Router, Routes ,  } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import PricingPage from './pages/pricing'
import AboutUs from './pages/aboutus'
import ContactUs from './pages/contactus'

function App() {

  return (
    <>
          <div> 
           
            <Router>
               <Navbar></Navbar>
               <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/aboutus" element={<AboutUs></AboutUs>} />
                <Route path="/contactus" element={<ContactUs></ContactUs>} />
               </Routes>
            </Router>
            <Footer></Footer>
          </div>
    </>
  )
}

export default App
