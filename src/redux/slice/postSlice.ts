import { createSlice } from "@reduxjs/toolkit";
import { postApi } from "../api";

export const postSlice = createSlice({
  name: "post",
  initialState: { data: [], currentPage: 0 } as ISlicePost,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postApi.endpoints.fetchAllPost.matchFulfilled,
      (state, { payload }) => {
        state.data = [...state.data, ...payload];
      }
    );
  },
});

const { reducer } = postSlice;
export default reducer;
