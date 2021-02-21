import React from "react";
import "./LandingPage.module.css";
import { Button } from "@dotkomonline/design-system";
//import Online_hvit from "../../../public/img/Online_hvit.png";
const LandingPage = () => {
    return (
        <div>
            {" "}
            <>Wiki for NTNU Studenter</>
            <div className="blueblock">
                <Button variant="outline" color="primary">
                    Generell
                </Button>
                <Button variant="outline" color="secondary">
                    Online
                </Button>
                <Button variant="outline" color="primary">
                    Komité
                </Button>
            </div>
        </div>
    );
};

export default LandingPage;
