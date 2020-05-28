import * as actionTypes from "../actionTypes";
import * as firestoreUtils from "../../utils/firestoreUtils";
import * as constants from "../../utils/constants";
/**
 * Get Rows
 */
export const getRows = () => {
  return async (dispatch) => {
    dispatch(getRowsStart());
    firestoreUtils
      .getCollection(constants.ROWS_COLLECTION)
      .then((Rows) => {
        dispatch(getRowsSuccess(Rows));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getRowsStart = () => ({
  type: actionTypes.GET_ROWS_START,
});

export const getRowsSuccess = (Rows) => ({
  type: actionTypes.GET_ROWS_SUCCESS,
  Rows: Rows,
});

export const getRowsFail = (error) => ({
  type: actionTypes.GET_ROWS_FAIL,
});

/**
 * Add Row
 */
export const addRow = (Row) => {
  return async (dispatch) => {
    dispatch(addRowStart());
    firestoreUtils
      .addCollectionDocument(constants.ROWS_COLLECTION, Row)
      .then((documentId) => {
        dispatch(addRowSuccess({ ...Row, documentId }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addRowStart = () => ({
  type: actionTypes.ADD_ROW_START,
});

export const addRowSuccess = (Row) => ({
  type: actionTypes.ADD_ROW_SUCCESS,
  Row: Row,
});

export const addRowFail = (error) => ({
  type: actionTypes.ADD_ROW_FAIL,
});

/**
 * Update Row
 * @param {Row to be updated} Row
 */
export const updateRow = (Row) => {
  return async (dispatch) => {
    dispatch(updateRowStart());
    firestoreUtils
      .setCollectionDocument(
        constants.ROWS_COLLECTION,
        Row.documentId,
        Row
      )
      .then(() => {
        dispatch(updateRowSuccess(Row));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateRowStart = () => ({
  type: actionTypes.UPDATE_ROW_START,
});

export const updateRowSuccess = (Row) => ({
  type: actionTypes.UPDATE_ROW_SUCCESS,
  Row: Row,
});

export const updateRowFail = (error) => ({
  type: actionTypes.UPDATE_ROW_FAIL,
});

/**
 * Delete Row
 * @param {*} Row
 */
export const deleteRow = (Row) => {
  return async (dispatch) => {
    dispatch(deleteRowStart());
    firestoreUtils
      .updateCollectionDocument(
        constants.ROWS_COLLECTION,
        Row.documentId,
        {
          is_deleted: true,
        }
      )
      .then(() => {
        dispatch(deleteRowSuccess(Row));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteRowStart = () => ({
  type: actionTypes.DELETE_ROW_START,
});

export const deleteRowSuccess = (Row) => ({
  type: actionTypes.DELETE_ROW_SUCCESS,
  Row: Row,
});

export const deleteRowFail = (error) => ({
  type: actionTypes.DELETE_ROW_FAIL,
});
