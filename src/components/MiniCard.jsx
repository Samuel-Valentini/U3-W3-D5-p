import { useDispatch } from "react-redux";

const MiniCard = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button className="zero">
                    <img
                        className="w-100 border-0 rounded-3"
                        src={props.imgSrc}
                        alt={props.imgAlt}
                    />
                    <div style={{ fontSize: "0.7rem" }}>{props.text}</div>
                    {props.artist && (
                        <div className="mb-2" style={{ fontSize: "0.7rem" }}>
                            {props.artist}
                        </div>
                    )}
                </button>
            </div>
        </>
    );
};
export default MiniCard;
