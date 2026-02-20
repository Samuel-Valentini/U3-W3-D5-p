import { useDispatch } from "react-redux";
import getData from "./getData";
import { actionGetData, actionGetData2 } from "../redux/actions/actions";
import { useEffect } from "react";

const DataScraper = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getData("love", actionGetData, dispatch);
        getData("wanna", actionGetData2, dispatch);
    }, []);

    // getData("love", actionGetData, dispatch);
    // getData("wanna", actionGetData2, dispatch);

    return <></>;
};
export default DataScraper;
