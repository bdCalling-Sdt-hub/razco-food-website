import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    coupons: []
};


export const getAllCoupon = createAsyncThunk(
    'getAllCoupon',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/coupon`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            console.log(response)
            return response?.data?.data;
        }catch(error){
            console.log(error)
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getAllCouponSlice = createSlice({
    name: 'getAllCoupon',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getAllCoupon.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getAllCoupon.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.coupons= action.payload
        }),
        builder.addCase(getAllCoupon.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.coupons= []
        })
    }
})

export default getAllCouponSlice.reducer