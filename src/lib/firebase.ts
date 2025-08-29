import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDe5y36o20UljbDx2ED8g9vO9bU_u1kpOM",
  authDomain: "blog-app-b4517.firebaseapp.com",
  projectId: "blog-app-b4517",
  storageBucket: "blog-app-b4517.firebasestorage.app",
  messagingSenderId: "554287595961",
  appId: "1:554287595961:web:bf51dfe736a5db9bdbb668",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
