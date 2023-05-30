import { apiSlice } from "./apiSlice";

// const NOTE_URL = "/abc/posts";

const noteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: (id = "6475f3170e154fbdd1936bed") => ({
        url: `foo/api/note/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetNotesQuery } = noteApiSlice;
