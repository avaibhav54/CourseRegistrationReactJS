import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from 'reactstrap';
import {ToastContainer,toast} from "react-toastify";


import Home from './component/home';
import Course from './component/Course';
import AllCourses from './component/AllCourses'
import AddCourse from './component/Addcourse';
import Header from './component/header';
import Menus from './component/Menus';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Allcourse from './component/AllCourses';

function App() {

  const btnhndle = () =>{

    toast("This is my first message");
  };
  return (
  
   <div>
    
    <Router>
    <ToastContainer/>
     <Container>

     <Header/>
       <Row>
       <Col md ={4}>
         <Menus/>
       </Col>
       <Col md ={8}>


         <Routes>
       <Route exact path='/' element={<Home/>}></Route>
       <Route path="/add-course" element={<AddCourse/>} exact />
       <Route path="/all-courses" element={<Allcourse/>} exact />
       <Route path="/" component={Home} exact />
         </Routes>

       </Col>
       </Row>
     </Container>
    </Router>
  


   </div>

  );
}

export default App;
