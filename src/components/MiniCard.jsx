import { useDispatch } from "react-redux";
import { SAVE_SONG } from "../redux/actions/actions";

const MiniCard = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button
                    onClick={() => {
                        if (props.id && props.arrayName) {
                            dispatch({
                                type: SAVE_SONG,
                                payload: [props.id, props.arrayName],
                            });
                        }
                    }}
                    className="zero">
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
