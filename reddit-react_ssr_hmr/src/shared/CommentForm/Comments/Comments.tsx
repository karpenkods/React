import React from "react";
import { ComplainButton } from "../../CardList/Card/Controls/Actions/ComplainButton";
import { ShareButton } from "../../CardList/Card/Controls/Actions/ShareButton";
import { CommentsButton } from "../../CardList/Card/Controls/CommentsButton";
import { KarmaCounter } from "../../CardList/Card/Controls/KarmaCounter";
import { CreatedAt } from "../../CardList/Card/TextContent/CreatedAt";
import { User } from "../../CardList/Card/TextContent/User";
import styles from "./comments.css";

interface ICommentsProps {
  name: string;
  created: string;
  league: string;
  comment: string;
  children?: React.ReactNode;
}

export function Comments(props: ICommentsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.karmaContainer}>
        <KarmaCounter />
        <div className={styles.karmaBorder}></div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.rightUp}>
          <User author={props.name} />
          <CreatedAt text={props.created} />

          <p className={styles.rightLeague}>{props.league}</p>
        </div>

        <p className={styles.rightText}>{props.comment}</p>

        <div className={styles.rightButtons}>
          <CommentsButton text={"Ответить"} author={props.name} />
          <ShareButton />
          <ComplainButton text={"Пожаловаться"} />
        </div>

        {props.children}
      </div>
    </div>
  );
}
