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

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e iOS</h2>
            <span>
              Você vai descobrir o jeito mais moderno de desenvolver apps
              nativos para iOS e Android, construindo aplicativos do zero
            </span>
          </section>

          <img src="/images/financasApp.png" alt="Aplicativo de Finanças" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="Desenvolvimento WEB" />
          <section>
            <h2>Aprenda criar sistemas web</h2>
            <span>
              Criar sistemas web, sites usando as tecnologias mais mordernas e
              requisitadas pelo mercado.
            </span>
          </section>
        </div>
      </main>
    </>
  );
}
