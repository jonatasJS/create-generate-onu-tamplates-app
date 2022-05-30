/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useState } from "react";
import CopyToClipboard from "copy-to-clipboard";

import {
  CgArrowLeft as ArrowLeft,
  CgModem as ONUIcon
} from "react-icons/cg";
import { FaServer as OLTIcon } from "react-icons/fa";

import styles from "../../../styles/Parks.module.css";

export default function remove() {
  const [ PonNumber, setPonNumber ] = useState(0);
  const [ OnuNumber, setOnuNumber ] = useState(0);

  async function generateTamplate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const template = `conf t
      gpon
      gpon-olt ${PonNumber}
      no onu ${OnuNumber}
      write memory
      en
    `;

    await CopyToClipboard(template);
    alert("Copied to clipboard");
  }

  return (
    <div className={styles.total}>
      <Link href="/">
        <a className={styles.goBackPage}>
          <ArrowLeft width={20} height={20} /> HOME
        </a>
      </Link>
      <div className={styles.container}>
        <title>Desautorizar uma Furukawa</title>
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
                  onChange={e => setPonNumber(parseInt(e.target.value))}
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
                  onChange={e => setOnuNumber(parseInt(e.target.value))}
                  type="number"
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>ONU</span>
                <span className={styles.inputIcon}>
                  <ONUIcon style={{
                      height: '2.5rem',
                      width: '2.5rem'
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
            className={`${styles.btn} ${styles.btnLogin}`}
          >
            Copiar
          </button>
        </form>
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
