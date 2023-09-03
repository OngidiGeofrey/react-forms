import React from 'react'

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
    <input type='password'npm placeholder='confirm Password'/><br/><br/>
    <button className='btn'>Register</button>
    </form>

  </div>
  <div className='col-2'>
    
  </div>
  </div>
  
    </section>
  
  )
}
