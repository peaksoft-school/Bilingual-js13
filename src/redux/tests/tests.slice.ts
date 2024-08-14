import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataTestItem {
  id?: number;
  title?: string;
  number?: number;
  duration?: string;
  description?: string;
}

export interface TestsState { 
  dataTest: DataTestItem[];
}

const initialState: TestsState = {
  dataTest: [],
};

export const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    setDataTest: (state, action: PayloadAction<DataTestItem[]>) => {
      state.dataTest = action.payload;
    },
    deleteDataTest: (state, action: PayloadAction<number>) => {
        state.dataTest = state.dataTest.filter((item) => item.id !== action.payload);

      },
      updateDataTest: (state,action: PayloadAction<DataTestItem>)=> {
        const index = state.dataTest.findIndex(item => item.id === action.payload.id);
        if(index !== -1) {
            state.dataTest[index] = {...state.dataTest[index],...action.payload}
        }
      }
  },
});

export const { setDataTest,deleteDataTest,updateDataTest } = testsSlice.actions;
export default testsSlice.reducer;