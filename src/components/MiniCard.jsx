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
            </div>
        </>
    );
};
export default MiniCard;
