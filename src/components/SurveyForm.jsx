import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SurveyForm() {
  return (
  <>
        <h1 style={{color:"DarkBlue"}}><marquee width="100%" direction="right" height="70px" scrollamount="12" >Answer the survey </marquee></h1>
      <form >

        <Form.Control 
          type="text"
          placeholder="Enter your response"/><br/>
      <Button variant="outline-primary" type='submit'>submit</Button>
      </form>
    </>
  )
}

export default SurveyForm