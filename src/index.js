import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, Outlet ,Routes, Link , BrowserRouter as Router} from 'react-router-dom';
import OP from './OP';
import About from './About';
import Registration from './Registration';
import Team from './Team';
import Details from './Details';
import Home from './Home';
import OwnerPortal from './OwnerPortal';

const routing = (
  <Router>
    <div style={{backgroundColor:"rgb(220,20,60)",padding:"5px",border:"2px solid black"}}>
    <Link to="/"><img src="./R1.png" height="120px"/></Link>
    <Link to="/"> <img src="./home.png" height="50px"/> </Link> 
    <Link to="/About"> <img src="./R.png" height="50px"/> </Link> 
    <Link to="/OP"> <img src="./owner.png" height="50px"/> </Link> 
    <Link to="/Buy"> <img src="./buy2.png" height="70px"/> </Link> 
    <Link to="/Team"> <img src="./team.png" height="50px"/> </Link>
    <Link to="/Contact"><img src="./contact.png" height="50px"/></Link>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/OP" element = {<OP/>}/>
      <Route path="/Buy" element={<Registration/>}/>
      <Route path="/Team" element={<Team/>}/>
      <Route path="/Details/:id" element={<Details/>}/>
      <Route path="*"  element = { <NotFound /> }  />
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/StudentPortal/:id" element= {<OwnerPortal/>} />
      <Route path="/Login" element= { <OP />  }>
          <Route index element= { <OP />  }  />
          <Route path="Registrations" element= { <Registration />  }  />
      </Route> 
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

function NotFound(){
  return(
    <div align="center">
      <h3>Requested Page not found ,Please check URL</h3>              
    </div>

  )
}

function Contact(){
  return(
    <>
    <div style={{textAlign:"center", padding:"5%" , border:"2px solid black",margin:"20%",marginTop:"5px"}}>
     <h1>To buy a GTR, or to know more about it, Call KD : 9354554860</h1>
    </div>
    </>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
