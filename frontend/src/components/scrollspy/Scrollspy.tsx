import { DocumentNode } from "graphql";
import { FC, useEffect, useState } from "react";

import styles from "./Scrollspy.module.css";

interface IScrollspy {
    data: string;
}

const Scrollspy: FC<IScrollspy> = ({ data }) => {
    const subheadings = data.match(/\B\##\s+\w\w+.*\b/g);

    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        let headings = awaitElements(subheadings);
        headings.then((element) => {
            setHeadings(element);
        });
    }, []);

    const awaitElements = async (subheadings: RegExpMatchArray | null) => {
        let elements: Array<Object | null> = [];

        subheadings?.forEach((headingId) => {
            let heading = headingId.split(" ");
            heading = heading.slice(1);

            const element = document.getElementById(heading.join(" "));

            elements = [...elements, element];
        });

        return elements;
    };

    const setActiveElement = (e: any) => {
        const nodes = document.querySelectorAll(`.${styles.scrollspy_active}`);

        nodes.forEach((li: Element) => {
            li.classList.remove(`${styles.scrollspy_active}`);
        });

        e.target.parentNode.classList.add(`${styles.scrollspy_active}`);
    };

    headings.forEach((element: HTMLElement) => {
        window.addEventListener("scroll", function () {
            if (window.scrollY >= element.offsetTop && window.scrollY <= element.offsetTop + element.offsetHeight) {
                setActiveElementByScroll(element);
            }
        });
    });

    const setActiveElementByScroll = (element: HTMLElement) => {
        const nodes = document.querySelectorAll(`.${styles.scrollspy_active}`);

        nodes.forEach((li: Element) => {
            li.classList.remove(`${styles.scrollspy_active}`);
        });

        let li = document.querySelector(`li[data-id="${element.innerText}-li"]`);
        li?.classList.add(`${styles.scrollspy_active}`);

        return;
    };

    return (
        <>
            <div className={`${styles.scrollspy} scrollspyProgress`}>
                <ul>
                    {subheadings?.map((item) => {
                        const text = item.substr(3);
                        const isFirstChild = item == subheadings[0];

                        return (
                            <li
                                key={text}
                                data-id={`${text}-li`}
                                className={isFirstChild ? styles.scrollspy_active : ""}>
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
