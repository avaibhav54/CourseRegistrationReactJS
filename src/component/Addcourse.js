import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label,Input,Button,FormText, Container } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse=()=>{

  const [course,setCourse] = useState({});

  const handleForm=(e)=>{
    postDataToServer(course)
console.log(course)
e.preventDefault()
  }

//server

const postDataToServer=(data)=>{
axios.post(`http://localhost:8080/course`,data).then(

  (response)=>{
    console.log(response.data);
    toast.success("Courses added successfully",{
        position:"bottom-center"
    })

},
(error)=>{
console.log(error)
toast.error("Something went wrong")

}
)
}


    return (

        <div>

<h1 className="text-center"> Fill Course Details</h1>
<Form onSubmit={handleForm}>
<FormGroup>
    <Label for="exampleEmail">
      Course Id
    </Label>
    <Input
      id="id"
      name="id"
      placeholder="Enter here"
      type="text"

      onChange={
        (e)=>{
          setCourse({...course,id:e.target.value});
        }
      }

    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleEmail">
      Course Title
    </Label>
    <Input
      id="title"
      name="title"
      placeholder="Enter here"
      type="text"
      onChange={
        (e)=>{
          setCourse({...course,title:e.target.value})
        }
      }
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Course description
    </Label>
    <Input
      id="description"
      name="description"
      placeholder="Enter here"
      type="textarea"

      onChange={
        (e)=>{
          setCourse({...course,description:e.target.value})
        }
      }
    />
    </FormGroup>
  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
     
    </FormText>
  </FormGroup>
  <Container className="text-center">


  <Button type="submit"> 
    Add Course
  </Button>
  </Container>
</Form>
        </div>
    )
}

export default AddCourse