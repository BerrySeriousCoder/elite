import { Route, BrowserRouter as Router, Routes ,  } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
          <div> 
            <Navbar></Navbar>
            <Router>
               <Routes>
                <Route path='/' element={<Home></Home>} />
               </Routes>
            </Router>
          </div>
    </>
  )
}

export default App
