import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    subCategory: []
};


export const getSubCategory = createAsyncThunk(
    'getSubCategory',
    async (id, thunkApi) => {
        try{
            const response = await baseURL.get(`/category/all-subcategories/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getSubCategorySlice = createSlice({
    name: 'getSubCategory',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getSubCategory.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getSubCategory.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.subCategory= action.payload
        }),
        builder.addCase(getSubCategory.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.subCategory= []
        })
    }
})

export default getSubCategorySlice.reducer