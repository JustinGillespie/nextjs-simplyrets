import { ReactNode } from "react";
import styles from "./flex.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  children: ReactNode;
  fillScreen?: boolean;
  hiddenOnMobile?: boolean;
  role: string;
};

export default ({
  children,
  role,
  fillScreen = false,
  hiddenOnMobile = false,
}: Props) => (
  <section
    role={role}
    className={cx({
      column: true,
      fill: fillScreen,
      hidden: hiddenOnMobile,
    })}
  >
    {children}
  </section>
);
