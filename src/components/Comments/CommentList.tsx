import './CommentList.scss'
import image from '../../assets/avatars/image-amyrobson.webp'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import reply from '../../assets/icon-reply.svg'
import { useState } from 'react'
// import CommentReducer, { initialComments } from '../../components/CommentReducer'

interface comments {
    id: number,
    user: string,
    time: string,
    content: string,
    likes: number

}


const CommentList = () => {

    const [comments, setComments] = useState<comments[]>([
        {
            id: 1,
            user: 'John Doe',
            time: '1 hour ago',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros eget sapien porttitor maximus.',
            likes: 12
        }
    ] )

    const handleLike = () => {
        setComments((prev) => {
            return prev.map((comment) => {
                if(comment.id === comments[0].id){
                    return {
                        ...comment,
                        likes: comment.likes + 1
                    }
                }
                return comment
            })
        })
    }

    const handleUnlike = () => {
        setComments((prev) => {
            return prev.map((comment) => {
                if(comment.id === comments[0].id){
                    return {
                        ...comment,
                        likes: comment.likes - 1
                    }
                }
                return comment
            })
        })
    }

  return (
    <>
        <div className="container">
            <div className="comment">
                
                <div className="likes">
                    <button className="likes__button" onClick={handleLike}>
                        <img src={plus} alt="" />
                    </button>
                    <span className="likes__count">{comments[0].likes}</span>
                    <button className="likes__button" onClick={handleUnlike}>
                        <img src={minus} alt="" />
                    </button>
                    
                </div>
                <div className="right">
                <div className="comment__user">
                    <div className="details">
                        <img src={image} alt="User" />
                        <h3>{comments[0].user}</h3>
                        <span className='time'>{comments[0].time}</span>
                    </div>
                    <button className='reply'>
                        <img src={reply} alt="" />
                        Reply
                    </button>
                </div>
                <p className="comment__content"> {comments[0].content} </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CommentList