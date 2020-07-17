import { COLLECTION_KEY } from '../../constants/projectConstants';
import { ActionTypes } from './actionTypes';

const createMedicine = (medicine) => {
  return (dispatch, getState, { getFirestore }) => {
    const uniqueId = Math.random().toString();

    return getFirestore()
      .collection(COLLECTION_KEY)
      .doc(uniqueId)
      .set({ ...medicine, uniqueId })
      .then(() =>
        dispatch({
          type: ActionTypes.CREATE_MEDICINE_SUCCESS,
          payload: 'Created successfully',
        }),
      )
      .catch((error) =>
        dispatch({
          type: ActionTypes.CREATE_MEDICINE_ERROR,
          payload: error,
        }),
      );
  };
};

const updateMedicine = (medicine, id) => {
  return (dispatch, getState, { getFirestore }) => {
    return getFirestore()
      .collection(COLLECTION_KEY)
      .doc(id)
      .update({ ...medicine, id })
      .then(() =>
        dispatch({
          type: ActionTypes.UPDATE_MEDICINE_SUCCESS,
          payload: 'Updated successfully',
        }),
      )
      .catch((error) =>
        dispatch({
          type: ActionTypes.UPDATE_MEDICINE_ERROR,
          payload: error,
        }),
      );
  };
};

const deleteMedicine = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    return getFirestore()
      .collection(COLLECTION_KEY)
      .doc(id)
      .delete()
      .then(() =>
        dispatch({
          type: ActionTypes.DELETE_MEDICINE_SUCCESS,
          payload: 'Deleted successfully',
        }),
      )
      .catch((error) =>
        dispatch({
          type: ActionTypes.DELETE_MEDICINE_ERROR,
          payload: error,
        }),
      );
  };
};

export { createMedicine, updateMedicine, deleteMedicine };
