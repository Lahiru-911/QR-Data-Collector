import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyB2ROw-QSBge5SmvjLS55vNpsWbenzBfbU",
    authDomain: "qrapp-c9ab2.firebaseapp.com",
    databaseURL: "https://qrapp-c9ab2-default-rtdb.asia-southeast1.firebasedatabase.app", // Use the correct database URL
    projectId: "qrapp-c9ab2",
    messagingSenderId: "61221759573",
    appId: "1:61221759573:android:4e09a8f3e10940c2c882dc",
};

// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
    initializeApp(firebaseConfig);
} else {
    console.log("Firebase app already initialized.");
}

// Initialize Realtime Database
const database = getDatabase();

export { database }; // Only export the database
