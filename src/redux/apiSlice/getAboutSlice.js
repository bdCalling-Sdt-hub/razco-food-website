import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    about: {}
};


export const getAboutUs = createAsyncThunk(
    'getAboutUs',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/rules/about`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getAboutUsSlice = createSlice({
    name: 'getAboutUs',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getAboutUs.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getAboutUs.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.about= action.payload
        }),
        builder.addCase(getAboutUs.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.about= {}
        })
    }
})

export default getAboutUsSlice.reducer