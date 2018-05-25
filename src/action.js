import axios from 'axios';

export const TRIGGER = 'TRIGGER';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const requestSUCCESS = ({data}) => ({
	type: SUCCESS,
	data
});

const requestFAILURE = ({data}) => ({
	type: FAILURE,
	data
});

export const request = (purse) => dispatch => {
	dispatch({type: TRIGGER});
	return axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${purse}&tag=latest&apikey=${process.env.REACT_APP_BASE_ETHEREUM_API_KEY}`)
		.then(res => {
			if (res.data.status === "0") {
				dispatch(requestSUCCESS(res))
			} else {
				dispatch(requestFAILURE(res))
			}
		});
};