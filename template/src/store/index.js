import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./user/user.reducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer
});

const persistConfig = {
  storage,
  key: "root"
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

let persistor = persistStore(store);

export { store, persistor };