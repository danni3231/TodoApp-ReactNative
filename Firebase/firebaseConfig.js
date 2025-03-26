import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: process.env.EXPO_PUBLIC_APIKEY,
	authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
	databaseURL: process.env.EXPO_PUBLIC_DATABASEURL,
	projectId: process.env.EXPO_PUBLIC_PROJECTID,
	storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
	messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,
	appId: process.env.EXPO_PUBLIC_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize the database
export const db = getDatabase(app);
