import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    contact: {}
};


export const getContactUs = createAsyncThunk(
    'getContactUs',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/offer`, {
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



export const getContactUsSlice = createSlice({
    name: 'getContactUs',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getContactUs.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getContactUs.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.contact= action.payload
        }),
        builder.addCase(getContactUs.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.contact= {}
        })
    }
})

export default getContactUsSlice.reducer