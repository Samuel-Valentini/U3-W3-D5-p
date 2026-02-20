import { useSelector } from "react-redux";
import MiniCard from "./MiniCard";

const AutoGen = () => {
    const firstArray = useSelector((curr) => {
        return curr.data?.first?.data ?? [];
    });

    const secondArray = useSelector((curr) => {
        return curr.data?.second?.data ?? [];
    });

    return (
        <>
            {firstArray && secondArray && (
                <>
                    <div className="d-flex gap-3">
                        {firstArray.slice(0, 3).map((song) => {
                            return (
                                <MiniCard
                                    key={song.id}
                                    text={song.title_short}
                                    artist={song.artist.name}
                                    imgSrc={song.artist.picture_medium}
                                    imgAlt={
                                        song.title_short +
                                        " - " +
                                        song.artist.name
                                    }
                                    arrayName={firstArray}
                                    id={song.id}
                                />
                            );
                        })}

                        <div className="d-none d-md-block">
                            {firstArray.slice(3, 4).map((song) => {
                                return (
                                    <MiniCard
                                        key={song.id}
                                        text={song.title_short}
                                        artist={song.artist.name}
                                        imgSrc={song.artist.picture_medium}
                                        imgAlt={
                                            song.title_short +
                                            " - " +
                                            song.artist.name
                                        }
                                    />
                                );
                            })}
                        </div>
                        <div className="d-none d-md-block">
                            {firstArray.slice(4, 5).map((song) => {
                                return (
                                    <MiniCard
                                        key={song.id}
                                        text={song.title_short}
                                        artist={song.artist.name}
                                        imgSrc={song.artist.picture_medium}
                                        imgAlt={
                                            song.title_short +
                                            " - " +
                                            song.artist.name
                                        }
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className="d-flex gap-3">
                        {secondArray.slice(0, 3).map((song) => {
                            return (
                                <MiniCard
                                    key={song.id}
                                    text={song.title_short}
                                    artist={song.artist.name}
                                    imgSrc={song.artist.picture_medium}
                                    imgAlt={
                                        song.title_short +
                                        " - " +
                                        song.artist.name
                                    }
                                />
                            );
                        })}

                        <div className="d-none d-md-block">
                            {secondArray.slice(3, 4).map((song) => {
                                return (
                                    <MiniCard
                                        key={song.id}
                                        text={song.title_short}
                                        artist={song.artist.name}
                                        imgSrc={song.artist.picture_medium}
                                        imgAlt={
                                            song.title_short +
                                            " - " +
                                            song.artist.name
                                        }
                                    />
                                );
                            })}
                        </div>
                        <div className="d-none d-md-block">
                            {secondArray.slice(4, 5).map((song) => {
                                return (
                                    <MiniCard
                                        key={song.id}
                                        text={song.title_short}
                                        artist={song.artist.name}
                                        imgSrc={song.artist.picture_medium}
                                        imgAlt={
                                            song.title_short +
                                            " - " +
                                            song.artist.name
                                        }
                                    />
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default AutoGen;
