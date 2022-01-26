import React from "react";
import styles from "./menuitemslist.css";
import { BlockIcon, WarningIcon } from "../../../../icons";
import { EColor, Text } from "../../../../Text";
import { CommentsIcon } from "../../../../icons/CommentsIcon";
import { ShareIcon } from "../../../../icons/ShareIcon";
import { SaveIcon } from "../../../../icons/SaveIcon";

interface IMenuItemsList {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsList) {
  return (
    <ul className={styles.menuItemsList}>
      <div className={styles.commentsShare}>
        <li
          className={styles.menuItem}
          id="comments"
          onClick={() => console.log(postId)}
        >
          <CommentsIcon />
          <Text size={12} color={EColor.grey99}>
            Комментарии
          </Text>
        </li>

        <div className={styles.divider} />

        <li
          className={styles.menuItem}
          id="share"
          onClick={() => console.log(postId)}
        >
          <ShareIcon />
          <Text size={12} color={EColor.grey99}>
            Поделиться
          </Text>
        </li>

        <div className={styles.divider} />
      </div>

      <li
        className={styles.menuItem}
        id="block"
        onClick={() => console.log(postId)}
      >
        <BlockIcon />
        <Text size={12} color={EColor.grey99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} />

      <div className={styles.save}>
        <li
          className={styles.menuItem}
          id="save"
          onClick={() => console.log(postId)}
        >
          <SaveIcon />
          <Text size={12} color={EColor.grey99}>
            Сохранить
          </Text>
        </li>

        <div className={styles.divider} />
      </div>
      <li
        className={styles.menuItem}
        id="warning"
        onClick={() => console.log(postId)}
      >
        <WarningIcon />
        <Text size={12} color={EColor.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
