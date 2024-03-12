import Head from "next/head";

import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import thumbImg from "../../../public/images/thumb.png";

import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog | Sujeito Programador</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/">
            <Image
              src={thumbImg}
              alt="Post título 1"
              width={720}
              height={410}
              quality={100}
            />
            <strong>Criando meu Primeiro Aplicativo</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum in
              sunt, iure asperiores, officiis autem molestiae suscipit nesciunt,
              perferendis expedita minus illum. Facere inventore expedita natus
              soluta explicabo veniam perferendis!
            </p>
          </Link>

          <div className={styles.buttonNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={25} color="#FFF" />
              </button>
              <button>
                <FiChevronLeft size={25} color="#FFF" />
              </button>
            </div>

            <div>
              <button>
                <FiChevronsRight size={25} color="#FFF" />
              </button>
              <button>
                <FiChevronRight size={25} color="#FFF" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
