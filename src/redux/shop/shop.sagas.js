import { takeLatest, call, put } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

//generator function
export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
  //all generator functions must have yield inside
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    //call is a method that takes as its first argument function/method and the sub arguments are the parameters that you pass in to the function
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  //   collectionRef
  //     .get()
  //     .then((snapshot) => {
  //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //       dispatch(fetchCollectionsSuccess(collectionsMap));
  //       //updateCollections(collectionsMap);
  //       // this.setState({ loading: false });
  //     })
  //     .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}