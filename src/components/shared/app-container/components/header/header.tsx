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
          <div>Каталог</div>
          <div>Мой проект</div>
        </div>
      </div>
    </div>
  );
};
