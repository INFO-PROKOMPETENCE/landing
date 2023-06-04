import { FC } from "react";
import { LogoIcon } from "../../../icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
          <AnchorLink offset={40} href="#stat">
            Статистика
          </AnchorLink>
          <AnchorLink offset={40} href="#projects">
            Проекты
          </AnchorLink>
          <AnchorLink offset={40} href="#partners">
            Партнеры
          </AnchorLink>
          <AnchorLink offset={40} href="#platform">
            Платформа
          </AnchorLink>
          <AnchorLink offset={40} href="#feedback">
            Отзывы
          </AnchorLink>
          <AnchorLink offset={40} href="#business">
            Как стать партнером
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};
