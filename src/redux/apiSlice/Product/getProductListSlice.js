import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    products: [],
    pagination: {}
};


export const getProductList = createAsyncThunk(
    'getProductList',
    async (value, thunkApi) => {
        const {offer, category, subcategory} = value;
        try{
            const params = new URLSearchParams();

            if (category) params.append('category', category);
            if (offer) params.append('offer', offer);
            if (subcategory) params.append('subcategory', subcategory);
            
            const response = await baseURL.get(`/product?${params.toString()}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjAyMmVhYzNkNGEwMWM4Mzg2YmY1NyIsImVtYWlsIjoibmFkaXJob3NzYWluMzM2QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE3NjY1OTI4LCJleHAiOjE3MTc3NTIzMjh9.1W_XIoIpRLx8AoB31nCJm9GZjTY-O0FdGiznFpnpxNI`,
                }
            });
            return response?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getProductListSlice = createSlice({
    name: 'getProductList',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getProductList.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getProductList.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.products= action.payload.data
            state.pagination= action.payload.pagination
        }),
        builder.addCase(getProductList.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.products= []
            state.pagination= {}
        })
    }
})

export default getProductListSlice.reducer