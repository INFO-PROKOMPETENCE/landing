import { FC, PropsWithChildren } from "react";
import cx from "classnames";
import styles from "./BoobleContainer.module.scss";

interface Props {
  size?: "small" | "normal";
  isActive?: boolean;
}

export const BoobleContainer: FC<PropsWithChildren<Props>> = ({
  children,
  isActive,
  size = "small",
}) => {
  return (
    <div
      className={cx(styles.main, {
        [styles.active]: isActive,
        [styles[size]]: !!size,
      })}
    >
      {children}
    </div>
  );
};
