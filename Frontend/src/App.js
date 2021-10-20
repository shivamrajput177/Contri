import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './pages/Home'

// Route for various path
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      
      <Route path='' component={Home} exact />
      {/* <Route path='/product/:id' component={ProductScreens} /> */}

      </Switch>
    </BrowserRouter>
  )
}

export default App
