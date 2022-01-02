// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCQoAQ0c5BydPMrr_zhYOlv7StJHrlAIA0",
  authDomain: "traffic-simulator-e5f10.firebaseapp.com",
  projectId: "traffic-simulator-e5f10",
  storageBucket: "traffic-simulator-e5f10.appspot.com",
  messagingSenderId: "766733819910",
  appId: "1:766733819910:web:f964c29edf0a6ac9e72387",
  measurementId: "G-81GNXCSQ8P"
};

const app =initializeApp(firebaseConfig);
const db = getFirestore();


//On Window Close
/*
window.onbeforeunload = function (e) {
  var e = e || window.event;

  add();
  return 'Please press the Logout button to logout.';
};

async function add(){
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan"
    });
  
    console.log("Document written with ID: ");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}*/