//script.js
document.querySelectorAll('.btn-topup').forEach(button => {
  button.addEventListener('click',function(){
    const game = this.parenElement.querySelector('h3').innerText;
    window.location.href = 'payment.html?game=${encodeURLComponent(game)}';
  });
});

//simulasi proses pembayaran 
document.getElementById('paymentFrom').addEventListener('submit', function(e){
  e.preventDefault();
  const gameID = document.querySelector('#paymentFrom input[type="text"]').value;
  const nominal = document.querySelector('#paymentFrom select').value;
  
  //simpan data transaksi di localStorage
  const transaction = {
    id: Date.now(),
    game: new URLSearchParams(window.location.search).get('game'),
    amount: nominal,
    status: "pending"
  };

localStorage.setItem('lastTransaction', JSON.stringify(transaction));
window.location.href = 'history.html';
});

function validateGameID(id){
  return /^[0-9]{6.12}$/.test(id);
}

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PTOJECT",
  storageBucket: "YOUR_BUCKET .appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase,initializeApp(firebaseConfig);
const db = firebase.firestore();
