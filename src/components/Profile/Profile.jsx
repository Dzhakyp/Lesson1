import React from "react";
import styles from "./Profile.module.css";

export default function Profile({ username, tag, avatar, location, stats }) {
  return (
    <div className={styles.Profile}>
      <div className={styles.description}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.logo}>
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
