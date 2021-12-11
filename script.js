
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

//Hitschies
plusQuantity('.plushit', '.hit')
lessQuantity('.lesshit', '.hit')
//Worms
plusQuantity('.pluswo', '.wo')
lessQuantity('.lesswo', '.wo')
//Fruits
plusQuantity('.plusfr', '.fr')
lessQuantity('.lessfr', '.fr')
//Ovnis
plusQuantity('.plusov', '.ov')
lessQuantity('.lessov', '.ov')
//Pastas
plusQuantity('.pluspas', '.pas')
lessQuantity('.lesspas', '.pas')
//Coca's Bottles
plusQuantity('.pluscoc', '.coc')
lessQuantity('.lesscoc', '.coc')

//Love Section

//Cherry Hearts
plusQuantity('.plusone', '.one')
lessQuantity('.lessone', '.one')
//Roses
plusQuantity('.plustwo', '.two')
lessQuantity('.lesstwo', '.two')
//Lollipops
plusQuantity('.plusthree', '.three')
lessQuantity('.lessthree', '.three')
//White Hearts
plusQuantity('.plusfour', '.four')
lessQuantity('.lessfour', '.four')
//LittleHearts
plusQuantity('.plusfive', '.five')
lessQuantity('.lessfive', '.five')
//Sour Hearts
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

//Classic Section

//Reglisse
addToCart('.addreg', '.reg', 5);
//Bears
addToCart('.addbears', '.bears', 3);
//Schtroumpfs
addToCart('.addsch', '.sch', 5);
//Eggs
addToCart('.addegg', '.egg', 5);
//Dragibus
addToCart('.addragi', '.dragi', 3);
//Strawberries
addToCart('.addstraw', '.straw', 5);

//Sour Section

//Hitschies
addToCart('.addhit', '.hit', 6);
//Worms
addToCart('.addwo', '.wo', 5);
//Fruits
addToCart('.addfr', '.fr', 4);
//Ovnis
addToCart('.addov', '.ov', 5);
//Pastas
addToCart('.addpas', '.pas', 6);
//Coca's Bottles
addToCart('.addcoc', '.coc', 5);

//Love Section 

//Cherry Hearts
addToCart('.addone', '.one', 6);
//Roses
addToCart('.addtwo', '.two', 10);
//Lollipops
addToCart('.addthree', '.three', 8);
//White Hearts
addToCart('.addfour', '.four', 6);
//Littles Hearts
addToCart('.addfive', '.five', 6);
//SourHearts
addToCart('.addsix', '.six', 5);
