import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.content}>{children}</div>;
};

export default Layout;
