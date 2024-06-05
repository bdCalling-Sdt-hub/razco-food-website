import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    offers: []
};


export const getOffer = createAsyncThunk(
    'getOffer',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/offer`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getOfferSlice = createSlice({
    name: 'getOffer',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getOffer.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getOffer.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.offers= action.payload?.data
        }),
        builder.addCase(getOffer.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.offers= []
        })
    }
})

export default getOfferSlice.reducer