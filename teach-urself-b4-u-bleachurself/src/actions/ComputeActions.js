// import uuid from 'uuid'

export const computeSquare = (input) => {
    return {
        type: 'COMPUTE',
        number: {
            input: input,
            output: input.toExponential(2),
            working: false
        }
    }
}


