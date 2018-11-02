const defaultState = [
    {
        input: 0,
        output: 0,
        working: false
    }
]

const numbers = (state = defaultState, action) => {
    switch(action.type) {
        case 'COMPUTE':
            return [...state, action.number]
        default:
        return state
    }
 
}

export default numbers

