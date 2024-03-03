import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
  isLoading: false,
  error: null,
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getUsersThunk.fulfilled, usersAdapter.addMany)
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const getUsersThunk = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/users");

      if (!response.ok) {
        throw new Error("Can`t load data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state) => state.users)

export const { reducer } = userSlice;
