import { apiSlice } from "./apiSlice";

const NOTE_URL = "/api/note/";

const noteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => ({
        url: `http://localhost:9000/api/note/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetNotesQuery } = noteApiSlice;
