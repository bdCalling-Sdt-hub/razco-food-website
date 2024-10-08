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
        const {offer, category, subcategory, search, price} = value;
        try{
            const params = new URLSearchParams();

            if (search) params.append('search', search);
            if (category) params.append('category', category);
            if (price) params.append('maxPrice', price);
            if (price) params.append('minPrice', 0);
            if (category) params.append('category', category);
            if (offer) params.append('offer', offer);
            if (subcategory) params.append('subcategory', subcategory);

            const token = JSON.parse(localStorage.getItem("token"));


            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            const response = await baseURL.get(`/product?${params.toString()}`, config);

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