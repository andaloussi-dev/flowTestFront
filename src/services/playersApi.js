import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const playersHeaders = {
  'X-Powered-By': 'Express',
  'ETag':'W/"1473-Ayc0so5yKsXU6TujC7nC59RkL3w"',
  'Connection':'keep-alive',
  'Content-Type':'application/json',
  "Access-Control-Allow-Origin":"*"

};

const createRequest = (url) => ({ url, headers: playersHeaders });

export const playersApi = createApi({
  reducerPath: 'playersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_PLAYERS_API_URL }),
  endpoints: (builder) => ({
    getplayers: builder.query({
      query: () => createRequest('/items'),
    }),
  }),
});

export const { useGetplayersQuery } = playersApi;