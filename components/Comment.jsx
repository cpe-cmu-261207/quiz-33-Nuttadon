import React from "react";
import Reply from "./Reply";
import { useState } from "react";
import { useEffect } from "react";
export default function Comment(props) {
  const rpy = props.reply;
  const [like, setlike] = useState(true);
  const lk = () => {
    if (props.likeNum > 0) setlike(true);
    else setlike(false);
  };
  useEffect(() => {
    lk();
  });
  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
        <img
          src={props.userimg}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {props.username}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{props.comment}</span>
          {like === true && (
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{props.likeNum}</span>
            </div>
          )}
        </div>
      </div>

      {/*render Reply here... */}
      {rpy.map((x) => (
        <Reply
          usimg={x.userImagePath}
          usname={x.username}
          rpytxt={x.replyText}
          likeNum={x.likeNum}
        />
      ))}
    </div>
  );
}
