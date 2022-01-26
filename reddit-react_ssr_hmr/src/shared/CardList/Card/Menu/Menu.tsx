import React from "react";
import { Dropdown } from "../../../Dropdown";
import { MenuIcon } from "../../../icons";
import { EColor, Text } from "../../../Text";
import styles from "./menu.css";
import { MenuItemsList } from "./MenuItemsList";

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId="555" />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColor.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
