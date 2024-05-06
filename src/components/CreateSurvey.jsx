import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateSurvey() {

 const [question, setQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuestion(question);
    setQuestion('');
  
  };

  return (
    <>
          <h1 style={{color:"DarkBlue"}} ><marquee width="100%" direction="right" height="70px" scrollamount="12" >Create a new survey </marquee></h1>
      <form onSubmit={handleSubmit}>
        
      <Form.Control 
          type="text"
          placeholder="Enter you question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}/><br/>
      <Button variant="outline-primary" type='submit'>Create</Button>
      </form>
       {submittedQuestion && (
        <div>
          <h2>Question :</h2>
          <p>{submittedQuestion}</p>
        </div>
      )}
    </>
  )
}

export default CreateSurvey;
