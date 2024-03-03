import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  // reducers: {
  //   addUsers: (state, action) => {
  //     state.data = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const getUsersThunk = createAsyncThunk(
  "users/getUsers",
  async (_, { /* dispatch,  */ rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/users");

      if (!response.ok) {
        throw new Error("Can`t load data");
      }

      const data = await response.json();
      return data;
      // dispatch(userSlice.actions.addUsers(data))
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { reducer } = userSlice;
