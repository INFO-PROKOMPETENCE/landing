import { FC, useCallback, useRef } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BoobleContainer } from "../../components/shared/booble-container";
import { Divider } from "../../components/shared/divider";
import {
  MainImage,
  MegaphoneLogo,
  NaumenLogo,
  PlatformFirstScreen,
  PlatformSecondScreen,
  PlatformThirdScreen,
  SkblabLogo,
  UcsbLogo,
} from "../../components/shared/icons";
import { Title } from "../../components/shared/title";
import { PROJECTS_MOCK } from "../../mock/projects";
import { ProjectSlide } from "../../components/shared/project-slide";
import { BlockContentContainer } from "../../components/shared/block-content-container";
import statistic, { Institute } from "../../settings/statistic";
import { useChartManager } from "../../utils/use-chart-manager";
import { GoogleForm } from "../../components/shared/google-form";
import { Bar } from "react-chartjs-2";
import cx from "classnames";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  ChartData,
  Legend,
  LinearScale,
  Tooltip,
  Title as ChartTitle,
} from "chart.js";
//@ts-ignore
import { useScreenshot } from "use-react-screenshot";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./MainPage.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./slider.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

export const MainPage: FC = () => {
  const [chartManager, setChartManager] = useChartManager();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, takeScreenshot] = useScreenshot();
  const chartRef = useRef<HTMLDivElement>(null);

  const data: ChartData<"bar", (number | [number, number] | null)[]> = {
    labels: chartManager.labels,
    datasets: [
      {
        data: chartManager.data,
        backgroundColor: "#D2E6F5",
        barPercentage: 0.6,
      },
    ],
  };

  const onSetInstituteName = (institute: Institute) =>
    setChartManager({
      instituteName: institute.name,
      statisticItemName: Object.keys(institute.data)[0],
    });

  const onSetStatisticItemName = (value: string) =>
    setChartManager({
      instituteName: chartManager.instituteName,
      statisticItemName: value,
    });

  const makeChartScreenshot = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (chartRef.current) {
        const button = event.target as HTMLButtonElement;
        button.hidden = true;

        const screenBlob = await takeScreenshot(chartRef.current);

        const aEl = document.createElement("a");
        aEl.href = screenBlob;
        aEl.download = `Количество_${chartManager.statisticItemName}_в_${chartManager.instituteName}.png`;
        aEl.click();

        button.hidden = false;
      }
    },
    [chartManager.instituteName, chartManager.statisticItemName, takeScreenshot]
  );

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
            <AnchorLink offset={40} href="#business">
              Стать партнером
            </AnchorLink>
          </div>
          <MainImage className={styles.image} />
        </div>
      </BlockContentContainer>
      <BlockContentContainer href="stat">
        <div className={styles.statisticContainer}>
          <Title title="Статистика" />
          <div className={styles.boobles}>
            <div className={styles.smallBooblesContainer}>
              {statistic.institutes.map((institute) => (
                <div
                  key={institute.name}
                  onClick={() => onSetInstituteName(institute)}
                >
                  <BoobleContainer
                    isActive={institute.name === chartManager.instituteName}
                  >
                    {institute.name}
                  </BoobleContainer>
                </div>
              ))}
            </div>
            <Divider />
            <div className={styles.normalBooblesContainer}>
              {chartManager.statisticItems.map((item) => (
                <div
                  key={item.title + item.count}
                  onClick={() => onSetStatisticItemName(item.title)}
                >
                  <BoobleContainer
                    isActive={item.title === chartManager.statisticItemName}
                  >
                    <NormalBoobleContent
                      title={item.count.toString()}
                      caption={item.title}
                    ></NormalBoobleContent>
                  </BoobleContainer>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.chartContainer} ref={chartRef}>
            <div className={styles.chart}>
              <div className={styles.chartTitle}>
                {`Количество ${chartManager.statisticItemName} в ${chartManager.instituteName}`}
              </div>
              <Bar
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      backgroundColor: "#AAAAAA",
                      titleColor: "#FFFFFF",
                      yAlign: "bottom" as const,
                      titleAlign: "center",
                      padding: { x: 20, y: 10 },
                      callbacks: {
                        title: (data) => {
                          return (data[0].raw as number).toFixed(0);
                        },
                        label: () => "",
                      },
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        color: "#AAAAAA",
                        autoSkipPadding: 60,
                        font: {
                          size: 20,
                        },
                        padding: 20,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        color: "#000000",
                        autoSkipPadding: 60,
                        font: {
                          size: 20,
                        },
                        padding: 20,
                      },
                    },
                  },
                }}
                data={data}
              />
            </div>
            <button onClick={makeChartScreenshot}>Скачать в PNG</button>
          </div>
        </div>
      </BlockContentContainer>
      <BlockContentContainer href="projects">
        <div className={styles.studentProjectsContainer}>
          <div className={styles.projectTitle}>
            <Title title="Проекты наших студентов" />
          </div>
          <div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              centeredSlides
              loop
              watchOverflow
              slidesPerView={2}
              navigation={{
                prevEl: `#projects-prev`,
                nextEl: `#projects-next`,
              }}
              pagination={{
                type: "bullets",
                el: "#project-pagination",
                renderBullet: (index, className) => {
                  return `<button class="${className} custom-pagination"></button>`;
                },
              }}
              speed={500}
            >
              {PROJECTS_MOCK.map(
                ({ description, goal, icon, title }, index) => (
                  <SwiperSlide key={index + title}>
                    <div className={styles.projectSlideWrapper}>
                      <ProjectSlide
                        data={{
                          description,
                          goal,
                          icon,
                          title,
                        }}
                      />
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <div className={styles.navigation}>
              <button
                id="projects-prev"
                className={cx(styles.navigateButton, styles.prev)}
              />
              <div
                className={styles.paginationContainer}
                id="project-pagination"
              />
              <button
                id="projects-next"
                className={cx(styles.navigateButton, styles.next)}
              />
            </div>
          </div>
        </div>
      </BlockContentContainer>
      <BlockContentContainer href="partners">
        <div className={styles.partnersContainer}>
          <Title title="Партнеры" />
          <div>
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              loop
              spaceBetween={96}
              centeredSlides
              slidesPerView={3}
              loopedSlides={2}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={800}
            >
              <SwiperSlide>
                <div className={styles.slide}>
                  <NaumenLogo className={styles.logoSlide} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide}>
                  <SkblabLogo className={styles.logoSlide} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide}>
                  <MegaphoneLogo className={styles.logoSlide} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide}>
                  <UcsbLogo className={styles.logoSlide} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </BlockContentContainer>
      <BlockContentContainer href="platform">
        <div className={styles.platform}>
          <Title title="Платформа" />
          <div>
            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              speed={800}
            >
              <SwiperSlide>
                <PlatformFirstScreen className={styles.platformSlide} />
              </SwiperSlide>
              <SwiperSlide>
                <PlatformSecondScreen className={styles.platformSlide} />
              </SwiperSlide>
              <SwiperSlide>
                <PlatformThirdScreen className={styles.platformSlide} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </BlockContentContainer>
      <BlockContentContainer href="business">
        <div className={styles.howToBusiness}>
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
