import counterReducer from './counter';
import activitiesReducer from './activities';

import { combineReducers} from 'redux';
import editModeReducer from './editMode';
import loadingReducer from './loading';
import submittingReducer from './submitting';
import activityBeingDeletedReducer from './activityBeingDeleted';
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';
import modalReducer from './modal';
//reducers are pure functions
const rootReducer = combineReducers({
    counter: counterReducer,
    activities: activitiesReducer,
    editMode: editModeReducer,
    loading: loadingReducer,
    submitting: submittingReducer,
    activityBeingDeleted: activityBeingDeletedReducer,
    user: userReducer,
    token: tokenReducer,
    modal: modalReducer
});

export default rootReducer;