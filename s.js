function lessQuantity (less, global) {
    let lessOneTotal= document.querySelector(less);
    function lessOneQ {
        if (parseInt(document.querySelector(less).innerHTML)>0) {
            document.querySelector(global).innerHTML=parseInt(document.querySelector(global).innerHTML)-1;
        }
    }
    return lessOneTotal.onclick= lessOneQ;
}