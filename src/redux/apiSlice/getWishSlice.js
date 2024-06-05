import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    wish: []
};


export const getWish = createAsyncThunk(
    'getWish',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/wishlist/products`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjAyMmVhYzNkNGEwMWM4Mzg2YmY1NyIsImVtYWlsIjoibmFkaXJob3NzYWluMzM2QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE3NTc2NDM0LCJleHAiOjE3MTc2NjI4MzR9.OKNwSO_YJwwkbIfNssz-KoUAQqBadjL5MIokd8iqYQU`,
                }
            });
            console.log(response)
            return response?.data?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getWishSlice = createSlice({
    name: 'getWish',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getWish.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getWish.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.wish= action.payload
        }),
        builder.addCase(getWish.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.wish= []
        })
    }
})

export default getWishSlice.reducer