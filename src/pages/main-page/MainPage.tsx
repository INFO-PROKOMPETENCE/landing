import { FC } from "react";
import { BoobleContainer } from "../../components/shared/booble-container";
import { ContentContainer } from "../../components/shared/content-container";
import { Divider } from "../../components/shared/divider";
import { MainImage, TempChart } from "../../components/shared/icons";
import { Title } from "../../components/shared/title";
import {
  STATISTICS_MOCK_DATA_INSTITUTES,
  STATISTICS_MOCK_DATA_SUMMARY,
} from "../../mock/statiscticsMock";
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
          <div className={styles.boobles}>
            <div className={styles.smallBooblesContainer}>
              {STATISTICS_MOCK_DATA_INSTITUTES.map(({ title, isActive }) => (
                <BoobleContainer isActive={isActive} key={title}>
                  {title}
                </BoobleContainer>
              ))}
            </div>
            <Divider />
            <div className={styles.normalBooblesContainer}>
              {STATISTICS_MOCK_DATA_SUMMARY.map(
                ({ title, caption, isActive }) => (
                  <BoobleContainer isActive={isActive}>
                    <NormalBoobleContent
                      key={title + caption}
                      title={title}
                      caption={caption!}
                    ></NormalBoobleContent>
                  </BoobleContainer>
                )
              )}
            </div>
          </div>
          <div className={styles.chartContainer}>
            <TempChart />
            <button>Скачать в PNG</button>
          </div>
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

interface NormalBoobleContentProps {
  title: string;
  caption: string;
}

const NormalBoobleContent: FC<NormalBoobleContentProps> = ({
  caption,
  title,
}) => {
  return (
    <div className={styles.normalBooblesContentContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.caption}>{caption}</div>
    </div>
  );
};
