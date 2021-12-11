
//Plus One Function

function plusQuantity (plus, total) {

    let plusOneTotal= document.querySelector(plus); //create a variable which is the + button
    function plusOneQ () {
        document.querySelector(total).innerHTML=parseInt(document.querySelector(total).innerHTML)+1;
    }
    return plusOneTotal.onclick = plusOneQ;
}

//Less One Function

function lessQuantity (less, global) {
    let lessOneTotal= document.querySelector(less); //create a variable which is the - button
    function lessOneQ () {
        if (parseInt(document.querySelector(global).innerHTML)>0) { //function only run if total is >0 quantity
            document.querySelector(global).innerHTML=parseInt(document.querySelector(global).innerHTML)-1;
        }
    }
    return lessOneTotal.onclick = lessOneQ;
}

//Function to add to cart

function addToCart(addButton, totalToAdd, price) {
    //create a variable which is the "add to cart" button
    let addToCartButton=document.querySelector(addButton);
    function addQuantityXPrice () {
            document.querySelector('.totalcart').innerHTML=parseInt(document.querySelector('.totalcart').innerHTML)+parseInt(document.querySelector(totalToAdd).innerHTML)*price; 
    }
    return addToCartButton.onclick = addQuantityXPrice;
    
}

//Function to remove to cart

function removeToCart(removeButton, totalToRemove, price) {
    //create a variable which is the "remove to cart" button
    let removeToCartButton=document.querySelector(removeButton);
    function removeQuantityXPrice () {
        if (parseInt(document.querySelector('.totalcart').innerHTML)>0) {
            document.querySelector('.totalcart').innerHTML=parseInt(document.querySelector('.totalcart').innerHTML)-parseInt(document.querySelector(totalToRemove).innerHTML)*price;
        } 
        //condition if total<0 make it to 0 because the total must not be negative
        if (parseInt(document.querySelector('.totalcart').innerHTML)<0) {
            document.querySelector('.totalcart').innerHTML='0';
        }   
    }
    return removeToCartButton.onclick = removeQuantityXPrice;
    
}

//Classic section

//Eggs
plusQuantity('.plusegg', '.egg');
lessQuantity('.lessegg', '.egg');
addToCart('.addegg', '.egg', 5);
removeToCart('.removegg', '.egg', 5);
//Dragibus
plusQuantity('.plusdragi', '.dragi');
lessQuantity('.lessdragi', '.dragi');
addToCart('.addragi', '.dragi', 3);
removeToCart('.removedragi', '.dragi', 3);
//Strawberrys
plusQuantity('.plusstraw', '.straw');
lessQuantity('.lessstraw', '.straw');
addToCart('.addstraw', '.straw', 5);
removeToCart('.removestraw', '.straw', 5);
//Reglisse
plusQuantity('.plusreg', '.reg');
lessQuantity('.lessreg', '.reg');
addToCart('.addreg', '.reg', 5);
removeToCart('.removereg', '.reg', 5);
//Schtroumpfs
plusQuantity('.plussch', '.sch');
lessQuantity('.lesssch', '.sch');
addToCart('.addsch', '.sch', 5);
removeToCart('.removesch', '.sch', 5);
//Bears
plusQuantity('.plusbears', '.bears');
lessQuantity('.lessbears', '.bears');
addToCart('.addbears', '.bears', 3);
removeToCart('.removebears', '.bears', 3)


//Sour Section

//Hitschies
plusQuantity('.plushit', '.hit');
lessQuantity('.lesshit', '.hit');
addToCart('.addhit', '.hit', 6);
removeToCart('.removehit', '.hit', 6);
//Worms
plusQuantity('.pluswo', '.wo');
lessQuantity('.lesswo', '.wo');
addToCart('.addwo', '.wo', 5);
removeToCart('.removewo', '.wo', 5);
//Fruits
plusQuantity('.plusfr', '.fr');
lessQuantity('.lessfr', '.fr');
addToCart('.addfr', '.fr', 4);
removeToCart('.removefr', '.fr', 4);
//Ovnis
plusQuantity('.plusov', '.ov');
lessQuantity('.lessov', '.ov');
addToCart('.addov', '.ov', 5);
removeToCart('.removeov', '.ov', 5);
//Pastas
plusQuantity('.pluspas', '.pas');
lessQuantity('.lesspas', '.pas');
addToCart('.addpas', '.pas', 6);
removeToCart('.removepas', '.pas', 6);
//Coca's Bottles
plusQuantity('.pluscoc', '.coc');
lessQuantity('.lesscoc', '.coc');
addToCart('.addcoc', '.coc', 5);
removeToCart('.removecoc', '.coc', 5);

//Love Section

//Cherry Hearts
plusQuantity('.plusone', '.one');
lessQuantity('.lessone', '.one');
addToCart('.addone', '.one', 6);
removeToCart('.removeone', '.one', 6);
//Roses
plusQuantity('.plustwo', '.two');
lessQuantity('.lesstwo', '.two');
addToCart('.addtwo', '.two', 10);
removeToCart('.removetwo', '.two', 10);
//Lollipops
plusQuantity('.plusthree', '.three');
lessQuantity('.lessthree', '.three');
addToCart('.addthree', '.three', 8);
removeToCart('.removethree', '.three', 8);
//White Hearts
plusQuantity('.plusfour', '.four');
lessQuantity('.lessfour', '.four');
addToCart('.addfour', '.four', 6);
removeToCart('.removefour', '.four', 6);
//LittleHearts
plusQuantity('.plusfive', '.five');
lessQuantity('.lessfive', '.five');
addToCart('.addfive', '.five', 6);
removeToCart('.removefive', '.five', 6);
//Sour Hearts
plusQuantity('.plussix', '.six');
lessQuantity('.lesssix', '.six');
addToCart('.addsix', '.six', 5);
removeToCart('.removesix', '.six', 5);

