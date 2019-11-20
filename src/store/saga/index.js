import {takeEvery} from "redux-saga/effects";
import types from '../actionsTypes'
import {fetchItems} from "../saga/sagas";
import {registerUserSaga} from "./sagas";

export function* watchSaga() {
  yield takeEvery(types.SIGN_UP, registerUserSaga);
}
