//========================================== CREATING PRODUCT OBJECTS ==========================================
// target add-cart button
let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "g-steel",
    tag: "g-steel",
    price: 13599,
    inCart: 0,
  },
  {
    name: "g-shock-one",
    tag: "g-shock-one",
    price: 3739,
    inCart: 0,
  },
  {
    name: "protrek",
    tag: "protrek",
    price: 6499,
    inCart: 0,
  },
  {
    name: "edifice",
    tag: "edifice",
    price: 2999,
    inCart: 0,
  },
  {
    name: "multihands",
    tag: "multihands",
    price: 1899,
    inCart: 0,
  },
  {
    name: "vintage-silver",
    tag: "vintage-silver",
    price: 1299,
    inCart: 0,
  },
  {
    name: "g-shock-two",
    tag: "g-shock-two",
    price: 5699,
    inCart: 0,
  },
  {
    name: "sheen-one",
    tag: "sheen-one",
    price: 4299,
    inCart: 0,
  },
  {
    name: "baby-g-one",
    tag: "baby-g-one",
    price: 3699,
    inCart: 0,
  },
  {
    name: "g-shock-three",
    tag: "g-shock-three",
    price: 3999,
    inCart: 0,
  },
  {
    name: "vintage-rosegold",
    tag: "vintage-rosegold",
    price: 1999,
    inCart: 0,
  },
  {
    name: "sheen-two",
    tag: "sheen-two",
    price: 1599,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", (e) => {
    console.log(cartNumbers(products[e.target.id]), totalCost(products[e.target.id]));
  });
}

function onLoadCartNumbers() {
  let productNumbers = sessionStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

//========================================== ADDING NUMBERS TO CART ==========================================

function cartNumbers(product, action) {
  let productNumbers = sessionStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (action == "decrease") {
    sessionStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector(".cart span").textContent = productNumbers - 1;
  } else if (productNumbers) {
    sessionStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    sessionStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

//========================================== ADDING PRODUCTS TO SESSION STORAGE ==========================================

function setItems(product) {
  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cartCost = sessionStorage.getItem("totalCost");

  console.log("My cartCost is", cartCost);
  console.log(typeof cartCost);
  if (action == "decrease") {
    cartCost = parseInt(cartCost);

    sessionStorage.setItem("totalCost", cartCost - product.price);
  } else if (cartCost != null) {
    cartCost = parseInt(cartCost);
    sessionStorage.setItem("totalCost", cartCost + product.price);
  } else {
    sessionStorage.setItem("totalCost", product.price);
  }
  alert("Your Cart total is " + sessionStorage.getItem("totalCost"));
}

//========================================== REMOVING PRODUCTS FROM CART PAGES ==========================================

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".product ion-icon");
  let productName;
  let productNumbers = sessionStorage.getItem("cartNumbers");
  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartCost = sessionStorage.getItem("totalCost");

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[i].parentElement.textContent
        .trim()
        .toLowerCase()
        .replace(/ /g, "");

      sessionStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productName].inCart
      );

      sessionStorage.setItem(
        "totalCost",
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
      sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}

//========================================== INCREASING AND DECREASING QUANTITY ==========================================
function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let cartItems = sessionStorage.getItem("productsInCart");
  let currentQuantity = 0;
  let currentProduct = "";
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);

  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      currentQuantity =
        decreaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct = decreaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });
  }

  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", () => {
      console.log("Increase button");
      currentQuantity =
        increaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);

      currentProduct = increaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
    });
  }
}
onLoadCartNumbers();
displayCart();

//========================================== CALCULATE GRAND TOTAL IN CART ==========================================

function displayCart() {
  let vat = 0;
  let vatIncl = 0;
  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = sessionStorage.getItem("totalCost");

  
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      vat = (parseFloat(item.price) * 0.15) + vat;
      vatIncl = parseFloat(cartCost) + vat;
      productContainer.innerHTML += `
        <div class="product">
          <ion-icon name="close-circle"></ion-icon>
          <img src="./images/watch-images/${item.tag}.jpg">
          <span>${item.name}</span>
        </div>
        <div class="price">R${item.price},00</div>
        <div class="quantity">
          <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
          <span>${item.inCart}</span>
          <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
        </div>
        <div class="total">
          R${item.inCart * item.price},00
        </div>
      `;
    });


  }

  let vatn = vat.toFixed(2); //showing only 2 decimals
  let vatIncln = vatIncl.toFixed(2);
  
  productContainer.innerHTML += `
  <div class="basketTotalContainer">
    <h4 >Basket Total</h4>
    <h4 class="R" >R</h4>
    <h4 class="totals">
      ${cartCost},00
    </h4>
  </div>
  <div class="basketTotalContainer">
    <h4 > VAT</h4>
    <h4 class="R" >R</h4>
    <h4 class="totals">
      ${vatn}
    </h4>
  </div>
  <div class="basketTotalContainer">
    <h4 > Total Incl. VAT</h4>
    <h4 class="R" >R</h4>
    <h4 class="totals" id="vatIncl">  
      ${vatIncln}
    </h4>
  </div>
  `;

  deleteButtons();
  manageQuantity();
}

//========================================== CHANGE TOTAL COST BASED ON DELIVERY OPTION CHOSEN ==========================================
let vatIncl =  document.querySelector("#vatIncl").innerHTML;

var select = document.querySelector(".dropbtn");
function onChange() {
  var value = parseFloat(select.options[select.selectedIndex].value); //getting value of selected element
  console.log(typeof value + "value")
  var sum = parseFloat(vatIncl)  + parseFloat(value);
  if (value > 0) {
    alert("Your total has been updated to " + parseFloat(sum));
  }
  let sumN = parseFloat(sum).toFixed(2);
  document.querySelector("#vatIncl").innerHTML = sumN;
}
select.onchange = onChange;
onChange();

//========================================== TOGGLE DELIVERY FORM OPTIONS ==========================================
//Change display based on radio button selected
function deliveryForm(x) {
  if (x==0)
    $("#deliveryForm").show();
    
  else 
    $("#deliveryForm").hide();
}

//========================================== ADDING DISCOUNT COUPON TO CART ==========================================
let discountInput = document.querySelector("#discountInput");
let btn = document.querySelector("#apply-btn");
let totalAmount = document.querySelector("#vatIncl").innerHTML;

function getDiscountCode() {
  let code = discountInput.value;
  if (code == "50OFF") {
    totalAmount -= 50;
    sessionStorage.setItem("#vatIncl" , parseFloat(totalAmount));
  }
  alert("R50 has been deducted. Your total is now " + totalAmount);
  let totalAmountN = parseFloat(totalAmount).toFixed(2);
  document.querySelector("#vatIncl").innerHTML = totalAmountN;
}
btn.addEventListener("click" , getDiscountCode)
console.log(totalAmount + "totalAmount")


// GENERATE UNIQUE REFERENCE NUMBER
function uuidv4() {
  var uuid = ([1e7]+-1e3+-4e3).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(9)
  );
  alert("Thank you! Your order was successful. " + uuid + " is your reference code")
}

// ========================================== JQUERY ==========================================
//-- ANIMATION EFFECT // CHAINED EFFECT
$("#coupon-code").animate({"opacity": "0.1", "font-size":"20px"}, 1500 );
$("#coupon-code").animate({"opacity": "0.5", "font-size":"30px"}, 500 );
$("#coupon-code").animate({"opacity": "0.9", "font-size":"40px"}, 100 );