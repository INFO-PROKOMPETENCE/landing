import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { ContentAppContainer } from "./components/content-app-container/ContentAppContainer";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import styles from "./AppContainer.module.scss";

const routes: { [key: number | string]: string } = {
  // TO DO
  0: "/",
};

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    Object.keys(routes).forEach((key) => {
      if (routes[key] === pathname) {
        setActiveTab(+key);
        return;
      }
    });
  }, [pathname]);

  const changePage = useCallback(
    (tab: number) => {
      setActiveTab(tab);
      navigate(routes[tab]);
    },
    [navigate]
  );

  const onCLickLogo = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.main}>
      <Header
        activeTab={activeTab}
        changeTab={changePage}
        onClickLogo={onCLickLogo}
      />
      <ContentAppContainer>{children}</ContentAppContainer>
      <Footer />
    </div>
  );
};
