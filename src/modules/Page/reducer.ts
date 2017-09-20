import { handleActions } from 'redux-actions';
import * as Constants from './Constants';
import * as Actions from './actions';

const initState = {
    count: 1
}


export default handleActions<typeof initState, any>({
    [Constants.ADD](state, actions) {
        const payload = <Actions.addType>actions.payload;
        return {
            ...state,
            count: state.count + payload.count
        };
    }
}, initState)