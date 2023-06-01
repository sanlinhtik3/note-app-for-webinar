import { apiSlice } from "./apiSlice";

// const NOTE_URL = "/abc/posts";

const noteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => ({
        url: `/foo/api/note`,
      }),
    }),
    getNote: builder.query({
      query: (detail_id) => ({
        url: `/foo/api/note/${detail_id}`,
      }),
    }),
  }),
});

export const { useGetNotesQuery, useGetNoteQuery } = noteApiSlice;
