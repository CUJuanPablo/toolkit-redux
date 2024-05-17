import { configureStore } from '@reduxjs/toolkit' 
import { store } from './app/store'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {},
})
