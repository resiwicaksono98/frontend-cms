import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setRequest } from "../../utils/axiosInstance";

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: true,
	message: ""
}

export const LoginUser = createAsyncThunk("user/LoginUser", async (user, thunkAPI) => {
	try {
		const response = await setRequest.post('/auth/login', {
			email: user.email,
			password: user.password
		})
		return response.data.user;
	} catch (error) {
		if (error.response) {
			const message = error.response.data.msg
			return thunkAPI.rejectWithValue(message)
		}
	}
})

// set geMe in file layout.js
export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
	try {
		const response = await setRequest.get('/me')
		return response.data
	} catch (error) {
		if (error.response) {
			const message = error.response.data.msg
			return thunkAPI.rejectWithValue(message)
		}
	}
})

export const LogOut = createAsyncThunk("user/LogOut", async () => {
	const response = await setRequest.delete('/auth/logout')
	return response.data
})

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {
		builder.addCase(LoginUser.pending, (state) => {
			state.isLoading = true
		});
		builder.addCase(LoginUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isSuccess = true;
			state.user = action.payload
		});
		builder.addCase(LoginUser.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.message = action.payload
		})

		// Get User Login
		builder.addCase(getMe.pending, (state) => {
			state.isLoading = true
		});
		builder.addCase(getMe.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isSuccess = true;
			state.user = action.payload
		});
		builder.addCase(getMe.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.user = null
			state.message = action.payload
		})
	}
})

export const { reset } = authSlice.actions
export default authSlice.reducer;
