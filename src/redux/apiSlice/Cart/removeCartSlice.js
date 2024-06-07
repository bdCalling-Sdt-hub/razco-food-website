import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false
};


export const removeCart = createAsyncThunk(
    'removeCart',
    async (id, thunkApi) => {
        try{
            const response = await baseURL.delete(`/cart/${id}`, {
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



export const removeCartSlice = createSlice({
    name: 'removeCart',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(removeCart.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(removeCart.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(removeCart.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default removeCartSlice.reducer