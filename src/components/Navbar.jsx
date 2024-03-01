import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt="Logo Navigasi"
              src="/vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Haikal - <span className="text-warning">Movie</span>
          </Navbar.Brand>
          <Nav className="justfiy-content-end">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/search" className="nav-link">
              Search Movie
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
