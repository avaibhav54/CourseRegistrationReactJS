import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../api/bootapi"
import axios from "axios";
import { toast } from "react-toastify";
const Allcourse=()=>{

useEffect(()=>{
document.title="All Courses";
},[]);

//function to call server

const getAllCoursesFromServer=()=>{

    axios.get(`http://localhost:8080/courses`).then(
        (response)=>{
                        console.log(response.data);
                        toast.success("Courses load successfully",{
                            position:"bottom-center"
                        })
                        setCourses(response.data)

        },
        (error)=>{
            console.log(error)
            toast.error("Something went wrong")

        }
    )
};
useEffect(()=>{
    getAllCoursesFromServer();
    },[]);

    const [courses,setCourses] = useState([]);


    return (

        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length>0? courses.map((item)=>(
                    <Course key={item.id} course={item}/>
                )) :"No Courses"
            }

        </div>
    )


}

export default Allcourse