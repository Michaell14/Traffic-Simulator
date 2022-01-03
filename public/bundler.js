// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, query, doc, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

let scores=[]
const q = query(collection(db, "scores"));

//Gets all the high scores from the firestore database
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  scores.push([doc.data().score, doc.id]);
});

//Sorts the high scores from lowest to highest
scores = scores.sort(function(a, b) {
  return a[0] - b[0];
});

//Adds the current score to firestore database when it becomes a high score.
setInterval(async function() {
  let time = document.getElementById("timer").innerHTML.split(":");
  let currScore = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
  
  //Checks if the score is greater than lowest high score
  if (currScore>scores[0][0]){
    await setDoc(doc(db, "scores", scores[0][1]), {
      score: currScore
    });
  }

}, 1000);

for (let i=0; i<scores.length; i++){
  createScores(scores[i][0]);
}

//Adds the scores to the web page
function createScores(score){
  const newScore=document.createElement("div");
  const newH2 = document.createElement("h3");

  newScore.className = "score";
  
  newH2.innerHTML = score;
  newScore.append(newH2);

  document.getElementById("scores").append(newScore);
}