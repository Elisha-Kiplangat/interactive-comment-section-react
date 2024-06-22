import './ReplyUser.scss'
import image from '../../assets/avatars/image-amyrobson.webp'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import dlt from '../../assets/icon-delete.svg'
import edit from '../../assets/icon-edit.svg'


const ReplyUser = () => {
  return (
    <>
        <div className="container-reply-user">
            <div className="comment">
                <div className="likes">
                    <button className="likes__button">
                        <img src={plus} alt="" />
                    </button>
                    <span className="likes__count">12</span>
                    <button className="likes__button">
                        <img src={minus} alt="" />
                    </button>

                </div>
                <div className="right">
                <div className="comment__user">
                    <div className="details">
                        <img src={image} alt="User" />
                        <h3>John Doe</h3>
                        <span className='user'>you</span>
                        <span className='time'>1 hour ago</span>
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
                <p className="comment__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros eget sapien porttitor maximus. </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReplyUser