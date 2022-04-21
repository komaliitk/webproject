import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import About from './components/about/about'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Education from './components/Pages/Education'
import Innovations from './components/Pages/Innovations'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
            {/* {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            } */}
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path ="/user">
          {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
           
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/services">
            <Services />
          </Route>

          <Route path="/education">
            <Education />
          </Route>

          <Route path="/innovations">
            <Innovations />
          </Route>



        </Switch>
      </Router>
    </div>
  );
}

export default App;
