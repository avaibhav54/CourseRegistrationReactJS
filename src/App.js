import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import {ToastContainer,toast} from "react-toastify";

import home from './component/home';
import Course from './component/Course';
import AllCourses from './component/AllCourses'
import AddCourse from './component/Addcourse';
function App() {

  const btnhndle = () =>{

    toast("This is my first message");
  };
  return (
  
   <div>
     <ToastContainer/>
     <home/>
<AllCourses/>

<AddCourse/>

   </div>

  );
}

export default App;
