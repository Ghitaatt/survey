import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




function HomePage() {

  return (
     <>
    <h1 style={{color:"DarkBlue"}}><marquee width="100%" direction="right" height="70px" scrollamount="12" >Survey Home</marquee></h1>
    <Link to="/create"><Button variant="outline-success" type='submit'>Create a new survey</Button></Link>

      
    
    </>
  )
}

export default HomePage;
