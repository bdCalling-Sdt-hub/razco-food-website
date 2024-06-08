import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
};


export const emailVerify = createAsyncThunk(
    'emailVerify',
    async (value, thunkApi) => {
        console.log(value)
        try{
            const response = await baseURL.post(`/user/verify-email`, value);
            return response?.data?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const emailVerifySlice = createSlice({
    name: 'emailVerify',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(emailVerify.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(emailVerify.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(emailVerify.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default emailVerifySlice.reducer