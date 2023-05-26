import { FC, PropsWithChildren } from "react";
import styles from "./ContentContainer.module.scss";

interface Props {
  width?: number;
  height?: number;
}

export const ContentContainer: FC<PropsWithChildren<Props>> = ({
  children,
  width,
  height,
}) => {
  return (
    <div
      className={styles.main}
      style={{ width: `${width}px` || "auto", height: `${height}px` || "auto" }}
    >
      {children}
    </div>
  );
};
