import * as actionTypes from "../actionTypes";

const initialState = {
  rows: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ROWS_START:
      return { ...state, isLoading: true };
    case actionTypes.GET_ROWS_SUCCESS:
      return { ...state, isLoading: false, rows: action.rows };
    case actionTypes.GET_ROWS_FAIL:
      return state;
    case actionTypes.ADD_ROW_START:
      return { ...state, isLoading: true };
    case actionTypes.ADD_ROW_SUCCESS:
      let addedrows = [...state.rows];
      addedrows.push(action.row);
      return {
        ...state,
        isLoading: false,
        rows: addedrows,
      };
    case actionTypes.ADD_ROW_FAIL:
      return state;
    case actionTypes.UPDATE_ROW_START:
      return { ...state, isLoading: true };
    case actionTypes.UPDATE_ROW_SUCCESS:
      let updatedrows = [...state.rows];
      updatedrows[action.row.editedIndex] = action.row;
      return {
        ...state,
        isLoading: false,
        rows: updatedrows,
      };
    case actionTypes.UPDATE_ROW_FAIL:
      return state;
    case actionTypes.DELETE_ROW_START:
      return { ...state, isLoading: true };
    case actionTypes.DELETE_ROW_SUCCESS:
      let deletedrows = [...state.rows];
      deletedrows.splice(action.row.editedIndex, 1);
      return {
        ...state,
        isLoading: false,
        rows: deletedrows,
      };
    case actionTypes.DELETE_ROW_FAIL:
      return state;

    default:
      return state;
  }
};

export default reducer;
