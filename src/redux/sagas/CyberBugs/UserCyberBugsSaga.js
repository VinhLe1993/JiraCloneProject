import Axios from 'axios';
import { call, delay, fork, take, takeEvery, takeLatest, put} from 'redux-saga/effects'
import {USER_SIGNIN_API} from '../../constants/Cyberbugs/Cyberbugs'


//Quản lý các action saga

function * signin(action) {
    
}


export function * theoDoiSignin(){
    yield takeLatest(USER_SIGNIN_API)
}