let plusButton= document.querySelector('.plusbears')
function plusOne () {
    document.querySelector('.bears').innerHTML=parseInt(document.querySelector('.bears').innerHTML)+1
}
plusButton.onclick= plusOne

let lessButton= document.querySelector('.lessbears')
function lessOne () {
    if (parseInt(document.querySelector('.bears').innerHTML)>0) {
        document.querySelector('.bears').innerHTML=parseInt(document.querySelector('.bears').innerHTML)-1
    }
}
lessButton.onclick= lessOne




