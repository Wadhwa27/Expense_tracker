import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:8080";
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    //get categories
    getCategories: builder.query({
      // get: http://localhost:8080/api/categories
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),
    //get labels
    getLabels: builder.query({
      // get: http://localhost:8080/api/labels
      query: () => "/api/labels",
      providesTags: ["transaction"],
    }),
    //add new Transaction
    // mutation is used for create, update and delete
    addTransaction: builder.mutation({
      // post: http://localhost:8080/api/transaction
      query: (initialTransaction) => ({
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),
    //delete record
    deleteTransaction: builder.mutation({
      // delete: http://localhost:8080/api/transaction
      query: (recordId) => ({
        url: "/api/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default apiSlice;
