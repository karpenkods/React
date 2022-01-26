import React from "react";
import styles from "./card.css";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

interface ICardProps {
  key: string;
  title: string;
  author: string;
  img: string;
}

export function Card(props: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent title={props.title} author={props.author} />
      <Preview img={props.img} />
      <Menu />
      <Controls />
    </li>
  );
}
