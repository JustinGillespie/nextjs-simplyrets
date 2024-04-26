import styles from "./header.module.scss";

type Props = {
  title: string;
};

export default ({ title }: Props) => (
  <header className={styles.header} role="header" data-testid="global-header">
    <h1>{title}</h1>
  </header>
);
