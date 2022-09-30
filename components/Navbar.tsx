import styles from "../styles/Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["nav-container"]}>
      {menuItems.map(({ text, href }, i) => {
        return <ActiveLink key={i} text={text} href={href} />;
      })}
    </nav>
  );
};
