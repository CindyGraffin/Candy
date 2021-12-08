
//Plus One Function

function plusQuantity (plus, total) {

    let plusOneTotal= document.querySelector(plus);
    function plusOneQ () {
        document.querySelector(total).innerHTML=parseInt(document.querySelector(total).innerHTML)+1;
    }
    return plusOneTotal.onclick= plusOneQ;
}

//Less One Function

function lessQuantity (less, global) {
    let lessOneTotal= document.querySelector(less);
    function lessOneQ () {
        if (parseInt(document.querySelector(global).innerHTML)>0) {
            document.querySelector(global).innerHTML=parseInt(document.querySelector(global).innerHTML)-1;
        }
    }
    return lessOneTotal.onclick= lessOneQ;
}

//Bears
plusQuantity('.plusbears', '.bears')
lessQuantity('.lessbears', '.bears')
//Schtroumpfs
plusQuantity('.plussch', '.sch')
lessQuantity('.lesssch', '.sch')



