import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              プログラミングチュートリアル
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
                @Shin_Engineer
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Reactなう。</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" alt="画像" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
