import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveToken } from "../../store/token/actions";
import styles from "./layout.css";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken());
  }, []);

  return <div className={styles.layout}>{children}</div>;
}
