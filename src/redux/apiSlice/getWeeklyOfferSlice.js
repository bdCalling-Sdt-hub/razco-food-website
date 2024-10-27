import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    WeeklyDeals: []
};

export const getWeeklyDeal = createAsyncThunk(
    'getWeeklyDeal',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/weekly-deal`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response?.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getWeeklyDealSlice = createSlice({
    name: 'getWeeklyDeal',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getWeeklyDeal.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getWeeklyDeal.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.WeeklyDeals= action.payload?.data
        }),
        builder.addCase(getWeeklyDeal.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.WeeklyDeals= []
        })
    }
})

export default getWeeklyDealSlice.reducer