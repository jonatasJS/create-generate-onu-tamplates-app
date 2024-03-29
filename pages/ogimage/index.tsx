import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUser } from "@auth0/nextjs-auth0";

import { HomeTheme } from "../../styles/StylesThemes";
import styles from "../../styles/Home.module.css";

const OgImage: NextPage = () => {
	const { user, error, isLoading } = useUser();

	return (
		<div className={styles.container}>
			<Head>
				<title>Gerador de template para configuração!</title>
			</Head>

			<HomeTheme>
				<main className={styles.main}>
					<h1 className={styles.title}>
						Gerador de template para{" "}
						<Link href="/">
							<a>configuração</a>
						</Link>
						!
					</h1>

					<p className={styles.description}>
						Qualquer bug ou problema{": "}
						<span className={styles.code}>
							<Link href="https://api.whatsapp.com/send?phone=5563991321180&text=Ol%C3%A1%2C%20estou%20com%20problema%20no%20gerador%20de%20templates!">
								<a target={"_blank"}>Jônatas - NOC 1</a>
							</Link>
						</span>
					</p>
					<div className={styles.grid}>
						<Link href="/furukawa">
							<motion.a
								whileHover={{ scale: 1.1, zIndex: 9999 }}
								whileTap={{ scale: 0.9 }}
								className={styles.card}
							>
								<h2>Furukawa &rarr;</h2>
								<p>Gera template para instalação de onu Furukawa</p>
							</motion.a>
						</Link>

						<Link href="/parks">
							<motion.a
								whileHover={{ scale: 1.1, zIndex: 9999 }}
								whileTap={{ scale: 0.9 }}
								style={{ opacity: 0.5 }}
								className={styles.card}
							>
								<h2>Parks &rarr;</h2>
								<p>Gera template para instalação de onu Parks.</p>
							</motion.a>
						</Link>

						<Link href="/format">
							<motion.a
								whileHover={{ scale: 1.1, zIndex: 9999 }}
								whileTap={{ scale: 0.9 }}
								className={styles.card}
							>
								<h2>Formatar &rarr;</h2>
								<p>Formatar contarto para{"\n"}colocar no nome da onu!</p>
							</motion.a>
						</Link>

						<Link href="/">
							<motion.a
								whileHover={{ scale: 1.1, zIndex: 9999 }}
								whileTap={{ scale: 0.9 }}
								style={{ opacity: 0.5 }}
								className={styles.card}
							>
								<h2>FUTURO &rarr;</h2>
								<p>Implemetação futura!{"\n"}Implemetação futura!</p>
							</motion.a>
						</Link>
					</div>
				</main>
			</HomeTheme>
		</div>
	);
};

export default OgImage;
