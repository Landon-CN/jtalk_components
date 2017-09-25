import { createAction } from 'redux-actions';
import * as Constants from './Constants';

export interface AddType {
    count: number;
}
const add = createAction<AddType, number>(Constants.ADD, (num: number) => {
    let ret = {
        count: num
    };
    return ret;
});

export default {
    add
};