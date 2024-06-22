import React from 'react';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import MessageBubble1 from '../images/MessageBubble1.png';
import MessageBubble2 from '../images/MessageBubble2.png';
import FormBgImage3 from '../images/FormBgImage3.png';
import FormBgLaptopImage4 from '../images/FormBgLaptopImage4.png';



function LogInSignUp() {
  
  return (
    <div className='w-full h-[607px] bg-[#2563eb] flex flex-col items-center justify-center relative overflow-y-hidden'>

      <div className='absolute top-[160px] left-[290px] z-20'>
        <img src={MessageBubble1} alt="FormImage" className='h-20 w-52' />
      </div>
      <div className='absolute bottom-[70px] right-[280px] z-20'>
        <img src={MessageBubble2} alt="FormImage" className='h-28 w-56' />
      </div>
      <div className='absolute bottom-[10px] left-[10px]'>
        <img src={FormBgImage3} alt="FormImage" className='h-32 w-32' />
      </div>
      <div className='absolute top-[10px] right-[10px]'>
        <img src={FormBgImage3} alt="FormImage" className='h-32 w-32' />
      </div>
      <div className='absolute top-[45px] right-[273px]'>
        <img src={FormBgLaptopImage4} alt="FormImage" className='h-[615px] w-[820px]' />
      </div>

      <div className='flex pb-10 z-10'>  
      <h1 className='font-poppins text-4xl text-white text-center font-extrabold'>Welcome to Blue Chat</h1>
      <span className='pl-4 '><SendIcon fontSize='large' className='text-white rotate-[-35deg]'/></span>
      </div>
      
      <form className='h-[388px] w-[550px] flex flex-col items-center justify-center bg-black rounded-2xl z-0'>
       <div className='flex flex-col '>
        <label htmlFor="Email" className='font-poppins text-white text-xl font-semibold pb-1'>Email Address</label>
        <input type="text" placeholder='Enter your email address' className='h-9 w-[320px] pl-4 rounded-3xl'/>
       </div>
       <div className='flex flex-col pt-4'>
        <label htmlFor="Email" className='font-poppins text-white text-xl font-semibold pb-1'>Password</label>
        <input type="text" placeholder='Enter your password' className='h-9 w-[320px] pl-4 rounded-3xl'/>
       </div>
       <div className='flex flex-col pt-14'>
        <button className='h-12 w-[320px] pl-4 text-xl font-poppins text-white font-bold bg-[#2563eb] rounded-3xl'>Log In</button>
        <p className='font-poppins text-white text-lg pt-4 text-center'>Don't have an account?  <span className='font-poppins font-extrabold text-lg text-[#2563eb]'><Link>Sign Up</Link></span> </p>
       </div>
      </form>
      
    </div>
  )
}

export default LogInSignUp