import { FC } from "react";
import LockIcon from "@material-ui/icons/Lock";
import SearchIcon from "@material-ui/icons/Search";

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
                        <img src="/assets/images/Online_hvit.png" alt="Logo" />
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
                                <Link href={`/`}>Hjem</Link>
                            </li>
                            <li>
                                <Link href={`/`}>Bidra</Link>
                            </li>
                            <li>
                                <Link href={`/`}>Bidra</Link>
                            </li>
                            <li>
                                <Link href={`/`}>Bidra</Link>
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
