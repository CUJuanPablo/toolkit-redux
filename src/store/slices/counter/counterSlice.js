import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counter:10
  },
  reducers: {
    increment: (state) => {
        state.counter ++
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { increment  } = counterSlice.actions 