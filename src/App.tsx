// import { useState } from 'react'

import './App.scss'
import AddComment from './components/AddComment'
import AllReply from './components/Reply/AllReply'
import CommentList from './components/Comments/CommentList'
import ReplyUser from './components/Reply/ReplyUser'

function App() {


  return (
    <>
      <div className="cover">
        <CommentList />
        <AllReply />
        <ReplyUser/>
        <AddComment />
      </div>  
    </>
  )
}

export default App
