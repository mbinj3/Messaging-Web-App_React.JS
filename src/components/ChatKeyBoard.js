import React from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';


function ChatKeyBoard() {
  return (
    <div className='w-[985px] h-14 bg-[#2563eb] flex items-center justify-center gap-4'>
     <button className='cursor-pointer'>
        <AddRoundedIcon className='text-white'/>   
     </button>
     <div className='h-10 w-[850px] bg-white border border-black rounded-full pl-2 flex items-center gap-2'>
        <button className='pl-1'>
        <SentimentSatisfiedRoundedIcon className='text-2xl'
        />
        </button> 
        <input type="text" placeholder='Type for message...' className='h-8 w-[750px] ml-1 focus:outline-none'
        />
        <button className='pr-1'>
        <SendRoundedIcon className='text-2xl'
        />
        </button> 
      </div>
     <button className='cursor-pointer'>
        <KeyboardVoiceRoundedIcon className='text-white'/>   
     </button>
    </div>
  )
}

export default ChatKeyBoard