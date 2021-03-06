import { IActivity } from "../app/modules/activity";

interface IAction {
    type: string;
    payload: IActivity | null;
  }
  
  const selectedActivityReducer = (state = null, action: IAction) => {
    switch (action.type) {
      case "ACTIVITY_SELECT": {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };
  
  export default selectedActivityReducer;
  