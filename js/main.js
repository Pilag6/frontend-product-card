///////////////////////////////////////////////////////////////

// Product data

///////////////////////////////////////////////////////////////
const product = {
    name: "Awesome Tshirt",
    colors: ["red", "blue", "orange", "black"],
    stock: {
        1: { red: 50, blue: 25, orange: 10, black: 12 },
        2: { red: 10, blue: 10, orange: 50, black: 20 },
        3: { red: 20, blue: 20, orange: 5, black: 10 },
    },
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    id: 1,
};

const colorSelect = document.getElementById("color");
const stockCount = document.getElementById("stock");

const redColor = document.getElementById("redColor");
const blueColor = document.getElementById("blueColor");
const orangeColor = document.getElementById("orangeColor");
const blackColor = document.getElementById("blackColor");

colorSelect.addEventListener("change", () => {
    const color = colorSelect.value;
    const id = product.id;
    const count = product.stock[id][color];
    stockCount.innerText = count;

    if (color == "red") {
        redColor.classList.add("outlineColor");
    }
    if (color != "red") {
        redColor.classList.remove("outlineColor");
    }

    if (color == "blue") {
        blueColor.classList.add("outlineColor");
    }
    if (color != "blue") {
        blueColor.classList.remove("outlineColor");
    }
    if (color == "orange") {
        orangeColor.classList.add("outlineColor");
    }
    if (color != "orange") {
        orangeColor.classList.remove("outlineColor");
    }
    if (color == "black") {
        blackColor.classList.add("outlineColor");
    }
    if (color != "black") {
        blackColor.classList.remove("outlineColor");
    }
});

///////////////////////////////////////////////////////////////

// Create customization link

///////////////////////////////////////////////////////////////

const customizeButton = document.getElementById("customize");

customizeButton.addEventListener("click", () => {
    const id = product.id;
    const color = colorSelect.value;
    const url = `#customizePage?ProductId=${id}&ColorName=${color}`;
    window.location.href = url;
});

// Handle form submission
const form = document.getElementById("customize-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const quantity = document.getElementById("quantity").value;
    const size = document.getElementById("size").value;
    const data = {
        "product.id": id,
        "product.color": color,
        "custom_product.quantity": quantity,
        "custom_product.size": size,
    };
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://www.example.com/jsonservice");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
});

///////////////////////////////////////////////////////////////

// Discount 20% & Price Update

///////////////////////////////////////////////////////////////

let count = 1;
let price = 25;

const $quantityArrowMinus = document.querySelector(".quantity-arrow-minus");
const $quantityArrowPlus = document.querySelector(".quantity-arrow-plus");
const $quantityNum = document.querySelector(".quantity-num");
const $discount = document.querySelector(".discount");
const $price = document.querySelector("#price");

$quantityArrowMinus.addEventListener("click", () => {
    count--;
    $quantityNum.textContent = count;
    if (count <= 0) {
        count = 1;
    }

    $price.textContent = price * count + "$";

    if (count < 5) {
        $discount.classList.add("discount");
    }
});

$quantityArrowPlus.addEventListener("click", () => {
    count++;
    $quantityNum.textContent = count;
    $price.textContent = price * count + "$";
    if (count >= 5) {
        $discount.classList.remove("discount");
        $price.textContent = price * count * 0.8 + "$";
    }
});

///////////////////////////////////////////////////////////////

// Add to cart URL

///////////////////////////////////////////////////////////////


const addToCartBtn = document.querySelector('.customize__form--btn');

addToCartBtn.addEventListener("click", () => {
    const id = product.id;
    const color = colorSelect.value;
    const sizeCart = size.value;
    const url = `https://www.example.com/jsonservice?id=${id}&Quantity=${count}&Size=${sizeCart}&ColorName=${color}`;
    window.location.href = url;
});