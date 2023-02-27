import { ComponentChildren } from "preact";
import styles from "./styles.module.css";

interface Props {
  children: ComponentChildren;
}

function MainLayout({ children }: Props) {
  return <main className={styles.main}>{children}</main>;
}

export default MainLayout;
