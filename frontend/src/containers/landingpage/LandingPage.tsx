import React from "react";
import styles from "./LandingPage.module.css";
import { Button } from "@dotkomonline/design-system";
//import Online_hvit from "../../../public/img/Online_hvit.png";
const LandingPage = () => {
    return (
        <div className={styles.landingpage}>
            {" "}
            <>Wiki for NTNU Studenter</>
            <div className={styles.blueblock}>
                <Button className={styles.button} variant="outline" color="secondary">
                    Generell
                </Button>
                <Button className={styles.button} variant="outline" color="secondary">
                    Online
                </Button>
                <Button className={styles.button} variant="outline" color="secondary">
                    Komité
                </Button>
            </div>
        </div>
    );
};

export default LandingPage;
