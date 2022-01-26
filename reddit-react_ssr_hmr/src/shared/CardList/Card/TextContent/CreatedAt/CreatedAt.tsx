import React from 'react';
import styles from './createdat.css';

interface ICreatedAtProps {
  text: string;
}

export function CreatedAt(props: ICreatedAtProps) {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано </span>
      {/* 4 часа назад */}
      {props.text}
    </span>
  );
}
