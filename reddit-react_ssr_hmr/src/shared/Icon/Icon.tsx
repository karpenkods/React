import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';

import { CommentIcon } from '../icons/CommentIcon';
import { ComplainIcon } from '../icons/ComplainIcon';
import { HideIcon } from '../icons/HideIcon';
import { MenuIcon } from '../icons/MenuIcon';
import { SaveIcon } from '../icons/SaveIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { AnswerIcon } from '../icons/AnswerIcon';

type TSizes = 14 | 16 | 20;

export const EIcons = {
  comment: <CommentIcon />,
  complain: <ComplainIcon />,
  hide: <HideIcon />,
  menu: <MenuIcon />,
  save: <SaveIcon />,
  share: <ShareIcon />,
  answer: <AnswerIcon />
}

interface IIcon {
  name: object;
  size?: TSizes;
  children?: React.ReactNode;
}

export function Icon(props: IIcon) {
  const {
    name,
    size = 14
  } = props;

  const classes = classNames(
    styles.inline,
    styles[`s${size}`],
  )

  return (
    <div className={classes}>
      {name}
    </div>
  );
}