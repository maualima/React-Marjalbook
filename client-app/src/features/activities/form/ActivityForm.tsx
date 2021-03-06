import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/modules/activity";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../../actions/activities/create";
import { updateActivity } from "../../../actions/activities/update";
import { IRootState } from "../../../app/modules/rootState";
import { setEditMode } from "../../../actions/editMode/set";

export const ActivityForm = () => {

  const dispatcher = useDispatch();
  const initialActivity = useSelector((state:IRootState) => state.selectedActivity);
  const submitting = useSelector ((state: IRootState) => state.submitting);


  const initializeForm = () => {
    if (initialActivity) {
      return initialActivity;
    } else {
      let emptyActivity: IActivity = {
        id: "",
        category: "",
        title: "",
        description: "",
        date: "",
        city: "",
        venue: "",
      };
      return emptyActivity;
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
      setActivity({
        ...activity,
        [event.currentTarget.name]: event.currentTarget.value,
      });
  };

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let activityWithGuid: IActivity = { ...activity, id: uuid() };
      dispatcher(createActivity(activityWithGuid));
    } else dispatcher(updateActivity(activity));
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name="title"
          placeholder="Title"
          value={activity.title}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name="description"
          rows={2}
          placeholder="Description"
          value={activity.description}
        />
        <Form.Input
          onChange={handleInputChange}
          name="category"
          placeholder="Category"
          value={activity.category}
        />
        <Form.Input
          onChange={handleInputChange}
          name="date"
          type="date"
          placeholder="Date"
          value={activity.date.split("T")[0]}
        />
        <Form.Input
          onChange={handleInputChange}
          name="city"
          placeholder="City"
          value={activity.city}
        />
        <Form.Input
          onChange={handleInputChange}
          name="venue"
          placeholder="Venue"
          value={activity.venue}
        />
        <Button loading = {submitting} floated="right" positive type="submit" content="Submit"/>
        <Button
          floated="right"
          type="button"
          content="Cancel"
          onClick={() => {
            dispatcher(setEditMode(false));
          }}
        />
      </Form>
    </Segment>
  );
};
