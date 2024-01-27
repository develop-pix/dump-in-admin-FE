import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isApiError, toErrorWithMessage } from "../../utils";
import { setCredentials } from "../auth/authSlice";
import {
  IDashboards,
  IEvents,
  ISingleEvent,
  IUpdateEvent,
  IUser,
} from "../../interface/dto/Dto.interface";
import { eventsAdded } from "..";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),

  endpoints: (build) => ({
    getDashboard: build.query<IDashboards, void>({
      query: () => "api/dashboard",
    }),
    getEvent: build.query<ISingleEvent, { id: number }>({
      query: ({ id }) => `api/event/${id}`,
    }),
    getEvents: build.mutation<IEvents, { page: number; perPage: number }>({
      query: ({ page, perPage }) => `api/event?page=${page}&perPage=${perPage}`,

      async onQueryStarted({ page, perPage }, api) {
        const { dispatch, queryFulfilled } = api;

        if (page && perPage)
          try {
            const { data: fetchedData } = await queryFulfilled;
            dispatch(
              eventsAdded({ page: page - 1, data: fetchedData?.data?.results })
            );
          } catch (error) {
            if (isApiError(error)) {
              const { data } = error.error;
              reportError(data.message);
            } else {
              reportError(toErrorWithMessage(error).message);
            }
          }
      },
    }),
    eventUpdated: build.mutation<
      IUpdateEvent,
      {
        title: string;
        content: string;
        mainThumbnailUrl: string;
        brandName: string;
        isPublic: boolean;
        startDate: Date;
        endDate: Date;
        hashtags: string[];
        images: string[];
        id: number;
      }
    >({
      query: (eventEdit) => {
        return {
          url: `/event/${eventEdit.id}`,
          method: "PATCH",
          body: JSON.stringify({
            title: eventEdit.title,
            content: eventEdit.content,
            mainThumbnailUrl: eventEdit.mainThumbnailUrl,
            brandName: eventEdit.brandName,
            isPublic: eventEdit.isPublic,
            startDate: eventEdit.startDate,
            endDate: eventEdit.endDate,
            hashtags: eventEdit.hashtags,
            images: eventEdit.images,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),

    userAuthenticated: build.mutation<
      IUser,
      { username: string; password: string }
    >({
      query: ({ username, password }) => ({
        url: `api/auth/login`,
        method: "POST",
        body: { username, password },
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),

      // eslint-disable-next-line no-empty-pattern
      async onQueryStarted({}, api) {
        const { dispatch, queryFulfilled } = api;
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (error) {
          if (isApiError(error)) {
            const { data } = error.error;
            reportError(data.message);
          } else {
            reportError(toErrorWithMessage(error).message);
          }
        }
      },
    }),
  }),
});

export const {
  useUserAuthenticatedMutation,
  useGetDashboardQuery,
  useGetEventsMutation,
  useGetEventQuery,
  useEventUpdatedMutation,
} = api;
