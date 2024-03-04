// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAug8rHwXjdGYKyTRsr9DFRfgBiXxY7gzM",
  authDomain: "tt-lab-page-2024.firebaseapp.com",
  projectId: "tt-lab-page-2024",
  storageBucket: "tt-lab-page-2024.appspot.com",
  messagingSenderId: "989021478065",
  appId: "1:989021478065:web:7e721bbcdf9778745bd690",
  measurementId: "G-1PZ1WYB1H3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
