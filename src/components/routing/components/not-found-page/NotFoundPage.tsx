import { FC, useCallback } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../config/routes";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const toMain = useCallback(() => {
    navigate(ROUTES.MAIN_PAGE);
  }, [navigate]);
  return (
    <div className={styles.main}>
      <div className={styles.title}>Ошибка 404</div>
      <div className={styles.caption}>Страница не найдена :(</div>
      <button onClick={toMain}>На главную</button>
    </div>
  );
};
