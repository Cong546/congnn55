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
async function getProductById() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const productRef = doc(db,"products", productId);
    const produnctSnap = await getDoc(productRef);

    if (produnctSnap.exists()) {
        return { id: produnctSnap.id, ...produnctSnap.data() };
    } else {
        console.error("Không tìm thấy sản phẩm!");
        return null;
    }
}
let name = ""
let img = ""
let price= ""
async function displayProductDetail() {
    const product = await getProductById();
    name = product.name
    price = product.price
    img = product.img
    if (product) {
        document.getElementById("product-idea").innerHTML = `
        <img class="img" src="${product.img}" alt="${product.name}" width"200">
        <h2 class="money" >${product.name}</h2>
        <p class="price" >Giá:${product.price} VNĐ</p>
        
        `;
    }
    let total = document.getElementById('total-price')
    total.innerHTML = product.price
}
displayProductDetail();
let buy = document.getElementById('buy')
buy.addEventListener('click',addToCart)
async function addToCart(){
    const docRef = await addDoc(collection(db, "Buys"),{
        name: name,
        price: price,
        img: img,
        state: "Đã đặt hàng"
    });
    alert("Product added successfully with ID: "+docRef.id);
    window.location.href = "list.html"
}