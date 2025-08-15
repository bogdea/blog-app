import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVol6mdOP6IIqGl66K-IA_6wdbtl68Evg",
  authDomain: "blog-app-92796.firebaseapp.com",
  projectId: "blog-app-92796",
  storageBucket: "blog-app-92796.firebasestorage.app",
  messagingSenderId: "759866424035",
  appId: "1:759866424035:web:59709eb56e31a9a83963d6",
  measurementId: "G-P7VFG08NXE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
