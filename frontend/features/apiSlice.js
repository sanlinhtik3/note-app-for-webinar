import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl: ""})
export const apiSlice = createApi({
    reducerPath: 'noteapi',
    baseQuery,
    endpoints: (builder) => ({})
})