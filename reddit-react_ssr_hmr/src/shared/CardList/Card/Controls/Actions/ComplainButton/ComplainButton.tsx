import React from 'react';
import { EIcons, Icon } from '../../../../../Icon';
import styles from './complainbutton.css';

interface IComplainProps {
  text: string;
}

export function ComplainButton(props: IComplainProps) {
  return (
    <button className={styles.complainButton}>
      <Icon name={EIcons.complain} />
      <span>
        {props.text}
      </span>
    </button>
  );
}
