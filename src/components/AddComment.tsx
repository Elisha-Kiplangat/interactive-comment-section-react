import './AddComment.scss'
import image from '../assets/avatars/image-amyrobson.png'
import { useState } from 'react';
// import CommentReducer, { Comment, initialComments } from './CommentReducer';

 

const AddComment = ({dispatch}: any) => {

     const [comment, setComment] = useState<string>('');
    // const [comment, dispatch] = useReducer(CommentReducer, initialComments[]);


     const handleSubmit = (e: any) => {
        e.preventDefault();

        const newComment = {
            id: Date.now(),
            user: 'newuser',
            time: 'just now',
            content: comment,
            likes: 0,
        }

        dispatch({ type: 'ADD_COMMENT', payload: newComment});
        setComment('')
        
    }
    

  return (
    <>
            <div className="container">
                <form className="add-comment" onSubmit={handleSubmit}>
                    <div className="add-comment__user">
                        <img src={image} alt="User" />
                    </div>
                    <textarea className="add-comment__content" 
                        placeholder="Write your comment here"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    >
                    </textarea>
                    <button className="add-comment__submit" type='submit'>Send</button>
                </form>
            </div>
        </>
  )
}

export default AddComment
