import { createSlice } from "@reduxjs/toolkit";
import { postApi } from "../api";

export const postSlice = createSlice({
  name: "post",
  initialState: { data: [] } as ISlicePost,
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
