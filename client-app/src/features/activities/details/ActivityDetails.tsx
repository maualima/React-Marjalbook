import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { useThunkDispatch } from "../../..";
import { selectActivity } from "../../../actions/activities/select";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { IRootState } from "../../../app/modules/rootState";
import { ActivityDetailedChat } from "./ActivityDetailedChat";
import { ActivityDetailedHeader } from "./ActivityDetailedHeader";
import { ActivityDetailedInfo } from "./ActivityDetailedInfo";
import { ActivityDetailedSidebar } from "./ActivityDetailedSidebar";

interface DetailParams {
  id: string;
}

export const ActivityDetails = ({
  match,
  history
}: RouteComponentProps<DetailParams>) => {
  const activity = useSelector((state: IRootState) => state.selectedActivity)!;
  const dispatcher = useThunkDispatch();
  const loading = useSelector((state: IRootState) => state.loading);

  const activityId = match.params.id;

  useEffect(() => {
    dispatcher(selectActivity(activityId)).catch(() => {
        history.push('/notfound');
    });
  }, [dispatcher, activityId,history]); //the [] argument prevents this from running over and over again

  if (loading) return <LoadingComponent content="Loading activity..." />;

  if (!activity) return <h2>Activity not found</h2>;

  return (
    //fluid means it takes as much space as it can
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
};
