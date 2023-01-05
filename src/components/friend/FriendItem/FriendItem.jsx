import React from "react";
import styles from "./Friend.module.css";
export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className="img" src={avatar} alt="avatar" />
      <p className="text">{name}</p>
    </li>
  );
}
