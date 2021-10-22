import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

// Route for various path
const App = () => {
  return (
    <div>   
      <Navbar/> 
    <BrowserRouter>
      <Switch>
      <Route path='' component={Home} exact />
      {/* <Route path='/product/:id' component={ProductScreens} /> */}

      </Switch>
      <Footer/>
    </BrowserRouter>
    <Navbar/> 
    </div>
  )
}

export default App
