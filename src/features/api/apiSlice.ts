import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
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
    }),
  }),
});

export const { useUserAuthenticatedMutation } = api;
