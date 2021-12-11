function addToCart(addButton, totalToAdd, price) {
    //create a variable which is the "add to cart" button
    let addToCartButton=document.querySelector(addButton);
    function addQuantityXPrice () {
        document.querySelector('total-cart').innerHTML=document.querySelector(totalToAdd).innerHTML*price;
    }
    return addToCartButton.onclick = addQuantityXPrice();
    
}

addToCart('.egg1', '.totegg', 5);