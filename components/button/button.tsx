import { ReactNode, MouseEvent } from "react";
import styles from "./button.module.scss";

type Props = {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLElement>) => void;
};

export default ({ children, onClick }: Props) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
