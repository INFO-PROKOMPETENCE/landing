import { FC } from "react";
import cx from "classnames";
import styles from "./Divider.module.scss";

interface Props {
  variant?: "horizontal" | "vertical";
  height?: number;
}

export const Divider: FC<Props> = ({ variant, height }) => {
  return (
    <div
      className={cx(styles.main, { [styles.vertical]: variant === "vertical" })}
      style={{ height: height ? height + "px" : "1px" }}
    />
  );
};
