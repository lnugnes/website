import { CHANGE_SIDE_BAR, TOGGLE_SIDE_BAR } from '../actions/changeSideBar';

const initialState = {
    status: false
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_SIDE_BAR:
            return { ...state, status: action.status };
        case TOGGLE_SIDE_BAR:
            return { ...state, status: !state.status };
        default:
            return state;
    }
}