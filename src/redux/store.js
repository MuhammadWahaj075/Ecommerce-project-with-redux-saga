// import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSaga from "./ProductSaga";


// redux create store
// const store = createStore(rootReducer);

// redux toolkit create store "reducer" is a required argument,
// and must be a function or an object of functions that can be passed to combineReducers.
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
      reducer: rootReducer,
      middleware:  [sagaMiddleware]
      });
sagaMiddleware.run(productSaga)

export default store;
