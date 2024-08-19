import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    shops: [],
    pagination: {}
};


export const getShop = createAsyncThunk(
    'getShop',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/offer?page=${value}`, {
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



export const getShopSlice = createSlice({
    name: 'getShop',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getShop.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getShop.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.shops= action.payload?.data
            state.pagination= action.payload.pagination
        }),
        builder.addCase(getShop.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.shops= []
            state.pagination= {}
        })
    }
})

export default getShopSlice.reducer