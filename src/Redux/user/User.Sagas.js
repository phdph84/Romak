import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import UserActionTypes from './User.types';
import { displaySuccessToastify,displayFailureToastify } from '../../utils/utils';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
  
   if(userAuth) {
    displaySuccessToastify();
    yield put(signInSuccess({ userAuth }));
   }
  } catch (error) {
    yield put(signInFailure(error));
   
  }
}


export function* signInWithEmail({ payload: { username, password } }) {
  try {
    console.log("userPass ===>",username)
    let user;
    yield axios.post(`https://dummyjson.com/auth/login`, { username, password }).then((res)=>{
      const {token, username,firstName,lastName,gender,image,email} = res.data; 
     user = {email,token,username,firstName,lastName,gender,image};
    }).catch((err)=>{
    
      displayFailureToastify();
    });
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}



export function* signOut() {
  try {
    
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}





export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}


export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}



export function* userSagas() {
  yield all([
   
    call(onEmailSignInStart),
    
    call(onSignOutStart)
  
  ]);
}
