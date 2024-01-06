import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isApiError, toErrorWithMessage } from "../../utils";
import { setCredentials } from "../auth/authSlice";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),

  endpoints: (build) => ({
    userAuthenticated: build.mutation({
      query: ({ username, password }) => ({
        url: `/auth/login`,
        method: "POST",
        body: { username, password },
        headers: {
          "Content-Type": "application/json",
        },
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

export const { useUserAuthenticatedMutation } = api;
