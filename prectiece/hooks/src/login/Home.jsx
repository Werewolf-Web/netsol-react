

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


const Home = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  return (
    <>
      
    

      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Hello..! {user.username}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{user.username}</a>
          </Navbar.Text>
            <Button variant="outline-success" onClick={handleLogout}
            className='gap-3 px-2 mx-2'
            >Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
};

export default Home;
