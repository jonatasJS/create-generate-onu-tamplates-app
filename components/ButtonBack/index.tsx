import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import { CgArrowLeft as ArrowLeft } from "react-icons/cg";

import styles from "../../styles/Parks.module.css";

export default function ButtonBack() {

  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <motion.a
        whileHover={{ scale: 1.1, zIndex: 9999 }}
        whileTap={{ scale: 0.9 }}
        className={styles.goBackPage}
      >
        <ArrowLeft width={20} height={20} /> VOLTAR
      </motion.a>
    </button>
  );
}
