import React from 'react';
import ChatPhoto1 from '../images/ChatPhoto1.jpg';
import ChatPhoto2 from '../images/ChatPhoto2.jpg';
import ChatPhoto3 from '../images/ChatPhoto3.jpg';
import ChatPhoto4 from '../images/ChatPhoto4.jpg';
import ChatPhoto5 from '../images/ChatPhoto5.jpg';
import ChatPhoto6 from '../images/ChatPhoto6.jpg';
import ChatPhoto7 from '../images/ChatPhoto7.jpg';
import ChatPhoto8 from '../images/ChatPhoto8.jpg';
import ChatPhoto9 from '../images/ChatPhoto9.jpg';




function AllChats() {
  
  const chatsData  = [
    {
      "id":1, "name": "Mark", "image": ChatPhoto1, "message": "Hi, Jordan ?", "date": "Today", 
    },
    {
      "id":2, "name": "Suzane", "image": ChatPhoto2, "message": "Fine, What about tomorrow ?", "date": "Today", 
    },
    {
      "id":3, "name": "Stephen Nix", "image": ChatPhoto3, "message": "Can you please pick me to...", "date": "Tomorrow", 
    },
    {
      "id":4, "name": "Lino Montes", "image": ChatPhoto4, "message": "Please check your email now...", "date": "Tomorrow", 
    },
    {
      "id":5, "name": "Christina Lee", "image": ChatPhoto5, "message": "Our Meeting with Boss will be...", "date": "Tomorrow", 
    }, 
    {
      "id":6, "name": "Raphael Nast", "image": ChatPhoto6, "message": "Yes, I am sure about changes...", "date": "Tomorrow", 
    },
    {
      "id":7, "name": "Eden Robe", "image": ChatPhoto7, "message": "Our team is ready for upcom...", "date": "Tomorrow", 
    },
    {
      "id":8, "name": "Joseph Harps", "image": ChatPhoto8, "message": "The project has been ready f...", "date": "Tomorrow", 
    },
    {
      "id":9, "name": "Alex Avalos", "image": ChatPhoto9, "message": "Ok, Next time I will be there on...", "date": "Tomorrow", 
    },  
  ]

  return (
    <div className='w-[380px] h-[455px] flex flex-col  bg-black py-5 border-r-2 border-white overflow-x-hidden overflow-y-hidden '>
    {
      chatsData.map((chat)=>(
      <div className='w-[380px] h-20 flex items-center cursor-pointer py-1 bg-black' key={chat.id}>
        <div className='w-18 h-14 pl-2.5'>
            <img src={chat.image} alt='my-img' className='h-14 w-14 rounded-full cursor-pointer'/>
        </div>
        <div className='w-56 h-14 pl-3'>
            <h1 className='font-poppins text-lg text-white font-semibold'>
              {chat.name}
            </h1>
            <p className='font-poppins text-white text-sm'>
                {chat.message}
            </p>
        </div>
        <div className='w-auto h-14 pb-5'>
            <p className='font-poppins text-white text-sm'>
                {chat.date}
            </p>
        </div>
         
      </div>  
      ))
    }  
    </div>
  )
}

export default AllChats