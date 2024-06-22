
import './AllReply.scss'
import image from '../../assets/avatars/image-amyrobson.webp'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import reply from '../../assets/icon-reply.svg'

const AllReply = () => {
  return (
    <>
        <div className="container-reply">
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
                        <span className='time'>1 hour ago</span>
                    </div>
                    <button className='reply'>
                        <img src={reply} alt="" />
                        Reply
                    </button>
                </div>
                <p className="comment__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros eget sapien porttitor maximus. </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AllReply