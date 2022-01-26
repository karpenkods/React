import React from "react";
import { CreatedAt } from "./CreatedAt";
import styles from "./textcontent.css";
import { Title } from "./Title";
import { User } from "./User";

interface ITextContentProps {
  title: string;
  author: string;
}

export function TextContent(props: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <User author={props.author} />
        <CreatedAt text={"4 часа назад"} />
      </div>
      <Title title={props.title} />
    </div>
  );
}
