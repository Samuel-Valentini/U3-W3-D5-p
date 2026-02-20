export const GET_DATA = "GET_DATA";

export const actionGetData = (data) => {
    return { type: GET_DATA, payload: data };
};

export const GET_DATA_2 = "GET_DATA_2";

export const actionGetData2 = (data) => {
    return { type: GET_DATA_2, payload: data };
};

export const SAVE_SONG = "SAVE_SONG";

// export const getActionSearch = (query) => {
//     return async (dispatch) => {
//         try {
//             const response = await fetch(baseEndpoint + query + "&limit=20");
//             if (response.ok) {
//                 const { data } = await response.json();
//                 dispatch(actionSearch(data));
//             } else {
//                 alert("Error fetching results");
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };
