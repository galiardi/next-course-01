import styles from "../styles/Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
  return (
    <nav className={styles["nav-container"]}>
      <ActiveLink href="./" text="Home"></ActiveLink>
      <ActiveLink href="./about" text="About"></ActiveLink>
      <ActiveLink href="./contact" text="Contact"></ActiveLink>
    </nav>
  );
};
