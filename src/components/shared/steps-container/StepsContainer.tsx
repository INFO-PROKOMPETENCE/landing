import { FC } from "react";
import { ContentContainer } from "../content-container";
import { Divider } from "../divider";
import styles from "./StepsContainer.module.scss";

interface Props {}

export const StepsContainer: FC<Props> = () => {
  return (
    <div className={styles.main}>
      <div className={styles.numbers}>
        {new Array(3).fill(null).map((_, index) => (
          <div key={index} className={styles.item}>
            <StepNumber number={index + 1} />
            {index !== 2 && <Divider height={47} variant="vertical" />}
          </div>
        ))}
      </div>
      <div className={styles.steps}>
        <ContentContainer>Шаг1</ContentContainer>
        <ContentContainer>Шаг2</ContentContainer>
        <ContentContainer>
          Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3Шаг3
        </ContentContainer>
      </div>
    </div>
  );
};

const StepNumber: FC<{ number: number }> = ({ number }) => {
  return <div className={styles.stepNumber}>{number}</div>;
};
