import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    orders: []
};


export const getOrders = createAsyncThunk(
    'getOrders',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/order/history`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjAyMmVhYzNkNGEwMWM4Mzg2YmY1NyIsImVtYWlsIjoibmFkaXJob3NzYWluMzM2QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE3NjY1OTI4LCJleHAiOjE3MTc3NTIzMjh9.1W_XIoIpRLx8AoB31nCJm9GZjTY-O0FdGiznFpnpxNI`,
                }
            });
            return response?.data?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getOrdersSlice = createSlice({
    name: 'getOrders',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getOrders.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getOrders.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.orders= action.payload
        }),
        builder.addCase(getOrders.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.orders= []
        })
    }
})

export default getOrdersSlice.reducer