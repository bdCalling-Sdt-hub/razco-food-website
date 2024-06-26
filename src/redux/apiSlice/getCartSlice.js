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
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            });
            localStorage.setItem("cartId",response.data.data._id)
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