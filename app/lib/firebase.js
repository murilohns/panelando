import * as firebase from 'firebase'
import { assoc, compose, mapObjIndexed, values } from 'ramda'

const config = {
  apiKey: "AIzaSyDz2S2iOm2HJ4B5mAtnZATPOoS3BSfY8gY",
  authDomain: "panelando-ec672.firebaseapp.com",
  databaseURL: "https://panelando-ec672.firebaseio.com",
  storageBucket: "gs://panelando-ec672.appspot.com",
  messagingSenderId: "13711355875"
}

firebase.initializeApp(config)

export const auth = firebase.auth
export const database = firebase.database
export const storage = firebase.storage

const addKeyAsId = (val, key) => assoc('id', key, val)
export const normalize = compose(values, mapObjIndexed(addKeyAsId))

