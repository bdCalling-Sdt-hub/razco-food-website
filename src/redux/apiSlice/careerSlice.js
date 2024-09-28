import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";



const initialState = {
    error: false,
    success: false,
    loading: false
};


export const career = createAsyncThunk(
    'career',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/application`, value, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response;
        }catch(error){
            console.log(error)
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const careerSlice = createSlice({
    name: 'career',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(career.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(career.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(career.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default careerSlice.reducer