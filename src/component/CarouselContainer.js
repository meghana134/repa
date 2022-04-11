import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Button from "@mui/material/Button";

import image1 from './../assets/images/1.jpg';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpg';
import Search from './Search';
import Location from './Location';
import {useNavigate} from "react-router-dom"

const CarouselContainer = () => {
  const navigate = useNavigate();
  return (
    <>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='logo'>
     <img src='./d.png'></img>

    </div>
    <div className='search'>
    <Search/>
    <div className='login'>
    {/* <button className='button' component={Link} to="/log" >Login/SignUp</button> */}
    {/* <button className='button' onClick={()=>{navigate.push("./log")}}>Login/SignUp</button> */}
    <Button component={Link} to="/Login" variant="outlined" className="loginBtn" style={{backgroundColor:"  #1063de", border:"1px solid white", height:"45px",
  width: "156px", color:"white", borderRadius:" 29px"}}>
                Login/ signUp
              </Button>
    <div className='location'>
    <Location/>
    </div>

    </div>

    </div>
    
</>
  )
}

export default CarouselContainer;