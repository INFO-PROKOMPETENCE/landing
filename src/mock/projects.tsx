import {
  GenerateImageProjectPreview, GeneticProjectPreview,
  KeyboardProjectPreview,
  PlasmotronProjectPreview
} from "../components/shared/icons";

export interface Project {
  icon: string | JSX.Element;
  title: string;
  description: string;
  goal: string;
}

export const PROJECTS_MOCK: Project[] = [
  {
    title: "Генератор картинок на основе фирменного стиля",
    description:
      "Создание картинки для поста довольно трудоемкий и затратный процесс",
    goal: "Цель проекта - создать инструмент, с помощью которого менеджеры будут получать картинки для постов без привлечения дополнительных специалистов.",
    icon: <GenerateImageProjectPreview />,
  },
  {
    title: "Keyboard Saga",
    description:
      "Проект должен облегчить жизнь студентам первых курсов, работникам в любой сфере, связанной с набором больших объемов текста.",
    goal: "Цель проекта - создать аркадную игру, развивающую навыки скоростной печати.",
    icon: <KeyboardProjectPreview />,
  },
  {
    title: "Разработка системы позиционирования плазмотрона",
    description:
      "",
    goal: "Цель проекта - разработка системы позиционирования плазмотрона с численным программным управлением для повышения качества наносимых покрытий и оптимизации процесса напыления.",
    icon: <PlasmotronProjectPreview />,
  },
  {
    title: "Hybrid Harvest. Обучение генетике",
    description:
      "Недостаток знаний большинства людей, касательно темы «Селекция» всегда был довольно большим. Кроме того, информация по этой теме в игровом формате практически отсутствует.\n",
    goal: "Цель проекта - создание обучающей игры по генетике.",
    icon: <GeneticProjectPreview />,
  },
];
