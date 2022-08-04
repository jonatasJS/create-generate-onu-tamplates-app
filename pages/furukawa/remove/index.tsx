/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Head from "next/head";
import CopyToClipboard from "copy-to-clipboard";
import { env } from 'process';

import { CgModem as ONUIcon } from "react-icons/cg";
import { FaServer as OLTIcon } from "react-icons/fa";

const DATA: [{
	id: number;
	pon: string;
	onu: string;
}] = require("./data.json");

import styles from "../../../styles/Parks.module.css";
import { FurukawaRemoveTheme } from "../../../styles/StylesThemes";

export default function remove() {
	const [PonNumber, setPonNumber] = useState<number | string>(0 || "");
	const [OnuNumber, setOnuNumber] = useState<number | string>(0 || "");
	const [statsCopied, setStatsCopied] = useState(false);

	async function generateTamplate(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const template = `en\nconf t\ngpon\ngpon-olt ${PonNumber}\nno onu ${OnuNumber}\nwrite memory\nen\nexit\n\n`;

		setPonNumber("");
		setOnuNumber("");
		await CopyToClipboard(template);
		setStatsCopied(true);
		setTimeout(() => setStatsCopied(false), 2000);
	}

	function addToList () {
		DATA.push({
			id: DATA?.length + 1,
			pon: String(PonNumber),
			onu: String(OnuNumber)
		});

		setPonNumber("");
		setOnuNumber("");
	}

	console.log("DATA");
	console.log(DATA);
	console.log("process.env");
	console.log(env);
	console.log(process.env);

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
						position: "relative",
					}}
				>
					<form onSubmit={generateTamplate} className={styles.main}>
						<h1 className={styles.title}>Desautorizar uma Furukawa</h1>

						<div className={styles.grid}>
							<div className={styles.contentBox}>
								{/**
								 * Numero do PON
								 */}
								<label className={styles.inp}>
									<input
										required
										type="number"
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
										required
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
						<div style={(process.env.APPDEV == "development") ? {
							display: "flex",
							gap: "1rem",
						} : {
							display: "flex",
							width: "100%",
							justifyContent: "center",
							alignItems: "center",
						}}>
							<input
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
							{process.env.APPDEV == "development" && (<input
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
											backgroundColor: '#00ff00',
										}
								}
								className={`${styles.btn} ${styles.btnLogin}`}
								value={statsCopied ? "Adicionar!" : "Adicionar na lista"}
							/>)}
						</div>
					</form>

					{(DATA && process.env.APPDEV == "development") && (
						<div
							style={{
								height: "61%",
								width: "30%",
								display: "fixed",
								position: "absolute",
								right: "10px",
								textAlign: "center",
								zIndex: 9999,
							}}
						>
							<h2 className={styles.title}>Lista</h2>
							{DATA.map((item, index) => {
								return (
									<ul
										style={{
											border: "1px solid #363636",
											borderRadius: "5px",
											padding: "10px",
											width: "50%",
											margin: "10px auto",
										}}
										key={index}
									>
										<li>PON: {item.pon}</li>
										<li>ONU: {item.onu}</li>
									</ul>
								);
							})}
						</div>
					)}

					{/**
					 * DEV="development"
					*/}

					{/* {DATA.map(({ onu, pon, id }) => {
						console.log({ onu, pon, id });

						return (
							<ul key={id}>
								<h3>Item {id}</h3>
								<li>Pon: {pon}</li>
								<li>ONU: {onu}</li>
							</ul>
						);
					})} */}
				</div>
			</FurukawaRemoveTheme>
		</div>
	);
}

/**
 *     <Total>
      <Link href="/">
        <motion.a
          whileHover={{ scale: 1.1, zIndex: 9999 }}
          whileTap={{ scale: 0.9 }}
          className={styles.goBackPage}
        >
          <ArrowLeft width={20} height={20} /> HOME
        </motion.a>
      </Link>
      <Container>
        <title>Desautorizar uma Furukawa</title>
        <Main onSubmit={generateTamplate}>
          <Title>Desautorizar uma Furukawa</Title>

          <Grid>
            <ContentBox>
               <Inp>
               <InputText
                 required
                 type="number"
                 value={PonNumber}
                 onChange={e => setPonNumber(parseInt(e.target.value))}
                 placeholder="&nbsp;"
               />
               <Label>PON</Label>
               <InputIcon>
                 <OLTIcon width={10} height={10} />
               </InputIcon>
             </Inp>
             <Inp>
               <InputText
                 required
                 onChange={e => setOnuNumber(parseInt(e.target.value))}
                 type="number"
                 value={OnuNumber}
                 placeholder="&nbsp;"
               />
               <Label>ONU</Label>
               <InputIcon>
                 <ONUIcon style={{
                     height: '2.5rem',
                     width: '2.5rem'
                   }}
                   width={20}
                   height={20}
                 />
               </InputIcon>
             </Inp>
           </ContentBox>
         </Grid>
         <Btn
           type="submit"
           style={statsCopied ? { backgroundColor: "#00ff00", color: '#363636', fontWeight: 'bold' } : {}}
           className={`${styles.btn} ${styles.btnLogin}`}
         >
           {statsCopied ? "Copiado!" : "Gerar Template"}
         </Btn>
       </Main>
     </Container>
   </Total>
 */

/**
 *
 * <div className={styles.enabled}>
              <label>
                <input
                  required ref={inputRef} type="checkbox" />
                <h1>Mudar IP DHCP</h1>
              </label>
            </div>
            <div className={styles.contentBox + ` ${!isChecked ? styles.activeM : ''}`}>
              <label className={styles.inp}>
                <input
                  required
                  disabled={!isChecked}
                  type="text"
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>teste</span>
                <span className={styles.inputIcon}>
                </span>
              </label>
              <label className={styles.inp}>
                <input
                  required
                  disabled={!isChecked}
                  type="number"
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>VLAN</span>
                <span className={styles.inputIcon}>
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </label>
              <label className={styles.inp}>
                <input
                  required
                  disabled={!isChecked}
                  type="text"
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>User</span>
                <span className={styles.inputIcon}>
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </label>
              <label className={styles.inp}>
                <input
                  required
                  disabled={!isChecked}
                  type="text"
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>Password</span>
                <span className={styles.inputIcon}>
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </label>
            </div>
 */
