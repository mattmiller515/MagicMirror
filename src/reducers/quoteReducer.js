const defaultState = {
    text: 'Hello World!',
    author: 'John Doe'
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'RETRIEVE_QUOTE_FULFILLED':
            console.log(action.payload)
            const quote = action.payload.data.contents.quotes[0];

            return {
                ...state,
                text: quote.quote,
                author: quote.author
            };
        default:
            return state;
    }
};
