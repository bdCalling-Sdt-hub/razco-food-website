import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    terms:  {}
};


export const getTerms = createAsyncThunk(
    'getTerms',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/rules/terms-and-conditions`, {
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



export const getTermsSlice = createSlice({
    name: 'getTerms',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getTerms.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getTerms.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.terms= action.payload
        }),
        builder.addCase(getTerms.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.terms= {}
        })
    }
})

export default getTermsSlice.reducer