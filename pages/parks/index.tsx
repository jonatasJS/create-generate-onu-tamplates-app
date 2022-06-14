/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  CgArrowLeft as ArrowLeft,
} from "react-icons/cg";

import styles from "../../styles/Parks.module.css";

export default function parks() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean | undefined>(true);

  useEffect(() => {
    if (inputRef.current) {
      setIsChecked(inputRef.current.checked);
      inputRef.current.addEventListener("click", () => {
        console.log(inputRef.current);
        console.log(inputRef.current?.checked);
        setIsChecked(inputRef.current?.checked);
      });
    }
  }, []);

  function generateTamplate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(isChecked);
  }

  return (
    <div className={styles.total}>
      <Link href="/">
        <motion.a
          whileHover={{ scale: 1.1, zIndex: 9999 }}
          whileTap={{ scale: 0.9 }}
          className={styles.goBackPage}
        >
          <ArrowLeft width={20} height={20} /> HOME
        </motion.a>
      </Link>
      <div className={styles.container} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}>
          <h1 className={styles.title}>Em construção...</h1>
        {/* <form onSubmit={generateTamplate} className={styles.main}>
          <h1 className={styles.title}>Parks</h1>

          <div className={styles.grid}>
            <div className={styles.contentBox}>
              <label className={styles.inp}>
                <input
                  required
                  type="text"
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>HostName</span>
                <span className={styles.inputIcon}>
                  <HostNameIcon  width={10} height={10}/>
                </span>
              </label>
              <label className={styles.inp}>
                <input
                  required
                  type="number"
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>VLAN</span>
                <span className={styles.inputIcon}>
                  <PlanetIcon width={10} height={10}/>
                </span>
              </label>
              <label className={styles.inp}>
                <input
                  required
                  type="text"
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>User</span>
                <span className={styles.inputIcon}>
                  <UserIcon width={10} height={10}/>
                </span>
              </label>
              <label className={styles.inp}>
                <input
                  required
                  type="text"
                  className={styles.inputText}
                  placeholder="&nbsp;"
                />
                <span className={styles.label}>Password</span>
                <span className={styles.inputIcon}>
                  <PasswordIcon width={10} height={10}/>
                </span>
              </label>
            </div>
            
          </div>
          <button className={`${styles.btn} ${styles.btnLogin}`}>Copiar</button>
        </form> */}
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
