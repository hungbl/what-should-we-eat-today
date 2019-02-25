import Immutable from 'immutable';
import * as c from '../constants/constant';

const initialState = Immutable.fromJS({
    clicks: 0,
    degree: 1800
})

export default (state = initialState, action) => {
    switch (action.type) {
        case c.COUNT_CLICKS:
            let clicks = state.get('clicks') + 1;
            return state.set('clicks', clicks);
    }
    return state;
}