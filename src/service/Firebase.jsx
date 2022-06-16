import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaFbaqnVIy6tW4zxa5TqONhIh3tTdpmdk",
  authDomain: "trabajo-ads.firebaseapp.com",
  projectId: "trabajo-ads",
  storageBucket: "trabajo-ads.appspot.com",
  messagingSenderId: "483150371942",
  appId: "1:483150371942:web:23f135a497eb809a7d61a7"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)