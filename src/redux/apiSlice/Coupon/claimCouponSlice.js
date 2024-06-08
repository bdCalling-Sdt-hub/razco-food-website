import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
};


export const claimCoupon = createAsyncThunk(
    'claimCoupon',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/coupon/claim-coupon`, {...value}, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            console.log(response)
            return response?.data?.message;
        }catch(error){
            console.log(error)
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const claimCouponSlice = createSlice({
    name: 'claimCoupon',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(claimCoupon.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(claimCoupon.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(claimCoupon.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default claimCouponSlice.reducer