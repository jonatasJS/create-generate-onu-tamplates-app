import { motion } from "framer-motion";

import { CgArrowLeft as ArrowLeft } from "react-icons/cg";

import styles from "../../styles/Parks.module.css";

interface ButtonBackProps {
  onClick: () => void;
  isArrow: boolean;
  value?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ButtonBack({
  style,
  onClick,
  isArrow,
  value,
  children,
}: ButtonBackProps) {

  console.log(styles);
  console.log(styles.buttonBack);
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, zIndex: 9999 }}
      whileTap={{ scale: 0.9 }}
      className={`${styles.goBackPage} ${!isArrow ? styles.arrow : ""}`}
      style={style}
    >
      {isArrow && <ArrowLeft width={20} height={20} />} {value || children}
    </motion.button>
  );
}
