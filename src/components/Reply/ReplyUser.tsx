import './ReplyUser.scss'
import image from '../../assets/avatars/image-amyrobson.webp'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import dlt from '../../assets/icon-delete.svg'
import edit from '../../assets/icon-edit.svg'
import {Comment} from '../CommentReducer'

interface commentProp {
    comments: Comment[];
    dispatch: (action: { type: 'ADD_COMMENT'; payload: Comment }) => void;
}
const ReplyUser = ({comments} : commentProp) => {


  return (
    <>
        <div className="container-reply-user">
            {comments.map((comments) => (
            
            <div key={comments.id} className="comment">
                <div className="likes">
                    <button className="likes__button">
                        <img src={plus} alt="" />
                    </button>
                    <span className="likes__count">{comments.likes}</span>
                    <button className="likes__button">
                        <img src={minus} alt="" />
                    </button>

                </div>
                <div className="right">
                <div className="comment__user">
                    <div className="details">
                        <img src={image} alt="User" />
                        <h3>{comments.user}</h3>
                        <span className='user'>you</span>
                        <span className='time'>{comments.time}</span>
                    </div>
                    <button className='delete'>
                        <img src={dlt} alt="" />
                        Delete
                    </button>
                    <button className='edit'>
                        <img src={edit} alt="" />
                        Edit
                    </button>
                </div>
                <p className="comment__content">{comments.content}</p>
                </div>
            </div>
            ))}
        </div>
            
    </>
  )
}

export default ReplyUser