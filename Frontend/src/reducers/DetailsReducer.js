import { FIND_DETAILS } from "../actions/DetailsAction";

const initialState = {
	details = []
};

const DetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FIND_DETAILS:
			return {
				playlist: action.details,
			};
		default:
			return state;
	}
};

export default DetailsReducer;
