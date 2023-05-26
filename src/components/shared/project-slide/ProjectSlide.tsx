import { FC } from "react";
import { Project } from "../../../mock/projects";
import { ContentContainer } from "../content-container";
import styles from "./ProjectSlide.module.scss";

interface Props {
  data: Project;
}

export const ProjectSlide: FC<Props> = ({
  data: { description, goal, icon, title },
}) => {
  return (
    <ContentContainer width={800}>
      <div className={styles.main}>
        {icon}
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.titleValue}>{title}</div>
            <div className={styles.nameString}>Название команды</div>
          </div>
          <div className={styles.text}>
            <div className={styles.description}>{description}</div>
            <div className={styles.goal}>{goal}</div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
