import {TRIGGER, SUCCESS, FAILURE} from './action';

const initialState = {
	data: {},
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TRIGGER:
			return {
				...state,
				loading: true
			};
		case SUCCESS:
			return {
				...state,
				data: action.data,
				loading: false
			};
		case FAILURE:
			return {
				...state,
				data: action.data,
				loading: false
			};
		default:
			return state;
	}
};