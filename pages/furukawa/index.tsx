/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  CgArrowLeft as ArrowLeft,
  CgRename as HostNameIcon,
} from "react-icons/cg";
import {
  AiOutlineUserSwitch as UserIconSwitch,
  AiOutlineUser as UserIcon,
} from "react-icons/ai";
import { BiPlanet as PlanetIcon } from "react-icons/bi";
import { RiLockPasswordLine as PasswordIcon } from "react-icons/ri";

import styles from "../../styles/Parks.module.css";
import { motion } from "framer-motion";

export default function furukawa() {
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
      <div className={styles.container}>
        <h1 className={styles.title}>Em construção...</h1>
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
