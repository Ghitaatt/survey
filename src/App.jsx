import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CreateSurvey from './components/CreateSurvey'
import HomePage from './components/HomePage'
import Survey from './components/Survey'
import SurveyForm from './components/SurveyForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {

  return (
    <>
        <BrowserRouter>

    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Survey</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/create">Create</Nav.Link>
            <Nav.Link as={Link} to="/survey">survey</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

      <Routes>
        <Route  index element={<HomePage/>}/>
        <Route  path='/home' element={<HomePage/>}/>
        <Route  path='/create' element={<CreateSurvey/>}/>
        <Route  path='/survey' element={<Survey/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
