import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

let baseQuery = fetchBaseQuery({
  baseUrl: "",
});
export const apiSlice = createApi({
    reducerPath: 'noteapi',
    baseQuery,
    endpoints: (builder) => ({})
})