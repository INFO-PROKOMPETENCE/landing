import { FC, PropsWithChildren } from "react";
import styles from "./BlockContentContainer.module.scss";

interface Props {
  href?: string;
}

export const BlockContentContainer: FC<PropsWithChildren<Props>> = ({
  children,
  href,
}) => {
  return (
    <div id={href} className={styles.main}>
      {children}
    </div>
  );
};
