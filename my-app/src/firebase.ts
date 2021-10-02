import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APP_API_KEY,
    authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_APP_PROJECT_ID,
    storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_APP_ID,
  };

// firebaseConfig 정보로 firebase 시작
const app =initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = getFirestore(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };