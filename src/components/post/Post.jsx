import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData'
import './Post.css'

export const Post = ({post}) => {
  const user = Users.filter((user) => user.id === post.userId)
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user[0].profilePicture} alt="" className="postProfileImg" />
            <span className="postUsername">{user[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">{post.like}人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  )
}
