import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
  },
  reducers: {
    add: (state, action) => {
      state.employees.push(action.payload);
    }
  }
});

export const { add } = employeesSlice.actions;

const { reducer } = employeesSlice;
export default reducer;