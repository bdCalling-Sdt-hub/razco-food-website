import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "@/Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    points: {}
};


export const getPoints = createAsyncThunk(
    'getPoints',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/user/my-points`, {
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



export const getPointsSlice = createSlice({
    name: 'getPoints',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getPoints.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getPoints.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.points= action.payload
        }),
        builder.addCase(getPoints.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.points= {}
        })
    }
})

export default getPointsSlice.reducer