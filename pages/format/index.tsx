import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import CopyToClipboard from "copy-to-clipboard";

import { CgModem as ONUIcon } from "react-icons/cg";
import { AiFillProfile as ProfileIcon } from "react-icons/ai";

import styles from "../../styles/Parks.module.css";
import { FormatTheme } from "../../styles/StylesThemes";

const Format: NextPage = () => {
  const [contract, setContract] = useState<string>("");
  const [statsCopied, setStatsCopied] = useState(false);

  async function formatText(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const numbers = contract.replace(/[^0-9]/g, "");
    const textNoneNumber = contract
      .replace(/\d+/g, "")
      .replaceAll(" ", "_")
      .replaceAll("-", "_")
      .replaceAll("]", "")
      .replaceAll(" [", "")
      .replaceAll(" []", "")
      .replaceAll("_[]", "")
      .replaceAll("_[", "")
      .replaceAll(numbers, "");
    const template = `${numbers}_${textNoneNumber}`.toLocaleUpperCase();

    setContract("");
    await CopyToClipboard(template);
    setStatsCopied(true);
    setTimeout(() => setStatsCopied(false), 2000);
  }

  return (
    <div className={styles.total}>
      <Head>
        <title>Formatar nome e contarto do cliente</title>
      </Head>

      <FormatTheme>
        <div className={styles.container}>
          <form onSubmit={formatText} className={styles.main}>
            <h1 className={styles.title}>
              Formatar nome e contarto do cliente
            </h1>

            <div className={styles.grid}>
              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  gridTemplateColumns: "1fr",
                  padding: "0 2rem",
                  maxWidth: "800px",
                  width: "55vw",
                }}
              >
                {/**
                 * .............
                 */}
                <label className={styles.inp}>
                  <input
                    required
                    onChange={(e) => setContract(e.target.value)}
                    type="text"
                    value={contract}
                    className={styles.inputText}
                    placeholder="&nbsp;"
                  />
                  <span className={styles.label}>Nome e contrato</span>
                  <span className={styles.inputIcon}>
                    <ProfileIcon
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                        borderRadius: "15px",
                      }}
                      width={20}
                      height={20}
                    />
                  </span>
                </label>
              </div>
            </div>
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
          </form>

          <div></div>
        </div>
      </FormatTheme>
    </div>
  );
};

export default Format;
