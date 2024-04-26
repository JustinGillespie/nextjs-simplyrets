import { ReactNode } from "react";
import styles from "./page-wrapper.module.scss";

type Props = {
  children: ReactNode;
};

const PageWrapper = ({ children }: Props) => (
  <div className={styles.page}>{children}</div>
);

export default PageWrapper;
