import React from 'react';
import MessageBubble1 from '../images/MessageBubble1.png';
import MessageBubble2 from '../images/MessageBubble2.png';

function ChatMessages() {
  return (
    <div className='w-[985px] h-[495px] bg-black relative'>
        <div className='w-[985px] h-auto flex flex-col items-center'>
          <div className='py-5'>
            <button className='font-poppins h-9 w-28 text-xs text-white font-bold rounded-md bg-[#2563eb]'>Chat with Mark</button>
          </div>
        </div>
        <div className='absolute top-28 left-16'>
          <div className='relative'>
            <img src={MessageBubble1} alt="FormImage" className='h-14 w-42 ' />
            <p className='text-xl font-normal absolute top-3 left-10 '>Hi, Jordan?</p>
          </div>  
        </div>
        <div className='absolute pt-1 top-40 left-16'>
          <div className='relative'>
            <img src={MessageBubble1} alt="FormImage" className='h-16 w-56 ' />
            <p className='text-xl font-normal absolute top-4 left-10 '>What's going on?</p>
          </div>  
        </div>
        <div className='absolute bottom-52 right-16'>
          <div className='relative'>
            <img src={MessageBubble2} alt="FormImage" className='h-16 w-44 ' />
            <p className='text-white text-xl font-normal absolute top-4 right-12 '>Hello Mark</p>
          </div>  
        </div>
        <div className='absolute pt-2 bottom-28 right-16'>
          <div className='relative'>
            <img src={MessageBubble2} alt="FormImage" className='h-28 w-[300px] ' />
            <p className='text-white text-xl font-normal absolute top-8 right-12 leading-none'>Just wrapping up the last<br/> project</p>
          </div>  
        </div>

        
    </div>
  )
}

export default ChatMessages