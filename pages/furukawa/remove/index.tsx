/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import CopyToClipboard from "copy-to-clipboard";

import { CgModem as ONUIcon } from "react-icons/cg";
import { FaServer as OLTIcon } from "react-icons/fa";

import styles from "../../../styles/Parks.module.css";
import Head from "next/head";

export default function remove() {
  const [PonNumber, setPonNumber] = useState<number | string>(0 || "");
  const [OnuNumber, setOnuNumber] = useState<number | string>(0 || "");
  const [statsCopied, setStatsCopied] = useState(false);

  async function generateTamplate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const template = `en\nconf t\ngpon\ngpon-olt ${PonNumber}\nno onu ${OnuNumber}\nwrite memory\nen\nexit\n`;

    setPonNumber("");
    setOnuNumber("");
    await CopyToClipboard(template);
    setStatsCopied(true);
    setTimeout(() => setStatsCopied(false), 2000);
  }

  return (
    <div className={styles.total}>
      <Head>
        <title>Desautorizar uma Furukawa</title>
      </Head>
      
      <div className={styles.container}>
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
          <button
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
          >
            {statsCopied ? "Copiado!" : "Gerar Template"}
          </button>
        </form>

        <div></div>
      </div>
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
