import React from "react";
import friend from "../../../friend.json";
import FriendItem from "../FriendItem";

export default function FriendList() {
  return (
    <ul className="list">
      {friend.map((item) => (
        <FriendItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
