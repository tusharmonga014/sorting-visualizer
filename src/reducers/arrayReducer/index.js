import { setValueInArrayUsingSplice, swapValuesInArray } from "../utilities";

export const array = (state = [], action) => {
    switch (action.type) {
        case 'SET_ARRAY':
            return action.payload;
        case 'SWAP_VALUES':
            return swapValuesInArray(state, action.payload.firstIdx, action.payload.secondIdx);
        case 'SET_VALUE':
            return setValueInArrayUsingSplice(state, action.payload.id, 1, action.payload.data);
        default: return state;
    }
}