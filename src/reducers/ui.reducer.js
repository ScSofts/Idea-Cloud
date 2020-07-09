import UIActions from "../actions/ui.actions";
export default (state, action) => {
    switch (action.type) {
        case UIActions.pathChange:
            return {
                ...state,
                path: action.path,
            };
        default:
            return state;
    }
};
