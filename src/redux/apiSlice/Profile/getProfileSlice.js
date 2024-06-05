import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {}
};


export const getProfile = createAsyncThunk(
    'getProfile',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/user/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjAyMmVhYzNkNGEwMWM4Mzg2YmY1NyIsImVtYWlsIjoibmFkaXJob3NzYWluMzM2QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE3NTc2NDM0LCJleHAiOjE3MTc2NjI4MzR9.OKNwSO_YJwwkbIfNssz-KoUAQqBadjL5MIokd8iqYQU`,
                }
            });
            return response?.data?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getProfileSlice = createSlice({
    name: 'getProfile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getProfile.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getProfile.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.profile= action.payload
        }),
        builder.addCase(getProfile.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.profile= {}
        })
    }
})

export default getProfileSlice.reducer