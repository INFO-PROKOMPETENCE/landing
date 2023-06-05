import { FC } from "react";
import { Divider } from "../../../divider";
import { LogoIcon } from "../../../icons";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footerLineContainer}>
        <div className={styles.footerLine}>
          <LogoIcon />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.hrefs}>
            <a href="mailto: m.a.shesterov@urfu.ru">
              Почта
            </a>
            <a href="https://vk.com/project__it" target="_blank">
              Вконтакте
            </a>
          </div>
          <Divider />
          <div className={styles.caption}>
            2023, Уральский Федеральный университет им. Б. Н. Ельцина
          </div>
        </div>
      </div>
    </div>
  );
};
