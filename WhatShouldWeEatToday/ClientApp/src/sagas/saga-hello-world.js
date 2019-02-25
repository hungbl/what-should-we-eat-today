import axios from 'axios';
import { take, call, put, fork } from 'redux-saga/effects';
import * as c from '../constants/constant';
import {helloWorld} from '../actions/action';

export function* sagaHelloWorld(){
    while (true) {
      const {payload} = yield take(c.COUNT_CLICKS);
      try {
        //const url = 'hello-world/get-message';
  
        //let res = yield call(axios.post, url, payload);
        if(1 == 0){
          return;
          //yield put(fetchOutput(res.data.data));
        }else{
          // alert('Something wrong happened!');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }