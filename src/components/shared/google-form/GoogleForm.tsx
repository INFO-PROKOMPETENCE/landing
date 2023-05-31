import { FC } from "react";
import styles from "./GoogleForm.module.scss";
import settings from "../../../settings/settings.json"

interface Props {}

export const GoogleForm: FC<Props> = () => {
  return (
    <iframe className={styles.googleForm}
            src={`https://docs.google.com/forms/d/e/${settings.googleFormId}/viewform?embedded=true`}>
    </iframe>
  );
};
