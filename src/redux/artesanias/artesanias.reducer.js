const INITIAL_STATE = {
    artesanias: [],
    isLoading: false,
    error: false,
}

const artesaniasReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'gettingArtesanias':
            return {...state, isLoading: true}
        case 'getArtesanias':
            return {...state, isLoading: false, artesanias: action.payload, error: false}
        case 'error':
            return {...state, isLoading: false, artesanias: [], error: action.payload}
        default:
            return state;
    }
}

export default artesaniasReducer;