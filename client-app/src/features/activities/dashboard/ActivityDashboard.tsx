import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/modules/activity";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { ActivityList } from "./ActivityList";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDashboard = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode,
  setSelectedActivity
}: IProps) => {
  // {activities} is equivalent to activities = props.activities. This is called de-structuring
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails activity={selectedActivity} setEditMode = {setEditMode} setSelectedActivity = {setSelectedActivity} />
        )}
        {editMode && <ActivityForm setEditMode = {setEditMode} />}
      </Grid.Column>
    </Grid>
  ); //?? is the null coalescing operator
};
