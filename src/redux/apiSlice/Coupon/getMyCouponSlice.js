import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    myCoupons: []
};


export const getMyCoupon = createAsyncThunk(
    'getMyCoupon',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/user/my-coupons`, {
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



export const getMyCouponSlice = createSlice({
    name: 'getMyCoupon',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getMyCoupon.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getMyCoupon.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.myCoupons= action.payload
        }),
        builder.addCase(getMyCoupon.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.myCoupons= []
        })
    }
})

export default getMyCouponSlice.reducer