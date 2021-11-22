import React, { useState } from "react";
import Course from "./Course";

const Allcourse=()=>{
    const [courses,setCourses] = useState(
[

{title:"Django", description:"This is a complete django course from begineers"},
{title:"React", description:"This is a complete react course from begineers"}

]
    )


    return (

        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length>0? courses.map((item)=>(
                    <Course course={item}/>
                )) :"No Courses"
            }

        </div>
    )


}

export default Allcourse