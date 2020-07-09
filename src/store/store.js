import { createStore } from "redux";
import UIReducer from "../reducers/ui.reducer";
const defaultState = {
    isLogin: false,
    path: "/",
};
const reducer = (state = defaultState, action) => {
    var tmpState = UIReducer(state, action);
    return tmpState;
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
