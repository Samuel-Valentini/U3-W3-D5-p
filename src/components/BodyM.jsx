import MainCard from "./MainCard";
import MiniCard from "./MiniCard";

const BodyM = () => {
    return (
        <>
            <div className="pt-4 px-4">
                <h1>Novità</h1>
                <hr />
                <div className="d-flex gap-3" style={{ minWidth: "550px" }}>
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
                <div className="pt-5 w-100">
                    <h6>Nuovi episodi radio</h6>
                    <div className="d-flex gap-3">
                        <MiniCard
                            text="Prologo con Abuelo"
                            imgSrc="/images/2a.png"
                            imgAlt="Prologo con Abuelo"
                        />
                        <MiniCard
                            text="The Wanderer"
                            imgSrc="/images/2b.png"
                            imgAlt="The Wanderer"
                        />
                        <MiniCard
                            text="Micheal Bublé & Carly Pearce"
                            imgSrc="/images/2c.png"
                            imgAlt="Micheal Bublé & Carly Pearce"
                        />

                        <div className="d-none d-md-block">
                            <MiniCard
                                text="Stehan Moccio: The Zane Lowe Interview"
                                imgSrc="/images/2d.png"
                                imgAlt="Stehan Moccio: The Zane Lowe Interview"
                            />
                        </div>
                        <div className="d-none d-md-block">
                            <MiniCard
                                text="Chart Spotlight: Julia Michaels"
                                imgSrc="/images/2e.png"
                                imgAlt="Chart Spotlight: Julia Michaels"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BodyM;
