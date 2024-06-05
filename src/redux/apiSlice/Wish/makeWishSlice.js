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
                    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjAyMmVhYzNkNGEwMWM4Mzg2YmY1NyIsImVtYWlsIjoibmFkaXJob3NzYWluMzM2QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE3NTc2NDM0LCJleHAiOjE3MTc2NjI4MzR9.OKNwSO_YJwwkbIfNssz-KoUAQqBadjL5MIokd8iqYQU`,
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