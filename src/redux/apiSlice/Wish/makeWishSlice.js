import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false
};


export const makeWish = createAsyncThunk(
    'makeWish',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/wishlist`, {product: value}, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            });

            return response?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const makeWishSlice = createSlice({
    name: 'makeWish',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(makeWish.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(makeWish.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(makeWish.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default makeWishSlice.reducer