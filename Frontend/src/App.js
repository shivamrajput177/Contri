import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Form from './components/Forms/Form'
import InForm from './components/Forms/InForm'
import Footer from './components/Footer/Footer'
import PropertyDetails from './pages/Property/PropertyDetails'

// Route for various path
const App = () => {
  return (
    <div>   
      <Navbar/> 
    <BrowserRouter>
      <Switch>
      <Route path='/' component={Home} exact />
      
      <Route path = '/signup' component = {Form}/>
      <Route path = '/signin' component = {InForm}/>
      <Route path = '/propertyname' component = {PropertyDetails}/>
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
    <Navbar/> 
    </div>
  )
}

export default App