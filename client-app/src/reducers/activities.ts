import {IActivity} from "../app/modules/activity";

const activitiesReducer = (state: IActivity[] = [], action: any) => {
    switch(action.type){
        case 'ACTIVITIES_FETCHED':{
            return action.payload;
        }
        case 'ACTIVITY_CREATED':{
            return [...state,action.payload];
        }
        case 'ACTIVITY_UPDATED':{
            const allOtherActivities = state.filter(act => act.id !== action.payload.id);
            return [...allOtherActivities, action.payload];
        }
        case 'ACTIVITY_DELETED':{
            const allOtherActivities = state.filter(act => act.id !== action.payload);
            return allOtherActivities;
        }
        
        default:{
            return state;
        }
    }
}


export default activitiesReducer;