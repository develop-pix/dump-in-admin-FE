import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
        body: { username: username, password: password },
        headers: {
          "Content-Type": "application/json",
        },
      }),

      // eslint-disable-next-line no-empty-pattern
      async onQueryStarted({}, api) {
        const { dispatch, queryFulfilled } = api;
        const { data } = await queryFulfilled;

        dispatch(setCredentials(data));
      },
    }),
  }),
});

export const { useUserAuthenticatedMutation } = api;
