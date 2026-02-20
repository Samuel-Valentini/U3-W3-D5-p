import MainCard from "./MainCard";

const BodyM = () => {
    return (
        <>
            <div className="pt-4 px-4">
                <h1>Novità</h1>
                <hr />
                <div className="d-flex" style={{ minWidth: "550px" }}>
                    <MainCard
                        text="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
                        imgSrc="/images/1a.png"
                        imgAlt="Chill Music"
                    />
                    <MainCard
                        text="Ecco la nuova casa della musica latina"
                        imgSrc="/images/1b.png"
                        imgAlt="Musica uno"
                    />
                </div>
            </div>
        </>
    );
};
export default BodyM;
