// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa0fVdtFDjxy_BtLm7X5ihsbpUILB1QTk",
  authDomain: "cong12345-307d7.firebaseapp.com",
  projectId: "cong12345-307d7",
  storageBucket: "cong12345-307d7.firebasestorage.app",
  messagingSenderId: "240405272298",
  appId: "1:240405272298:web:bfd141f28c4a0a69be2993",
  measurementId: "G-NZBHPVCBG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
async function getProduct(){
    const result = await getDocs(collection(db,"products"));
    const products = []
    console.log(result)
    result.forEach((doc)=>{
        products.push({ id : doc.id, ...doc.data()});
    });
    return products;
}
console.log(getProduct())

async function displayProducts(){
    const productList =  document.querySelector(".container");

    const products = await getProduct();

    products.forEach((product) =>{
        const productDiv = document.createElement("div");
        productDiv.classList.add("border")
        productDiv.innerHTML = `
        <div class="product-item">
        <img class="drink" src="${product.img}">
        <h2 class="name" >${product.name}</h2>
        <p class="price" ><strong>Price:</strong> ${product.price} VND</p>
        <button class="detail">View Detial</button>
        </div>`;

        let btn = productDiv.querySelector('button')
        btn.addEventListener("click", function (){
            window.location.href =`detail.html?id=${product.id}`;
        }) 
        productList.appendChild(productDiv);
    })
}

displayProducts()