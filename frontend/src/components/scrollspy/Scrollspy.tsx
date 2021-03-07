import { DocumentNode } from "graphql";
import { FC, useEffect, useState } from "react";

import styles from "./Scrollspy.module.css";

interface IScrollspy {
    data: string;
}

const Scrollspy: FC<IScrollspy> = ({ data }) => {
    const subheadings = data.match(/\B\##\s+\w\w+.*\b/g);
    const count = subheadings ? subheadings.length : 0;

    const setActiveElement = (e: any) => {
        const nodes = document.querySelectorAll(`.${styles.scrollspy_active}`);

        nodes.forEach((li: Element) => {
            li.classList.remove(`${styles.scrollspy_active}`);
        });

        e.target.parentNode.classList.add(`${styles.scrollspy_active}`);
    };

    return (
        <>
            <div className={`${styles.scrollspy} scrollspyProgress`}>
                <ul>
                    {subheadings?.map((item) => {
                        const text = item.substr(3);
                        const isFirstChild = item == subheadings[0];

                        return (
                            <li key={text} className={isFirstChild ? styles.scrollspy_active : ""}>
                                <a href={`#${text}`} onClick={setActiveElement}>
                                    {text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Scrollspy;
