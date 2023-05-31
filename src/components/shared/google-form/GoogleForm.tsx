import { FC } from "react";
import settings from "../../../settings/settings.json";
import styles from "./GoogleForm.module.scss";

interface Props {}

export const GoogleForm: FC<Props> = () => {
  return (
    <iframe
      title="google-form"
      className={styles.googleForm}
      src={`https://docs.google.com/forms/d/e/${settings.googleFormId}/viewform?embedded=true`}
    />
  );
};
