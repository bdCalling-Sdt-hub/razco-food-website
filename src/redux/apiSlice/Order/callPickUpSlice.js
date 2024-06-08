import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
};


export const callForPickUp = createAsyncThunk(
    'callForPickUp',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/order/call-for-pickup`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            });
            return response?.data?.message;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const callForPickUpSlice = createSlice({
    name: 'callForPickUp',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(callForPickUp.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(callForPickUp.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(callForPickUp.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default callForPickUpSlice.reducer