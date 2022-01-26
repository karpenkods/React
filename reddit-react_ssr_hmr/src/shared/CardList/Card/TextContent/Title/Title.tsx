import React from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface ITitleProps {
  title: string
}

export function Title(props: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to="/posts/1" className={styles.postLink}>
        {props.title}
      </Link>
    </h2>
  );
}
