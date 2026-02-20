const MainCard = (props) => {
    return (
        <div>
            <div style={{ minHeight: "100px" }}>
                <h6>NUOVA STAZIONE RADIO</h6>
                <h6>{props.text}</h6>
            </div>
            <div className="pe-4">
                <img
                    className="w-100 border-0 rounded-3"
                    src={props.imgSrc}
                    alt={props.imgAlt}
                />
            </div>
        </div>
    );
};
export default MainCard;
