import config from './config'
import firebase from 'firebase/app'
import 'firebase/auth'

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export {firebase as default, auth}
