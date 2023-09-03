import React from 'react'
import bg_image from './assets/download.jpg'
export default function form() {
  return (
    
    <section>
  <div className="register">
  <div className='col-1'>
    <h2>Sign In</h2>
    <span>Register and Enjoy the service</span>
    <form id='form' className='fle flex-col'>
    <input type='text' placeholder='username' /> <br/><br/>
    <input type='password' placeholder='Password' /><br/><br/>
    <input type='password' placeholder='confirm Password'/><br/><br/>
    <input type='phone' placeholder='Phone Number'/><br/><br/>
    <button className='btn'>Sign In</button>
   
    </form>

  </div>
  <div className='col-2'>
    <img src={bg_image} alt='bg_image'></img>
    
  </div>
  </div>
  
    </section>
  
  )
}
