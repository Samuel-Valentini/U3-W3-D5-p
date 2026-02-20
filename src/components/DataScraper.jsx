import { useDispatch } from "react-redux";
import getData from "./getData";
import { actionGetData, actionGetData2 } from "../redux/actions/actions";

const DataScraper = () => {
    const dispatch = useDispatch();
    getData("queen", actionGetData, dispatch);
    getData("pink floyd", actionGetData2, dispatch);

    return <></>;
};
export default DataScraper;
