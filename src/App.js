import React,{useState} from 'react';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//layouts
import Footer from './layouts/Footer';

//pages
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";

//router -dom
import {Route,Switch,BrowserRouter as Router} from "react-router-dom";

//context 
import { UserContext } from './context/context';

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import Header from './layouts/NavBar';

//init firebase
import config from "./Configuration/config";
firebase.initializeApp(config);



const App=() =>{
  //const context =useContext(UserContext);
  const [user,setUser] =useState(null);
  
  return (
    <Router>
      <UserContext.Provider value={{user,setUser}}>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path ="*" component={PageNotFound} />
        </Switch>     
       <Footer />
    </UserContext.Provider>
    </Router>
  )
}

export default App
