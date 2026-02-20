import { Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const Player = () => {
    return (
        <>
            <div
                className="m-0 d-flex justify-content-around align-items-center"
                style={{ backgroundColor: "#2c2c2c", height: "45px" }}>
                <div className="text-center">Player</div>
                <div className="text-center">Player</div>
                <div className="text-center">Player</div>
                <div className="text-center d-none d-md-block">
                    <Button
                        className="btn-danger d-flex justify-content-around align-items-center gap-2 py-1"
                        style={{ fontSize: "0.8rem" }}>
                        <FaUser /> Accedi
                    </Button>
                </div>
            </div>
        </>
    );
};
export default Player;
