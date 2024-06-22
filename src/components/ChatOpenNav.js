import React from 'react';
import ChatPhoto1 from '../images/ChatPhoto1.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function ChatOpenNav() {
  return (
    <>
      <div className='w-[985px] h-14 bg-[#2563eb] flex justify-center items-center gap-x-[744px]'>
        <div className='flex items-center justify-center gap-x-4'>
          <img src={ChatPhoto1} alt='my-img' className='h-12 w-12 rounded-full cursor-pointer'/>
          <h1 className='font-poppins text-lg text-white  font-semibold cursor-pointer'>Mark</h1>
        </div> 
        <div className='gap-x-10'> 
          <button className='cursor-pointer pr-1'>
          <SearchOutlinedIcon className='text-white'/>   
          </button>
          <button className='cursor-pointer pl-1'>
          <MoreVertIcon className='text-white'/>   
          </button>
        </div>  
      </div>   
    </>
  )
}

export default ChatOpenNav