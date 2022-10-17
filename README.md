# myStore
WatchMall Store Project - Task 15
<br><br>

# Table Of Contents
[Overview](#overview)<br/>
[Installation](#installation)<br/>
[Usage](#usage)<br/>


# Overview
This project is an online watch store with a Homepage, Catalogue page, Product pages and Cart Page. 
A combination of Javascript functions are used to create a functional shopping cart. 
JQuery functions are used to create a dropdown menu and hide/show radio button - and effects. This project uses sessionStorage
The user can:
1. Use Quick-Add-To-Cart from the catalogue page
2. Add to the cart from individual product pages
3. Change item quantity
4. Remove items from the cart
5. ❤️ react on items, which imitates the option of adding to wishlist
6. Choose between Collection and Delivery
7. Fill in a delivery form and choose 1-of-3 delivery options
8. Apply a discount coupon
9. Confirm their order and get a reference number
<br/>
*Notes are included in the project to simplify navigation*
<br/>

# Installation
You will need Node.js installed on your system.
```
npm install script.js
```
Fork reposittory
 on Github Or manually download store to your desktop.
<br/>

# Usage
Navigate through pages with navbar.
### Homepage
Most Images are clickable and linked.
<img width="1225" alt="Screenshot 2022-10-17 at 09 08 32" src="https://user-images.githubusercontent.com/99277251/196111335-2b156e1b-a803-4505-957b-73a1ee581131.png">
<br/>
### Catalogue Page
Quick add to cart option
<img width="1148" alt="Screenshot 2022-10-17 at 09 53 13" src="https://user-images.githubusercontent.com/99277251/196121016-7338e699-3a44-428a-bffe-897474fe833f.png">
<br/>
Adding numbers to the cart
<img width="878" alt="Screenshot 2022-10-17 at 09 56 05" src="https://user-images.githubusercontent.com/99277251/196121111-bd9cb3ea-564c-4cdc-9ff5-31bd73c691e5.png">
<br/>
Adding products to sessionStorage
<img width="806" alt="Screenshot 2022-10-17 at 09 58 40" src="https://user-images.githubusercontent.com/99277251/196121446-f4937c05-1a91-436e-ada8-72a8b135837f.png">
<br/>
### Product Pages
Can add to cart from product page as well.
<img width="974" alt="Screenshot 2022-10-17 at 10 01 15" src="https://user-images.githubusercontent.com/99277251/196121842-7391643e-285e-4516-a369-2fd38f9336b1.png">
<br/>
### Cart Page
Javascript Vanilla Shopping Cart. The following functions are used to increase and decrease quantity and delete items from the shopping cart:
```
deleteButtons(){}
displayCart();
onLoadCartNumbers();
manageQuantity(){}
```
<br/>
<img width="1141" alt="Screenshot 2022-10-17 at 10 03 34" src="https://user-images.githubusercontent.com/99277251/196123835-04623c51-d06a-4fe5-b726-0f75256b7a36.png">
<br/>
#### Discount Coupon
A discount of R50 can be deducted. This is South-African currency. This can be changed in the Javascript as follows:
*change the syymbol to the currency you want to use e.g $*
<img width="747" alt="Screenshot 2022-10-17 at 10 16 01" src="https://user-images.githubusercontent.com/99277251/196124891-35827e76-13c2-4dee-a5fe-d80ef0e9292c.png">
<br/>
This principle can also be applied to changing the product prices and delivery prices.
<br/>
