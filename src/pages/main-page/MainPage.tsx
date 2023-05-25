import { FC } from "react";
import { ContentContainer } from "../../components/shared/content-container";
import { MainImage } from "../../components/shared/icons";
import { Title } from "../../components/shared/title";
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
      <ContentContainer>
        <div className={styles.statisticContainer}>
          <Title title="Статистика" />
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className={styles.studentProjectsContainer}>
          <Title title="Проекты наших студентов" />
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className={styles.partnersContainer}>
          <Title title="Партнеры" />
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className={styles.feedbackContainer}>
          <Title title="Отзывы" />
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className={styles.howToBusiness}>
          <Title title="Как стать партнером" />
        </div>
      </ContentContainer>
    </div>
  );
};
