export const initialState = {
    reducer: 'reducer'
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'REDUCE':
            return state
        default: 
            return state
    }
}