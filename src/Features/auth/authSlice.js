import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, LoginUser } from "./auth.services";

// Check if there is an existing user
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// ASYNCTHUNK FUNCTIONS
// Register User
export const register = createAsyncThunk(
  "/auth/register",
  async (values, thunkAPI) => {
    try {
      return await registerUser(values);
    } catch (error) {
      console.log(error);
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
)

// Register User
export const login = createAsyncThunk(
  "/auth/login",
  async (values, thunkAPI) => {
    try {
      return await LoginUser(values);
    } catch (error) {
      console.log(error);
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
)


// SLICE
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) =>{
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ""
    }
  },
  extraReducers: (builder)=>{
    builder
      .addCase(register.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state)=>{
        state.isLoading = false
        state.isSuccess = true
        
      })
      .addCase(register.rejected, (state)=>{
        state.isLoading = false
        state.isError = true
      })
      .addCase(login.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state)=>{
        state.isLoading = false
        state.isSuccess = true
        
      })
      .addCase(login.rejected, (state)=>{
        state.isLoading = false
        state.isError = true
      })
  }})

  export const {reset} = authSlice.actions

export default authSlice.reducer