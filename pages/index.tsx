import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUser } from "@auth0/nextjs-auth0";
import Typewriter from "typewriter-effect";

import { HomeTheme } from "../styles/StylesThemes";
import styles from "../styles/Home.module.css";
import { AdBanner } from "../components/Ads";

const Home: NextPage = () => {
	const { user, error, isLoading } = useUser();

	function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
		e.stopPropagation();
		e.preventDefault();
		// não deixa a pagina recarregar
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Gerador de template para configuração!</title>
			</Head>

			<HomeTheme>
				<main className={styles.main}>
					<Typewriter
						options={{
							strings: [
								`<h1 class="${styles.title}">
								Gerador de template para <a style="background-color: transparent !important;border: none !important;" onclick="${handleClick}">configuração</a>!
							</h1>`,
								`<h1 class="${styles.title}">
								Qualquer bug ou problema, contate <a class="${styles.code}" target="_blank" href="https://bit.ly/3QCpUYr">Jônatas</a>
							</h1>`,
							],
							autoStart: true,
							delay: 51,
							loop: true,
							deleteSpeed: 0,
							cursor: "|",
						}}
					/>
					<AdBanner dataAdFormat="rectangle" dataAdSlot="6553838709" dataFullWidthResponsive />
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

					<AdBanner dataAdFormat="rectangle" dataAdSlot="6553838709" dataFullWidthResponsive />
				</main>
			</HomeTheme>
		</div>
	);
};

export default Home;

// export const getStaticProps = async () => {

//   var url = "http://api.pikwy.com/web/62e15f91d4a80c046c619809.png";

//   http
//     .request(url, function (response) {
//       var data = new Transform();

//       response.on("data", function (chunk) {
//         data.push(chunk);
//       });

//       response.on("end", function () {
//         fs.writeFileSync(__dirname+"/ogimage.png", data.read());
//       });
//     })
//     .end();

//   return {
//     props: {},
//   };
// };

