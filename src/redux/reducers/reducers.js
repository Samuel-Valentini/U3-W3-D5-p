import { GET_DATA, GET_DATA_2, SAVE_SONG } from "../actions/actions";

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

export const saveSongReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case SAVE_SONG: {
            return {
                ...currentState,

                actual: action.payload,
            };
        }

        default:
            return currentState;
    }
};
