import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    products: []
};


export const getSearchProductList = createAsyncThunk(
    'getSearchProductList',
    async (search, thunkApi) => {
        try{
            const response = await baseURL.get(`/product?search=${search}`);
            return response?.data?.data;
        }catch(error){
            console.log(error)
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getSearchProductListSlice = createSlice({
    name: 'getSearchProductList',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getSearchProductList.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getSearchProductList.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.products= action.payload
        }),
        builder.addCase(getSearchProductList.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.products= []
        })
    }
})

export default getSearchProductListSlice.reducer