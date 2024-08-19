import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false
};


export const editAddress = createAsyncThunk(
    'editAddress',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.patch(`/user/edit-address`, {...value}, {
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



export const editAddressSlice = createSlice({
    name: 'editAddress',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(editAddress.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(editAddress.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(editAddress.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default editAddressSlice.reducer