import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false
};


export const makeCart = createAsyncThunk(
    'makeCart',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/cart/add-to-cart`, {...value}, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            });
            return response?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const makeCartSlice = createSlice({
    name: 'makeCart',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(makeCart.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(makeCart.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(makeCart.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default makeCartSlice.reducer