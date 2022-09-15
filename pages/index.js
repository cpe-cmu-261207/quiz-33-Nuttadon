import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";
import { useState } from "react";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner Example*/}
        <PostOwner />

        {/* Comment Example */}

        {comments.map((x) => (
          <Comment
            username={x.username}
            userimg={x.userImagePath}
            comment={x.commentText}
            likeNum={x.likeNum}
            reply={x.replies}
          />
        ))}
      </div>
    </div>
  );
}
