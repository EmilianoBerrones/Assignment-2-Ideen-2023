import firebase from 'firebase/compat'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCiNJAdY4M-_4_VcypZjI4KzELxBz6b1Zo',
  authDomain: 'proyecto-ideen-2023-ui-alumnos.firebaseapp.com',
  projectId: 'proyecto-ideen-2023-ui-alumnos',
  storageBucket: 'proyecto-ideen-2023-ui-alumnos.appspot.com',
  messagingSenderId: '114845798701',
  appId: '1:114845798701:web:f0ae37a2f8a94cca86c3a4',
  measurementId: 'G-8YZVE4VSLE'
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore
