import { FC, PropsWithChildren } from "react";
import styles from "./ContentContainer.module.scss";

interface Props {
  width?: number;
}

export const ContentContainer: FC<PropsWithChildren<Props>> = ({
  children,
  width,
}) => {
  return (
    <div className={styles.main} style={{ width: `${width}px` || "auto" }}>
      {children}
    </div>
  );
};
