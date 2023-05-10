const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
require('dotenv').config()
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyDnbnAR1b4V_MUAO705aySb7fRWSSkRM1g",
    authDomain: "auth-7f20c.firebaseapp.com",
    projectId: "auth-7f20c",
    storageBucket: "auth-7f20c.appspot.com",
    messagingSenderId:"1016146106538",
    appId: "1:1016146106538:web:2b5771990f4e167091d8d3"
   /*  apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId:process.env.MESSAGING_SENDER_ID,
    appId: process.env.APPID */
  };
  console.log(process.env);
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
module.exports = getStorage(firebaseApp);