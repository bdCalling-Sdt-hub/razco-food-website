import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    products: [],
};


export const getRelatedProduct = createAsyncThunk(
    'getRelatedProduct',
    async (id, thunkApi) => {
        try{
            
            const response = await baseURL.get(`/product/related-product/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            return response?.data?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getRelatedProductSlice = createSlice({
    name: 'getRelatedProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getRelatedProduct.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getRelatedProduct.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.products= action.payload
        }),
        builder.addCase(getRelatedProduct.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.products=  []
        })
    }
})

export default getRelatedProductSlice.reducer