import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, LoginUser } from "./auth.services";


// Check if there is an existing user
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user: user ? user :  null,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

// ASYNCTHUNK FUNCTIONS
// Register User
export const register = createAsyncThunk(
  "/auth/register",
  async (user, thunkAPI) => {
    try {
      return await registerUser(user);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

// Login User
export const login = createAsyncThunk("/auth/login", async (user, thunkAPI) => {
  try {
    return await LoginUser(user);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue();
  }
});

// SLICE
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
