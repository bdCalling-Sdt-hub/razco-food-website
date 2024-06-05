import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    points: []
};


export const getProfile = createAsyncThunk(
    'getProfile',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/offer?page=${value}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response?.data)
            return response?.data;
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
            state.points= action.payload
        }),
        builder.addCase(getProfile.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.points= []
        })
    }
})

export default getProfileSlice.reducer