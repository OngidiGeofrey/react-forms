import React from 'react'
import bg_image from './assets/download.jpg';
import { useForm } from "react-hook-form";
export default function Form() {
    const {register,handleSubmit}=useForm();
    const onSubmit=(d)=> {
      console.log(JSON.stringify(d));
    }
  return (
    
    <section>
  <div className="register">
  <div className='col-1'>
    <h2>Sign In</h2>
    <span>Register and Enjoy the service</span>
    <form id='form'   onSubmit={handleSubmit(onSubmit)} className='fle flex-col'>
    <input type='text' {...register("username")} placeholder='username' /> <br/><br/>
    <input type='password' {...register("password")} placeholder='Password' /><br/><br/>
    <input type='password' {...register("confirm_password")} placeholder='confirm Password'/><br/><br/>
    <input type='phone' {...register("phone_number")} placeholder='Phone Number'/><br/><br/>
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
