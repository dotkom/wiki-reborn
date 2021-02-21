import React from "react";
import { Button } from "@dotkomonline/design-system";
//import Online_hvit from "../../../public/img/Online_hvit.png";
const LandingPage = () => {
    return (
        <div>
            {" "}
            <>Wiki for NTNU Studenter</>
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
    );
};

export default LandingPage;
