import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Form from './components/Forms/Form'
import Footer from './components/Footer/Footer'

// Route for various path
const App = () => {
  return (
    <div>   
      <Navbar/> 
    <BrowserRouter>
      <Switch>
      <Route path='/' component={Home} exact />
      
      <Route path = '/form' component = {Form}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
    <Navbar/> 
    </div>
  )
}

export default App
