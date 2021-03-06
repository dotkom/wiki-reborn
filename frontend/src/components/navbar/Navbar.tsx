import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faSearch } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import styles from "./Navbar.module.css";

const Navbar: FC = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbar_content}>
                    <div className={styles.navbar_left}>
                        <Link href={`/`}>
                            <a>
                                <img src="/assets/images/Online_hvit.png" alt="Logo" />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.navbar_right}>
                        <ul className={styles.menu_links}>
                            <div className="flex_center">
                                <div className={styles.searchbar}>
                                    <input type="text" className={styles.search_input} />
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                            </div>
                            <li className={styles.active}>
                                <Link href={`/`}>
                                    <a>Hjem</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/`}>
                                    <a>Bidra</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/`}>
                                    <a>Bidra</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/`}>
                                    <a>Bidra</a>
                                </Link>
                            </li>
                            <div className={`${styles.login_button} flex_center`}>
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
