import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    datas: []
};


export const getSubCategoryById = createAsyncThunk(
    'getSubCategoryById',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/category/all-subcategories/${value}`, {
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



export const getSubCategoryByIdSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getSubCategoryById.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getSubCategoryById.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.datas= action.payload
        }),
        builder.addCase(getSubCategoryById.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.datas= []
        })
    }
})

export default getSubCategoryByIdSlice.reducer