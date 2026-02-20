import BodyM from "./BodyM";
import Player from "./Player";

const MainM = () => {
    return (
        <div className="position-relative">
            <div className="d-md-none fixed-bottom m-0">
                <Player className="" />
            </div>
            <div className=" d-none d-md-block  m-0 sticky-top">
                <Player className="" />
            </div>
            <BodyM className="" />
        </div>
    );
};
export default MainM;
