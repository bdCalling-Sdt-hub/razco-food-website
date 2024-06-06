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