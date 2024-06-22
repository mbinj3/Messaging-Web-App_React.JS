import React from 'react';
import ChatsSecNav from './ChatsSecNav';
import AllChats from './AllChats';
import ChatSecFooter from './ChatSecFooter';
import ChatOpenNav from './ChatOpenNav';
import ChatMessages from './ChatMessages';
import ChatKeyBoard from './ChatKeyBoard';

function ChatHome() {
  return (
    <div className='w-full h-[607px] flex  bg-slate-600'>
      <div className='w-[380px] h-[607px]'>
        <ChatsSecNav /> 
        <AllChats />
        <ChatSecFooter />
      </div> 
      <div className='w-[985px] h-[607px]'>
        <ChatOpenNav />
        <ChatMessages />
        <ChatKeyBoard />
      </div>
    </div>
  )
}

export default ChatHome