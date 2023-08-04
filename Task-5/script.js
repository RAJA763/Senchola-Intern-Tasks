let cartImg = document.querySelector(".cart-image");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".cart-remove");

function openCart(){
    cart.classList.add("active");
}

function closedCart(){
    cart.classList.remove("active");
}

function removeCart(event){
    let buttonClicked = event.target;
    let buttonClick = buttonClicked.parentElement;
    buttonClick.parentElement.remove();
}

function addCart(event){
    cart.classList.add("active");
    let button = event.target;
    let priceProducts = button.parentElement;
    let shopProducts = priceProducts.parentElement;
    let imageProducts = shopProducts.parentElement;
    let productTitle = shopProducts.getElementsByClassName("card-title")[0].innerText;
    let productPrice = shopProducts.getElementsByClassName("card-text")[0].innerText;
    let productImage = imageProducts.getElementsByClassName("product-img")[0].src;
    let cartContent = document.createElement("div");
    cartContent.classList.add("cart-box");

    let cartItems = document.getElementsByClassName("cart-content")[0];
    let cartItemsNames = document.getElementsByClassName("cart-product-title");
    
    for(let i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == productTitle){
            alert('Product already added to the Cart');
            return;
        }
    }

    let sourceImage = document.createElement("img");
    sourceImage.classList.add("cart-img");
    sourceImage.src = productImage;
    cartContent.appendChild(sourceImage);

    let cartDetail = document.createElement("div");
    cartDetail.classList.add("detail-box");

    let cartProductTitle = document.createElement("div");
    cartProductTitle.classList.add("cart-product-title");
    cartProductTitle.innerText = productTitle;
    cartDetail.appendChild(cartProductTitle);

    let cartProductPrice = document.createElement("div");
    cartProductPrice.classList.add("cart-price");
    cartProductPrice.innerText = productPrice;
    cartDetail.appendChild(cartProductPrice);
    let price = productPrice.replace("₹", "");

    let cartInput = document.createElement("input");
    cartInput.classList.add("cart-quantity");
    cartInput.type = 'number';
    cartInput.value = 1;
    cartInput.min = 1;
    cartDetail.append(cartInput);

    let cartRemove = document.createElement("i");
    cartRemove.classList.add("bx", "bx-trash-alt", "cart-remove");
    cartRemove.onclick = removeCart;
    
    cartDetail.appendChild(cartRemove);
    cartContent.appendChild(cartDetail);
    
    cartItems.append(cartContent);
}