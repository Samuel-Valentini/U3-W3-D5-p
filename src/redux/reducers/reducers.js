import { GET_DATA, GET_DATA_2 } from "../actions/actions";

const initialState = [];

export const dataReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...currentState,

                first: action.payload,
            };
        }
        case GET_DATA_2: {
            return {
                ...currentState,

                second: action.payload,
            };
        }

        default:
            return currentState;
    }
};
