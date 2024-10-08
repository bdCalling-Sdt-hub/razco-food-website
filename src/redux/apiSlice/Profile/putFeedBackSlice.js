import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false
};


export const putFeedBack = createAsyncThunk(
    'putFeedBack',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/feedback`, {...value}, {
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



export const putFeedBackSlice = createSlice({
    name: 'putFeedBack',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(putFeedBack.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(putFeedBack.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.points= action.payload
        }),
        builder.addCase(putFeedBack.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
})

export default putFeedBackSlice.reducer