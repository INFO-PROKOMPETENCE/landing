import { FC } from "react";
import { ContentContainer } from "../content-container";
import styles from "./FeedbackSlide.module.scss";

interface Props {
  name: string;
  job: string;
  value: string;
}

export const FeedbackSlide: FC<Props> = ({ job, name, value }) => {
  return (
    <ContentContainer width={550} height={250}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.avatar}></div>
          <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.job}>{job}</div>
          </div>
        </div>
        <div className={styles.value}>{value}</div>
      </div>
    </ContentContainer>
  );
};
