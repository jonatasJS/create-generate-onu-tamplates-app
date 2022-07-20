/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Head from "next/head";
import CopyToClipboard from "copy-to-clipboard";

import { CgModem as ONUIcon } from "react-icons/cg";
import { FaServer as OLTIcon } from "react-icons/fa";
import { AiFillProfile as ProfileIcon } from "react-icons/ai";

import styles from "../../../styles/Parks.module.css";

export default function FurukawaAdd() {
  const [PonNumber, setPonNumber] = useState<number | string>(0 || "");
  const [OnuNumber, setOnuNumber] = useState<number | string>(0 || "");
  const [OnuProfile, setOnuProfile] = useState<string>("");
  const [statsCopied, setStatsCopied] = useState(false);

  async function generateTamplate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const template = `en\nconf t\ngpon\ngpon-olt ${PonNumber}\nonu-profile ${OnuNumber} ${OnuProfile}\nwrite memory\nen\nshow onu ip ${PonNumber} ${OnuNumber}\nshow onu info | grep ${PonNumber} ${OnuNumber}\n\n`;

    setPonNumber("");
    setOnuNumber("");
    setOnuProfile("");
    await CopyToClipboard(template);
    setStatsCopied(true);
    setTimeout(() => setStatsCopied(false), 2000);
  }

  return (
    <div className={styles.total}>
      <Head>
        <title>Autorizar uma Furukawa</title>
      </Head>
      <div className={styles.container}>
        <form onSubmit={generateTamplate} className={styles.main}>
          <h1 className={styles.title}>Autorizar uma Furukawa</h1>

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
                  <OLTIcon
                    width={10}
                    height={10}
                    style={{
                      borderRadius: "6px"
                    }}
                  />
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
              {/**
               * Profile
               */}
              <label className={styles.inp}>
                <input
                  required
                  onChange={(e) => setOnuProfile(e.target.value)}
                  type="text"
                  value={OnuProfile}
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>Profile</span>
                <span className={styles.inputIcon}>
                  <ProfileIcon
                    style={{
                      height: "2.5rem",
                      width: "2.5rem",
                      borderRadius: "15px"
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
