
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyASQdYasDLzM-cE_TA28DunCt54CMVvbCA",
  authDomain: "vlearn-ashlin.firebaseapp.com",
  projectId: "vlearn-ashlin",
  storageBucket: "vlearn-ashlin.firebasestorage.app",
  messagingSenderId: "856597342573",
  appId: "1:856597342573:web:c3dc709f4637d694b3d264",
  measurementId: "G-WVSWMT0XVX"
}



const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
