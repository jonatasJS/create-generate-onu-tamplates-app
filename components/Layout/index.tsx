import React, { useState } from "react";
import { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { FaUserAlt as UserIcon } from "react-icons/fa";

import { WhatsAppButton } from "../../components/WhatsAppButton";
import ButtonBack from "../../components/ButtonBack";

import lightTheme from "../../styles/theme/light";
import darkTheme from "../../styles/theme/dark";
import styles2 from "../../styles/Parks.module.css";
import { InputToggleTheme, LoginTheme } from "../../styles/StylesThemes";

interface LayoutProps {
	children: React.ReactNode;
	router: AppProps["router"];
}

const Layout = ({ children, router }: LayoutProps) => {
	const { back } = useRouter();
	const { user, error, isLoading } = useUser();
	// const [ theme, setTheme ] = usePersistedState("theme", "dark");
	const [theme, setTheme] = useState("dark");

	function toogleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	return (
		<>
			{router.pathname !== "/" && (
				<ButtonBack isArrow={true} onClick={back} value="VOLTAR" />
			)}
			<AnimatePresence exitBeforeEnter={true}>
				<ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
					{/* <ButtonBack
            isArrow={false}
            onClick={() =>
              theme == "light" ? setTheme("dark") : setTheme("light")
            }
            style={{
              top: 10,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              position: "fixed",
              textAlign: "center",
              left: 'calc(50% - (100vw / 20))',
            }}
            >
            {theme.toLocaleUpperCase()}
          </ButtonBack> */}
					<LoginTheme>
						<motion.div
							key={router.pathname}
							initial="pageInitial"
							animate="pageAnimate"
							exit="pageExit"
							transition={{
								type: "spring",
								stiffness: 700,
								damping: 30,
							}}
							variants={{
								pageInitial: {
									opacity: 0,
									x: -100,
									// scale: 0,
								},
								pageAnimate: {
									opacity: 1,
									x: 0,
									// scale: 1,
								},
								pageExit: {
									opacity: 0,
									x: "15vw",
									// scale: 0,
								},
							}}
							style={{
								width: "100%",
								height: "97vh",
								display: "flex",
								justifyContent: "center",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<InputToggleTheme type="checkbox" onClick={toogleTheme} />
							{isLoading ? (
								router.pathname === "/ogimage" ? (
									<>{children}</>
								) : (
									<div
										style={{
											fontSize: "2rem",
											fontWeight: "bold",
										}}
									>
										Loading...
									</div>
								)
							) : (
								<>
									{user && router.pathname !== "/profile" && (
										<motion.div
											onClick={() => {
												window.location.href = "/profile";
											}}
											title="Perfil"
											whileHover={{ scale: 1.1, zIndex: 9999 }}
											whileTap={{ scale: 0.9 }}
											style={{
												position: "fixed",
												right: "10px",
												top: "10px",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												cursor: "pointer",
												width: "100px",
												borderRadius: "50%",
												transition: "color border box-shadow 1s linear",
											}}
										>
											<img src={user.picture || "https://random.imagecdn.app/225/225"} alt={user.name || ""} />
										</motion.div>
									)}
									{process.env.DEV == "development" ? (
										children
									) : (
										<>
											{!user ? (
												router.pathname === "/ogimage" ||
												router.pathname === "/t" ? (
													<>{children}</>
												) : (
													<Link href="/api/auth/login">
														<motion.a
															whileHover={{ scale: 1.1, zIndex: 9999 }}
															whileTap={{ scale: 0.9 }}
															className={styles2.goBackPage}
															style={{
																position: "fixed",
																transition: "color border box-shadow 1s linear",
															}}
														>
															<UserIcon width={20} height={20} /> LOGIN
														</motion.a>
													</Link>
												)
											) : (
												children
											)}
										</>
									)}
								</>
							)}
						</motion.div>
					</LoginTheme>
				</ThemeProvider>
			</AnimatePresence>

			<WhatsAppButton />

			{/* <footer
        style={{ top: "47vw", position: "fixed" }}
        className={styles.footer}
      >
        <Link href="https://api.whatsapp.com/send?phone=5563991321180&text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20um%20or%C3%A7amento.">
          <a target="_blank" rel="noopener noreferrer">
            Powered by{" "}
            <span className={styles.logo}>
              <img
                src="/jonatas.svg"
                alt="Criador por Jônatas"
                width={72}
                height={16}
              />
            </span>
          </a>
        </Link>
      </footer> */}
		</>
	);
};

export default Layout;
