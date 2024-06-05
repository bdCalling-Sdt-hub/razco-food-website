import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    privacy: {},
};


export const getPrivacyPolicy = createAsyncThunk(
    'getPrivacyPolicy',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/rules/privacy-policy`, {
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



export const getPrivacyPolicySlice = createSlice({
    name: 'getPrivacyPolicy',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getPrivacyPolicy.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getPrivacyPolicy.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.privacy= action.payload
        }),
        builder.addCase(getPrivacyPolicy.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.privacy= {}
        })
    }
})

export default getPrivacyPolicySlice.reducer