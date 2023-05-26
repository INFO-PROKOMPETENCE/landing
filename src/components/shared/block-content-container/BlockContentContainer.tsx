import { FC, PropsWithChildren } from "react";
import styles from "./BlockContentContainer.module.scss";

export const BlockContentContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};
