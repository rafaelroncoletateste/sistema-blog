import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";

import ActiveLink from "../ActiveLink";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="#" activeClassName={styles.active} legacyBehavior>
          <a>
            <Image src={logo} alt="Sujeito Programador Logo" />
          </a>
        </ActiveLink>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active} legacyBehavior>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active} legacyBehavior>
            <a>Conteúdos</a>
          </ActiveLink>

          <ActiveLink href="/sobre" activeClassName={styles.active} legacyBehavior>
            <a>Quem Somos</a>
          </ActiveLink>
        </nav>

        <a
          href="https://sujeitoprogramador.com"
          type="button"
          className={styles.readyButton}
        >
          COMEÇAR
        </a>
      </div>
    </header>
  );
}
