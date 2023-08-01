import { LOGIN } from "../actions/constants"

const dataReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.payload)
            return { ...state, user: action.payload }
        default:
            return { ...state };
    }
};

export default dataReducer;