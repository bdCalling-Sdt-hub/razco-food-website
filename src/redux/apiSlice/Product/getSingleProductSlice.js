import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    product: {},
};


export const getSingleProduct = createAsyncThunk(
    'getSingleProduct',
    async (id, thunkApi) => {
        try{
            
            const response = await baseURL.get(`/product/${id}`, {
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



export const getSingleProductSlice = createSlice({
    name: 'getSingleProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getSingleProduct.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getSingleProduct.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.product= action.payload
        }),
        builder.addCase(getSingleProduct.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.product=  {}
        })
    }
})

export default getSingleProductSlice.reducer