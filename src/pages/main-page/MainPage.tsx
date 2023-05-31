import { FC, useRef } from "react";
import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BoobleContainer } from "../../components/shared/booble-container";
import { Divider } from "../../components/shared/divider";
import {
  MainImage,
  MegaphoneLogo,
  NaumenLogo,
  PlatformImage,
  SkblabLogo,
  TempChart,
  UcsbLogo,
} from "../../components/shared/icons";
import { Title } from "../../components/shared/title";
import {
  STATISTICS_MOCK_DATA_INSTITUTES,
  STATISTICS_MOCK_DATA_SUMMARY,
} from "../../mock/statiscticsMock";
import { PROJECTS_MOCK } from "../../mock/projects";
import { ProjectSlide } from "../../components/shared/project-slide";
import { BlockContentContainer } from "../../components/shared/block-content-container";
import styles from "./MainPage.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FEEDBACK } from "../../mock/feedbackMock";
import { FeedbackSlide } from "../../components/shared/feedback-slide";
import { GoogleForm } from "../../components/shared/google-form";

export const MainPage: FC = () => {
  const googleForm = useRef<HTMLDivElement>(null);
  const moveToForm = () => {
    googleForm?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.main}>
      <BlockContentContainer>
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
            <button onClick={moveToForm}>Стать партнером</button>
          </div>
          <MainImage className={styles.image} />
        </div>
      </BlockContentContainer>
      <BlockContentContainer>
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
                  <BoobleContainer key={title + caption} isActive={isActive}>
                    <NormalBoobleContent
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
      </BlockContentContainer>
      <BlockContentContainer>
        <div className={styles.studentProjectsContainer}>
          <Title title="Проекты наших студентов" />
          <div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              centeredSlides
              loop
              spaceBetween={48}
              watchOverflow
              slidesPerView={1.5}
              navigation
              pagination={{ clickable: true }}
            >
              {PROJECTS_MOCK.map(
                ({ description, goal, icon, title }, index) => (
                  <SwiperSlide key={index + title}>
                    <ProjectSlide
                      data={{
                        description,
                        goal,
                        icon,
                        title,
                      }}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </BlockContentContainer>
      <BlockContentContainer>
        <div className={styles.partnersContainer}>
          <Title title="Партнеры" />
          <div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              loop
              spaceBetween={48}
              watchOverflow
              slidesPerView={3}
              navigation
              autoplay={{ delay: 10 }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <NaumenLogo />
              </SwiperSlide>
              <SwiperSlide>
                <SkblabLogo />
              </SwiperSlide>
              <SwiperSlide>
                <MegaphoneLogo />
              </SwiperSlide>
              <SwiperSlide>
                <UcsbLogo />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </BlockContentContainer>
      <BlockContentContainer>
        <div className={styles.platform}>
          <Title title="Платформа" />
          <PlatformImage />
        </div>
      </BlockContentContainer>
      <BlockContentContainer>
        <div className={styles.feedbackContainer}>
          <Title title="Отзывы" />
          <div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              loop
              centeredSlidesBounds
              spaceBetween={24}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
            >
              {FEEDBACK.map(({ job, name, value }, index) => (
                <SwiperSlide key={index}>
                  <FeedbackSlide job={job} name={name} value={value} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </BlockContentContainer>
      <BlockContentContainer>
        <div className={styles.howToBusiness} ref={googleForm}>
          <Title title="Как стать партнером" />
          <GoogleForm />
        </div>
      </BlockContentContainer>
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
