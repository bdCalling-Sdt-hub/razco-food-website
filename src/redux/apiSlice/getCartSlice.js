import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    carts: []
};


export const getCart = createAsyncThunk(
    'getCart',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/cart/products`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjAyMmVhYzNkNGEwMWM4Mzg2YmY1NyIsImVtYWlsIjoibmFkaXJob3NzYWluMzM2QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE3NTc2NDM0LCJleHAiOjE3MTc2NjI4MzR9.OKNwSO_YJwwkbIfNssz-KoUAQqBadjL5MIokd8iqYQU`,
                }
            });
            return response?.data?.data?.products;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getCartSlice = createSlice({
    name: 'getCart',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getCart.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getCart.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.carts= action.payload
        }),
        builder.addCase(getCart.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.carts= []
        })
    }
})

export default getCartSlice.reducer