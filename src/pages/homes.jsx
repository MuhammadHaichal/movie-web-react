import { useState } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

import Navbars from "../components/Navbar.jsx";

const Homes = () => {
  return (
    <>
      {/* navbar start */}
      <header>
        <Navbars />
      </header>
      {/* navbar end */}

      {/* pembukaan website start */}
      <div className="hero-bg ">
        <Container>
          <div className=" py-5">
            <h1 className="text-left text-light" style={{ fontsize: "2.3em" }}>
              Selamat Datang
            </h1>
            <p className="text-white">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>
        </Container>
      </div>
      {/* pembukaan website end */}
      
      
    </>
  );
};

export default Homes;
