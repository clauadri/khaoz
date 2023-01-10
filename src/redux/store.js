import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import artesaniasReducer from "./artesanias/artesanias.reducer";
import lienzosReducer from "./lienzos/lienzos.reducer";
import userReducer from "./users/users.reducer";

const rootReducer = combineReducers({
  artesanias: artesaniasReducer,
  lienzos: lienzosReducer,
  users: userReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;