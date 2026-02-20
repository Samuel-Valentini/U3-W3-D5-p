const MiniCard = (props) => {
    return (
        <>
            <div>
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
            </div>
        </>
    );
};
export default MiniCard;
