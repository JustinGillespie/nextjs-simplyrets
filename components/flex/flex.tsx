import { ReactNode } from "react";
import FlexColumn from "./flex-column";
import styles from "./flex.module.scss";

type Props = {
  children: ReactNode;
};

const Flex = ({ children }: Props) => (
  <div className={styles.flex}>{children}</div>
);

// Helper method to easiler call columns without a secondary import
// E.g: <Flex.Column></Flex.Column>

Flex.Column = FlexColumn;

export default Flex;
