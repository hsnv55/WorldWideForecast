import { configureStore } from '@reduxjs/toolkit'
import HistoryReducer from './HistorySlice '
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer ,persistStore}from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

export const store = configureStore({
  reducer: {
    history: persistReducer(persistConfig, HistoryReducer),
  },
})
export const persistore=persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch