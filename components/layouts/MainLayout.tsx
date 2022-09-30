import { useState, ReactNode, ChangeEvent } from "react";
import { FC } from "react";

import Head from "next/head";

import { Navbar } from "../Navbar";
import styles from "../../styles/MainLayout.module.css";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Course 01</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <input
        className={styles.input}
        value={inputValue}
        onChange={onInputChange}
      />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
