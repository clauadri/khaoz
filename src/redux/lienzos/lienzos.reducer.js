const INITIAL_STATE = {
    lienzos: [],
    isLoading: false,
    error: false,
}

const lienzosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'gettingLienzos':
            return {...state, isLoading: true}
        case 'getLienzos':
            return {...state, isLoading: false, lienzos: action.payload, error: false}
        case 'error':
            return {...state, isLoading: false, lienzos: [], error: action.payload}
        default:
            return state;
    }
}

export default lienzosReducer;