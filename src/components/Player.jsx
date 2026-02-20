import { Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { IoVolumeMedium } from "react-icons/io5";
import { LiaRandomSolid } from "react-icons/lia";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { MdReplay } from "react-icons/md";
import { VscMusic } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Player = () => {
    const actualSong = useSelector((curr) => {
        return curr.song?.actual ?? [];
    });

    console.log("actualsong");
    console.log(actualSong);

    return (
        <>
            <div
                className="m-0 d-flex justify-content-between align-items-center py-1"
                style={{ backgroundColor: "#2c2c2c" }}>
                <div className="text-center d-block d-md-none">
                    <Button
                        className="btn btn-secondary px-2 m-1"
                        style={{ fontSize: "0.8rem" }}>
                        <VscMusic /> &nbsp;
                        {actualSong &&
                            actualSong[1]?.filter(
                                (song) => song.id === actualSong[0],
                            )[0].title}
                    </Button>
                </div>

                <div className="text-center d-flex justify-content-center align-items-center me-2">
                    <button className="zero d-none d-md-flex ps-4">
                        <LiaRandomSolid />
                    </button>
                    <button className="zero d-none d-md-flex">
                        <IoPlayBack />
                    </button>
                    <button className="zero ">
                        <IoPlay />
                    </button>
                    <button className="zero ">
                        <IoPlayForward />
                    </button>
                    <button className="zero d-none d-md-flex">
                        <MdReplay />
                    </button>
                </div>
                {!actualSong && (
                    <div
                        className="text-center w-100 py-2 d-none d-md-block"
                        style={{ backgroundColor: "#4d4d4d", maxWidth: "35%" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white"
                            fill="currentColor"
                            width="20"
                            height="24"
                            version="1.1"
                            viewBox="0 0 20 24">
                            <path
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                d="M14.5498331,5.79055576 L14.8667346,5.79824073 C15.6519271,5.85753895 17.9167852,6.09354452 19.3663083,8.18658259 C19.2454992,8.2761902 16.6786385,9.72115188 16.7091378,12.7589876 C16.7390911,16.3870553 19.9696682,17.5970079 20,17.6265086 C19.9696682,17.7155832 19.487499,19.3381578 18.3096405,21.0185738 C17.2829229,22.4941235 16.2256873,23.9394547 14.5345925,23.9689736 C12.9038728,23.9984743 12.3599697,23.0246181 10.4887983,23.0246181 C8.61624942,23.0246181 8.01243658,23.9394547 6.47193668,23.9984743 C4.84148068,24.056773 3.60409403,22.4336653 2.57735781,20.9595512 C0.463094554,17.9799264 -1.13731196,12.5531248 1.03685791,8.89465382 C2.09390733,7.06587112 4.02671959,5.91602544 6.10974825,5.88615523 C7.71015477,5.85753895 9.18984525,6.91939744 10.1566562,6.91939744 C11.1229398,6.91939744 12.8433271,5.68057112 14.8667346,5.79824073 Z M14.882569,-1.50990331e-14 C15.034318,1.42063421 14.4589476,2.81085604 13.6110595,3.84623659 C12.7325883,4.85257077 11.3405768,5.6504798 9.94727779,5.53248307 C9.76560653,4.17140151 10.4624841,2.72297789 11.2498451,1.83563692 C12.1267465,0.799444643 13.6413789,0.0602553239 14.882569,-1.50990331e-14 Z"></path>
                        </svg>
                    </div>
                )}
                {actualSong && (
                    <div
                        className="text-center w-100 py-2 d-none d-md-block"
                        style={{ backgroundColor: "#4d4d4d", maxWidth: "35%" }}>
                        {
                            actualSong[1]?.filter(
                                (song) => song.id === actualSong[0],
                            )[0].title
                        }
                    </div>
                )}
                <div className="text-center justify-content-center text-white d-none d-md-flex">
                    <button type="button" className="zero">
                        <IoVolumeMedium />
                    </button>
                    <input
                        type="range"
                        className="ms-3"
                        min="0"
                        max="100"
                        defaultValue="50"
                        style={{ accentColor: "#bdbdbd" }}
                        aria-label="Volume slider"
                    />
                </div>
                <div className="text-center d-none d-md-block pe-4">
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
