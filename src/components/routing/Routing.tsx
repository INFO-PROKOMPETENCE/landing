import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { ROUTES } from "../../config/routes";

export const Routing: FC = () => {
  const AppContainer = lazy(() => import("../shared/app-container/index"));
  const MainPage = lazy(() => import("../../pages/main-page/index"));
  const NotFoundPage = lazy(() => import("./components/not-found-page/index"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppContainer>
        <Routes>
          <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AppContainer>
    </Suspense>
  );
};
