import { FC } from "react";
import styles from "./Title.module.scss";

interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => {
  return <div className={styles.main}>{title}</div>;
};
