import React from 'react';
import ChatPhoto0 from '../images/ChatPhoto0.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function ChatsSecNav() {
  return (
    <>
      {/* bg-[#374151] */}
      <div className='w-[380px] h-14 bg-[#2563eb] flex justify-center items-center gap-x-24'>
          <img src={ChatPhoto0} alt='my-img' className='h-12 w-12 rounded-full cursor-pointer'/>
          <h1 className='font-poppins text-white text-xl font-bold cursor-pointer'>Mr. Jordan</h1>
          <button className='cursor-pointer'>
          <MoreVertIcon className='text-white'/>   
          </button>
      </div>

      <div className='w-[380px] h-10 bg-black flex justify-center items-center border-r-2 border-white'>
      <div className='h-7 w-[290px] bg-white border border-black rounded-2xl pl-2 flex items-center gap-16 '>
        <input type="text" placeholder='Search for chats...' className='h-6 ml-1 focus:outline-none'
        />
        <button>
        <SearchOutlinedIcon className='text-2xl'
        />
        </button> 
      </div>
      </div>
    </>
  )
}

export default ChatsSecNav