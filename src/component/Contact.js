import React from 'react';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
// import SocialFlow from "./SocialFlow";

function Contact() {
  return (
    <div>
        <div className='white'>
        <div className='blue'>
        <div className='about'>
        <img src='./car.jpeg'></img>
        <p>ncdn nvjjfn vjjjj jvjgb nvjb jbjb jbnbn bnnbn bhg hgjhj vghthh fgg.</p>

        </div>
        <div className='pages'>
        <p>About</p>
        <p>Reviews</p>
        <p>Policies</p>

        </div>
        <div className='number'>
         <h4>Contact Us</h4>
         <CallOutlinedIcon className='ph'/>
         <p>+7688787987879</p>
         <div className='email'>
         <MailOutlinedIcon className='em'/>
         <p>reapiro@gmail.com</p>
          

         </div>


        </div>
        {/* <SocialFlow /> */}

        </div>

        </div>
    </div>
  )
}

export default Contact