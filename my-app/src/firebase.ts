import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, deleteDoc } from "firebase/firestore/lite";
import { firebaseConfig } from './.env'

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
const firebase = { db, collection, doc, getDocs, getDoc, addDoc, deleteDoc };
export default firebase;