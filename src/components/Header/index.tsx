import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";

import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="#">
          <Image src={logo} alt="Sujeito Programador Logo" />
        </a>

        <nav>
          <Link href="/">
            <a href="#">Home</a>
          </Link>
          <Link href="/">
            <a href="#">Conteúdos</a>
          </Link>
          <Link href="/">
            <a href="#">Quem Somos</a>
          </Link>
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
