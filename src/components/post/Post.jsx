import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler = () =>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrappper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" 
            src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="posttext">{post?.description}</span>
          <img className="PostImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomleft">
            <img className="likeIcon" src="\asset\heart.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="\asset\like.png" onClick={likeHandler} alt="" />
            <span className="PostLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}
