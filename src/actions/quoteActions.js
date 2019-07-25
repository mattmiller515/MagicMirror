import axios from 'axios';

export const retrieveQuote = () => (dispatch) => {
    dispatch({
        type: 'RETRIEVE_QUOTE',
        payload: axios.get('http://quotes.rest/qod')
    });
};
