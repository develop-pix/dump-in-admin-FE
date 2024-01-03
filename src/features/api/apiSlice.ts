import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

      async onQueryStarted({ id, qty }, api) {
        if (qty && id) {
          const { dispatch, queryFulfilled } = api;
          const { data } = await queryFulfilled;

          console.log(data);
        }
      },
    }),
  }),
});

export const { useUserAuthenticatedMutation } = api;
