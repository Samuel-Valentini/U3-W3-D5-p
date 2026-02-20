import { useDispatch } from "react-redux";
import getData from "./getData";
import { actionGetData, actionGetData2 } from "../redux/actions/actions";

const DataScraper = () => {
    const dispatch = useDispatch();
    getData("love", actionGetData, dispatch);
    getData("wanna", actionGetData2, dispatch);

    return <></>;
};
export default DataScraper;
