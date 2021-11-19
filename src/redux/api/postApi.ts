import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: String(import.meta.env.VITE_API_URL),
  }),
  endpoints(builder) {
    return {
      fetchAllPost: builder.query<IResApi[], any>({
        query: ({ limit = 10, page = 0 }: any) =>
          `/search/?limit=${limit}&page=${page}`,
        transformResponse: (response: any) => {
          const parseCountries: IResApi[] = [...[], ...response];

          return parseCountries;
        },
      }),

      fetchOnePost: builder.query<IResApi, any>({
        query: ({ image_id }: any) => `/${image_id}`,
      }),
    };
  },
});

export const { useFetchAllPostQuery, useFetchOnePostQuery } = postApi;
