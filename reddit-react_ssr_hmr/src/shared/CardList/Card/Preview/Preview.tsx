import React from "react";
import styles from "./preview.css";

interface IPreviewProps {
  img: string;
}

export function Preview(props: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={
          "https://pic.rutube.ru/video/6f/3b/6f3b4cd30540e76465389128f8903798.jpg"
        }
        alt="img"
      />
    </div>
  );
}
