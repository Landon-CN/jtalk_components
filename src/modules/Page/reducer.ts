import { handleActions, Action } from 'redux-actions';
import * as Constants from './Constants';
import * as Actions from './actions';
import * as types from './types';

const initState = {
  count: 1,
};

export default handleActions<typeof initState, any>(
  {
    [Constants.ADD](state: typeof initState, actions: Action<Actions.AddType>) {
      const payload = <Actions.AddType> actions.payload;
      return {
        ...state,
        count: state.count + payload.count
      };
    }
  },
  initState);

export {
  initState as state
};
