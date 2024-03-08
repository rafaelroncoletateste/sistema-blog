import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujeito Programador</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível!</h1>
            <span>
              Uma plataforma com cursos que vão do zero até o profissional na
              prática, direto ao ponto
            </span>
            <a>
              <button>Começar agora!</button>
            </a>

            <img
              src="/images/banner-conteudos.png"
              alt="Conteúdos do Sujeito Programador"
            />
          </section>
        </div>
      </main>
    </>
  );
}
