import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const PowerLink = (props) => {
    return (
        <>
            <Link
                className="btn text-danger my-1 "
                style={{ backgroundColor: "#252526", width: "95%" }}
                to={props.link}>
                <div className="d-flex justify-content-between align-items-center">
                    {props.text} <IoIosArrowForward />
                </div>
            </Link>
        </>
    );
};
export default PowerLink;
