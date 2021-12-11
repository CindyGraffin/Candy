
//Plus One Function

function plusQuantity (plus, total) {

    let plusOneTotal= document.querySelector(plus); //create a variable which is the + button
    function plusOneQ () {
        document.querySelector(total).innerHTML=parseInt(document.querySelector(total).innerHTML)+1;
    }
    return plusOneTotal.onclick= plusOneQ;
}

//Less One Function

function lessQuantity (less, global) {
    let lessOneTotal= document.querySelector(less); //create a variable which is the - button
    function lessOneQ () {
        if (parseInt(document.querySelector(global).innerHTML)>0) { //function only run if total is >0 quantity
            document.querySelector(global).innerHTML=parseInt(document.querySelector(global).innerHTML)-1;
        }
    }
    return lessOneTotal.onclick= lessOneQ;
}

//Classic section

//Reglisse
plusQuantity('.plusreg', '.reg')
lessQuantity('.lessreg', '.reg')
//Bears
plusQuantity('.plusbears', '.bears')
lessQuantity('.lessbears', '.bears')
//Schtroumpfs
plusQuantity('.plussch', '.sch')
lessQuantity('.lesssch', '.sch')
//Eggs
plusQuantity('.plusegg', '.egg')
lessQuantity('.lessegg', '.egg')
//Dragibus
plusQuantity('.plusdragi', '.dragi')
lessQuantity('.lessdragi', '.dragi')
//Strawberrys
plusQuantity('.plusstraw', '.straw')
lessQuantity('.lessstraw', '.straw')

//Sour Section

//Reglisse
plusQuantity('.plushit', '.hit')
lessQuantity('.lesshit', '.hit')
//Bears
plusQuantity('.pluswo', '.wo')
lessQuantity('.lesswo', '.wo')
//Schtroumpfs
plusQuantity('.plusfr', '.fr')
lessQuantity('.lessfr', '.fr')
//Eggs
plusQuantity('.plusov', '.ov')
lessQuantity('.lessov', '.ov')
//Dragibus
plusQuantity('.pluspas', '.pas')
lessQuantity('.lesspas', '.pas')
//Strawberrys
plusQuantity('.pluscoc', '.coc')
lessQuantity('.lesscoc', '.coc')

//Love Section

//One
plusQuantity('.plusone', '.one')
lessQuantity('.lessone', '.one')
//Two
plusQuantity('.plustwo', '.two')
lessQuantity('.lesstwo', '.two')
//Three
plusQuantity('.plusthree', '.three')
lessQuantity('.lessthree', '.three')
//Four
plusQuantity('.plusfour', '.four')
lessQuantity('.lessfour', '.four')
//Five
plusQuantity('.plusfive', '.five')
lessQuantity('.lessfive', '.five')
//Six
plusQuantity('.plussix', '.six')
lessQuantity('.lesssix', '.six')

//Function to add to cart

function addToCart(addButton, totalToAdd, price) {
    //create a variable which is the "add to cart" button
    let addToCartButton=document.querySelector(addButton);
    function addQuantityXPrice () {
        document.querySelector('.totalcart').innerHTML=parseInt(document.querySelector('.totalcart').innerHTML)+parseInt(document.querySelector(totalToAdd).innerHTML)*price;
    }
    return addToCartButton.onclick = addQuantityXPrice;
    
}

addToCart('.egg1', '.egg', 5);