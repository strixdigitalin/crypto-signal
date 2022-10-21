import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'userData',
    initialState: {
        investments:
        {
            capital: '',
            investmet1: '',
            amount1: '',
            investmet2: '',
            amount2: '',
            investmet3: '',
            amount3: '',
        }
        ,
    },
    reducers: {
        setCapitalaction: (state, action) => {
            state.investments.capital = action.payload
        },
        setInvestment1action: (state, action) => {
            state.investments.investmet1 = action.payload
        },
        setAmount1action: (state, action) => {
            state.investments.amount1 = action.payload
        },
        setInvestment2action: (state, action) => {
            state.investments.investmet2 = action.payload
        },
        setAmount2action: (state, action) => {
            state.investments.amount2 = action.payload
        },
        setInvestment3action: (state, action) => {
            state.investments.investmet3 = action.payload
        },
        setAmount3action: (state, action) => {
            state.investments.amount3 = action.payload
        },
    }
})

export const {
    setCapitalaction,
    setInvestment1action,
    setAmount1action,
    setInvestment2action,
    setAmount2action,
    setInvestment3action,
    setAmount3action
} = dataSlice.actions;

export default dataSlice.reducer;