import { call, put } from "redux-saga/effects";
import {registerSuccess} from "../actions/registerActions";
import {registerUserApi} from "../../api";



export function* registerUserSaga(action) {
  try {

    console.log(action);

    // const result = yield call(registerUserApi, action.payload);

    // if(result.status === 200 && result.data){
    //   yield put(registerSuccess(result));
    // }

    yield put(registerSuccess({
      token: "1412425235235",
      user: {
        firstName: "slkkljg",
        lastName: "slkkljg",
        email: "slkkljg",
      }
    }));

  } catch (error) {
    console.log("--error: ", error)
    // yield put({ type: types.ACTION_FAILED, payload: error.message });
  }
}


