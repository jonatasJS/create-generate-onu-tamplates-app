/* eslint-disable react-hooks/rules-of-hooks */
import { Key, useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import generateTamplateRemove from "../../../utils/functionality/generateTamplateRemove";
import notify from "../../../utils/functionality/toastify";

import { CgModem as ONUIcon } from "react-icons/cg";
import { FaServer as OLTIcon } from "react-icons/fa";

const DATAJ: [
	{
		id: number;
		pon: string;
		onu: string;
	}
] = require("./data.json");

import styles from "../../../styles/Parks.module.css";
import {
	Btns,
	FurukawaRemoveTheme,
	HeaderListStyle,
	ListItem,
	ListStyle,
} from "../../../styles/StylesThemes";

export default function remove(): JSX.Element {
	const [PonNumber, setPonNumber] = useState<number | string>(0 || "");
	const [OnuNumber, setOnuNumber] = useState<number | string>(0 || "");
	const [statsCopied, setStatsCopied] = useState(false);
	const [DATA, setDATA] = useState<any>(DATAJ);

	// Função pra pegar os dados do DATAJ e colocar na string template
	async function getData(template: string) {
		await DATAJ.forEach(
			async (item) =>
				(template += `en\nconf t\ngpon\ngpon-olt ${item.pon}\nno onu ${item.onu}\nwrite memory\nen\n`)
		);
		return template;
	}

	function addToList() {
		if (PonNumber === "" || OnuNumber === "") {
			return notify({
				message: "Não há dados para adicionar a lista",
				type: "error",
			});
		}

		DATA.push({
			id: DATA?.length + 1,
			pon: String(PonNumber),
			onu: String(OnuNumber),
		});

		setPonNumber("");
		setOnuNumber("");
		notify({
			message: "ONU adicionada a lista",
			type: "success",
		});
	}

	useEffect(() => {
		if (DATA.length == 0) while (DATAJ.length > 0) {
			DATAJ.pop();
		}
	}, [DATA]);

	return (
		<div className={styles.total}>
			<Head>
				<title>Desautorizar uma Furukawa</title>
			</Head>

			<FurukawaRemoveTheme>
				<div
					className={styles.container}
					style={{
						height: "100%",
						justifyContent: "space-evenly",
					}}
				>
					<form
						onSubmit={(e) =>
							generateTamplateRemove(
								e,
								{
									PonNumber: Number(PonNumber),
									OnuNumber: Number(OnuNumber),
									DATA,
								},
								{
									setPonNumber,
									setOnuNumber,
									setStatsCopied,
									setDATA,
									getData,
								}
							)
						}
						className={styles.main}
					>
						<h1 className={styles.title}>Desautorizar uma Furukawa</h1>

						<div className={styles.grid}>
							<div className={styles.contentBox}>
								{/**
								 * Numero do PON
								 */}
								<label className={styles.inp}>
									<input
										type="number"
										autoFocus
										value={PonNumber}
										onChange={(e) => setPonNumber(parseInt(e.target.value))}
										className={styles.inputText}
										placeholder="&nbsp;"
									/>
									<span className={styles.label}>PON</span>
									<span className={styles.inputIcon}>
										<OLTIcon width={10} height={10} />
									</span>
								</label>
								{/**
								 * Numero do ONU
								 */}
								<label className={styles.inp}>
									<input
										onChange={(e) => setOnuNumber(parseInt(e.target.value))}
										type="number"
										value={OnuNumber}
										className={styles.inputText}
										placeholder="&nbsp;"
									/>
									<span className={styles.label}>ONU</span>
									<span className={styles.inputIcon}>
										<ONUIcon
											style={{
												height: "2.5rem",
												width: "2.5rem",
											}}
											width={20}
											height={20}
										/>
									</span>
								</label>
							</div>
						</div>
						<Btns
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								gap: "1rem",
								width: "100%",
								height: "100%",
							}}
						>
							<motion.input
								whileHover={{ scale: 0.9, zIndex: 9999 }}
								whileTap={{ scale: 0.7 }}
								type="submit"
								style={
									statsCopied
										? {
											backgroundColor: "#00ff00",
											color: "#363636",
											fontWeight: "bold",
											animation: "copy .2s ease-in-out",
										}
										: {}
								}
								className={`${styles.btn} ${styles.btnLogin}`}
								value={statsCopied ? "Copiado!" : "Gerar Template"}
							/>
							<motion.input
								whileHover={{ scale: 0.9, zIndex: 9999 }}
								whileTap={{ scale: 0.7 }}
								type="button"
								onClick={addToList}
								style={
									statsCopied
										? {
											backgroundColor: "##2196f3",
											fontWeight: "bold",
											animation: "copy .2s ease-in-out",
										}
										: {
											backgroundColor: "#25D366",
										}
								}
								className={`${styles.btn} ${styles.btnLogin}`}
								value={statsCopied ? "Adicionar!" : "Adicionar na lista"}
							/>
						</Btns>
					</form>

					<ListStyle
						style={{
							position: "absolute",
							opacity: DATA.length > 0 ? 1 : 0,
						}}
					>
						<HeaderListStyle>
							<h2 className={styles.title}>Lista</h2>
							<span></span>
						</HeaderListStyle>
						<ul
							style={{
								display: 'flex',
								flexDirection: "column",
								width: "100%"
							}}
						>
							{DATA.map(
								(
									item: {
										pon: number | null | undefined;
										onu: number | null | undefined;
									},
									index: Key | null | undefined
								) => {
									return (
										<ListItem
											whileHover={{ scale: 1.1, zIndex: 9999 }}
											whileTap={{ scale: 0.9 }}
											style={{
												width: "50%",
												margin: "10px auto",
												cursor: "pointer",
											}}
											key={index}
											title={`Remover ${item.pon} - ${item.onu}`}
											// ao cliclar no item da lista, ele será excluido
											onClick={() => {
												setDATA(
													DATA.filter(
														(_: any, i: Key | null | undefined) => i !== index
													)
												);
											}}
										>
											<span>PON: {item.pon}</span>
											<span>ONU: {item.onu}</span>
										</ListItem>
									);
								}
							)}
						</ul>
					</ListStyle>


				</div>
			</FurukawaRemoveTheme>
		</div>
	);
}
