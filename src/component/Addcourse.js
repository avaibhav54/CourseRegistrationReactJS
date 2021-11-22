import React from "react";

import { Form, FormGroup, Label,Input,Button,FormText, Container } from "reactstrap";



const AddCourse=()=>{
    return (

        <div>

<h1 className="text-center"> Fill Course Details</h1>
<Form>
<FormGroup>
    <Label for="exampleEmail">
      Course Id
    </Label>
    <Input
      id="user  id"
      name="id"
      placeholder="Enter here"
      type="text"
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


  <Button>
    Add Course
  </Button>
  </Container>
</Form>
        </div>
    )
}

export default AddCourse