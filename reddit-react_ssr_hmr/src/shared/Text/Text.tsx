import React from "react";
import styles from "./text.css";
import classNames from "classnames";

export enum EColor {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  grayF4 = "grayF4",
  greyF3 = "greyF3",
  greyD9 = "greyD9",
  greyC4 = "greyC4",
  grey99 = "grey99",
  grey66 = "grey66",
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
}

export function Text(props: ITextProps) {
  const {
    As = "span",
    color = EColor.black,
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
  );

  return <As className={classes}>{children}</As>;
}
