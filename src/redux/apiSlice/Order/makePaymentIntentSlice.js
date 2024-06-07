import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    intent: {}
};


export const makePaymentIntent = createAsyncThunk(
    'makePaymentIntent',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/order/create-payment-intent`, {price: value}, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            });
            return response?.data?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const makePaymentIntentSlice = createSlice({
    name: 'makePaymentIntent',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(makePaymentIntent.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(makePaymentIntent.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.intent = action.payload
        }),
        builder.addCase(makePaymentIntent.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.intent = {}
        })
    }
})

export default makePaymentIntentSlice.reducer