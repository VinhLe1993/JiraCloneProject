import { all } from "redux-saga/effects";
import * as Cyberbugs from './CyberBugs/UserCyberBugsSaga'

export function * rootSaga() {
    yield all ([



        //Nghiệp vụ cyberbugs
        Cyberbugs.theoDoiSignin()
    ])
}