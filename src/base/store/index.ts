import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type CounterSlice = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<CounterSlice> = useSelector;
export default store;
