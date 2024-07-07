import {Button, Navbar, Container, NavDropdown, Nav, Form } from 'react-bootstrap';
import '../App.css';
import { ImSpoonKnife } from "react-icons/im";


const NavbarHeading = () => {

  return (
    <Navbar expand="lg" className="App">
      <Container fluid>
        <Navbar.Brand href="#"><span><ImSpoonKnife /></span> Cuisinart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Top Sale</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Knives</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Cutting boards </NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Set of pots </NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Mixing bowls </NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Whisks </NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Slotted spoons </NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Dough cutters </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled> About Us </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeading;