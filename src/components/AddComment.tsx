import './AddComment.scss'
import image from '../assets/avatars/image-amyrobson.png'


const AddComment = () => {
  return (
    <>
        <div className="container">
            <form className="add-comment">
                
                <div className="add-comment__user">
                    <img src={image} alt="User" />
                </div>
                <textarea className="add-comment__content" placeholder="Write your comment here"></textarea>
                <button className="add-comment__submit">Send</button>
            </form>
        </div>
    </>
  )
}

export default AddComment
