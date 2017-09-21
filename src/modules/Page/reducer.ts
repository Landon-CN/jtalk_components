import { handleActions } from 'redux-actions';
import * as Constants from './Constants';
import * as Actions from './actions';
import * as types from './types';

const initState = {
    count: 1,
}


export default handleActions<typeof initState, any>({
    [Constants.ADD](state, actions) {
        const payload = <Actions.addType>actions.payload;
        return {
            ...state,
            count: state.count + payload.count
        };
    }
}, initState);

export {
    initState as state
}