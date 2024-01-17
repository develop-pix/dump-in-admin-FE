import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IEvent } from "../../interface/dto/Dto.interface";

export type EventsState = {
  page: number;
  data: IEvent[];
};

type State = EventsState[];

const initialState: State = [];

export const eventSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    eventsAdded(state, action) {
      const payloadData = action.payload;

      const existEventIndex = state.findIndex(
        (x) => x.page === payloadData.page
      );

      if (existEventIndex !== -1) {
        state[existEventIndex] = payloadData;
      } else {
        state.push(payloadData);
      }
    },
  },
});

export const { eventsAdded } = eventSlice.actions;
export const selectEvent = (state: RootState) => state.events;

export default eventSlice;
