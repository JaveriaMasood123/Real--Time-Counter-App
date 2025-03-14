
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"; 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBvhp5RdY17DSQCO6p6vLrQ5E2RasBH-IM",
    authDomain: "sign-up-login-form-f52a3.firebaseapp.com",
    databaseURL: "https://sign-up-login-form-f52a3-default-rtdb.firebaseio.com",
    projectId: "sign-up-login-form-f52a3",
    storageBucket: "sign-up-login-form-f52a3.firebasestorage.app",
    messagingSenderId: "339294474621",
    appId: "1:339294474621:web:658a2f686a0d1cdfeffc14",
    measurementId: "G-QEZ0980QFP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db= getDatabase(app);
  const counterRef= ref(db,'counter');

  function updateCounter(value){
    set(counterRef,value);
  }
  
  document.getElementById('increment').addEventListener('click',(e)=>{
  e.preventDefault()
  let count =Number(document.getElementById('counter').innerText);
  updateCounter(count +1)
})

document.getElementById('decrement').addEventListener('click',(e)=>{
    e.preventDefault()
    let count =Number(document.getElementById('counter').innerText);
    updateCounter(count - 1)
  })
  
  onValue(counterRef,function(snap){
    document.getElementById('counter').innerText=snap.val()
  })