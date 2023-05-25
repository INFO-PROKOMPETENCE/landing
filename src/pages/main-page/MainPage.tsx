import { FC } from "react";
import { ContentContainer } from "../../components/shared/content-container";
import { MainImage } from "../../components/shared/icons";
import styles from "./MainPage.module.scss";

export const MainPage: FC = () => {
  return (
    <div className={styles.main}>
      <ContentContainer>
        <div className={styles.titleContainer}>
          <div className={styles.leftPart}>
            <div className={styles.text}>
              <div className={styles.title}>
                Проектное обучение <br />
                <span className={styles.custom}>Про</span>Компетенции -
              </div>
              <div className={styles.description}>
                сервис для выбора проектовна основе жизненного сценарияи
                ключевой технологии
              </div>
            </div>
            <button>Стать партнером</button>
          </div>
          <MainImage className={styles.image} />
        </div>
      </ContentContainer>
    </div>
  );
};
