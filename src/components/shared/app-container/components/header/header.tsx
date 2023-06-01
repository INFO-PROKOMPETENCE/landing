import { FC } from "react";
import { LogoIcon } from "../../../icons";
import styles from "./header.module.scss";

interface Props {
  activeTab: number;
  changeTab: (tab: number) => void;
  onClickLogo: () => void;
}

export const Header: FC<Props> = ({ activeTab, changeTab, onClickLogo }) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <LogoIcon onClick={onClickLogo} />
        <div className={styles.tabs}>
          <a href="#stat">Статистика</a>
          <a href="#projects">Проекты</a>
          <a href="#partners">Партнеры</a>
          <a href="#platform">Платформа</a>
          <a href="#feedback">Отзывы</a>
          <a href="#business">Как стать партнером</a>
        </div>
      </div>
    </div>
  );
};
