import { TempProjectPreview } from "../components/shared/icons";

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
    icon: <TempProjectPreview />,
  },
  {
    title: "Генератор картинок на основе фирменного стиля",
    description:
      "Создание картинки для поста довольно трудоемкий и затратный процесс",
    goal: "Цель проекта - создать инструмент, с помощью которого менеджеры будут получать картинки для постов без привлечения дополнительных специалистов.",
    icon: <TempProjectPreview />,
  },
  {
    title: "Генератор картинок на основе фирменного стиля",
    description:
      "Создание картинки для поста довольно трудоемкий и затратный процесс",
    goal: "Цель проекта - создать инструмент, с помощью которого менеджеры будут получать картинки для постов без привлечения дополнительных специалистов.",
    icon: <TempProjectPreview />,
  },
  {
    title: "Генератор картинок на основе фирменного стиля",
    description:
      "Создание картинки для поста довольно трудоемкий и затратный процесс",
    goal: "Цель проекта - создать инструмент, с помощью которого менеджеры будут получать картинки для постов без привлечения дополнительных специалистов.",
    icon: <TempProjectPreview />,
  },
];