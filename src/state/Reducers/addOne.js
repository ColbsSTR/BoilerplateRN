import { ADD_ONE } from '../Actions/actionTypes';

const INITIAL_STATE = {
    val: 0,
};

const addOne = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ONE:
            return { ...state, val: 2 }
        default:
          return state;
      }
}

export default addOne;