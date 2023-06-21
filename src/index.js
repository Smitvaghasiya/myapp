import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './About';
import { Contact } from './Contact';
import { Header } from './Header';
import { Footer } from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Layout} from './Layout';
import { Home } from './Home';
import { AllFaculty } from './AllFaculty';

const root = ReactDOM.createRoot(document.getElementById('root'));

// day -1
// const Welcome = (props)=>{ return (
//   <>
//     <h1>Hii {props.name}</h1>
//     <h2>hello</h2>
//   </>)
// }


// root.render(
//   <>
//     <Welcome name="Yesss"/>
//   </>
// );

// day - 2 routing 

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout/>} >
          <Route path='/Home'  element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/AllFaculty' element = {<AllFaculty/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

