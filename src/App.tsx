// import { useState } from 'react'

import './App.scss'
import AddComment from './components/AddComment'
import AllReply from './components/Reply/AllReply'
import CommentList from './components/Comments/CommentList'
import ReplyUser from './components/Reply/ReplyUser'
import { useReducer } from 'react'
import  commentReducer,{ initialComments } from './components/CommentReducer'

function App() {

const [comments, dispatch] = useReducer(commentReducer, initialComments)

  return (
    <>
      <div className="cover">
        <CommentList/>
        <AllReply />
        <ReplyUser dispatch={dispatch} comments={comments}/>
        <AddComment dispatch={dispatch}/>
      </div>  
    </>
  )
}

export default App
