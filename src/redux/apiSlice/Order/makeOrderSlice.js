import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
};


export const makeOrder = createAsyncThunk(
    'makeOrder',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/order`, {...value}, {
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



export const makeOrderSlice = createSlice({
    name: 'makeOrder',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(makeOrder.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(makeOrder.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(makeOrder.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default makeOrderSlice.reducer