import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),

  endpoints: (build) => ({
    userAuthenticated: build.mutation({
      query: ({ username, userPassword }) => ({
        url: `/auth/login`,
        method: "POST",
        body: { username: username, password: userPassword },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useUserAuthenticatedMutation } = api;
