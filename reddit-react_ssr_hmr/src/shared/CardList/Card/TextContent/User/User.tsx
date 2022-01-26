import React from "react";
import styles from "./user.css";

interface IUserProps {
  author: string;
}

export function User(props: IUserProps) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src="https://i.imgur.com/0G2IJDr.png"
        alt="avatar"
      />
      <a href="#user-url" className={styles.username}>
        {props.author}
      </a>
    </div>
  );
}
