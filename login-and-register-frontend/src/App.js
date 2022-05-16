import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import About from './components/about/about'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Education from './components/Pages/Education'
import Innovations from './components/Pages/Innovations'
import Career from "./components/Career";
import Jobs from './components/Jobs';
import Ad from './components/Ad';





// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({});
  const [admin,setAdmin]=useState(false);
  
  useEffect(() => {
    check()
  }, [])
  const check = () => {
    
    if(user.name=="admin"){
      setAdmin(true);
    }else{
      setAdmin(false);
    }

}

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
          <Route path="/career">
            <Career />
          </Route>

          <Route path="/jobs">
            <Jobs />
          </Route>

          <Route path="/admin">
            <Ad />
          
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
