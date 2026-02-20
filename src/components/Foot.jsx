import { Link } from "react-router-dom";
import { PiLineVerticalThin } from "react-icons/pi";

const Foot = () => {
    console.log(
        "cliccando sui titoli caricati tramite api il titolo viene mostrato nel player",
    );
    return (
        <>
            <div className="pb-5" style={{ fontSize: "0.7rem" }}>
                <Link className="text-white text-decoration-none" to="/">
                    Italia
                </Link>
                <PiLineVerticalThin />
                <Link className="text-white text-decoration-none" to="/english">
                    English (UK)
                </Link>
                <div className="py-3">
                    Copyright © 2024 Apple Inc. Tutti i diritti riservati.
                </div>
                <Link
                    className="text-white text-decoration-none"
                    to="/condizioni">
                    Condizioni dei servizi internet
                </Link>
                <PiLineVerticalThin />
                <Link className="text-white text-decoration-none" to="/privacy">
                    Apple Music e privacy
                </Link>
                <PiLineVerticalThin />
                <Link className="text-white text-decoration-none" to="/cookie">
                    Avviso sui cookie
                </Link>

                <PiLineVerticalThin />
                <Link
                    className="text-white text-decoration-none"
                    to="/supporto">
                    Supporto
                </Link>
                <PiLineVerticalThin />
                <Link
                    className="text-white text-decoration-none"
                    to="/feedback">
                    Feedback
                </Link>
            </div>
        </>
    );
};
export default Foot;
