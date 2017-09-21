import {
    combineReducers
} from 'redux';
import Page from './Page/reducer';

function createReducers() {
    return combineReducers({
        Page
    });
}

export default createReducers;