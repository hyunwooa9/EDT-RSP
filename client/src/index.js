
import {Item} from "./item.js"
import {CircleItem} from "./circleitem.js"


var startEl = document.getElementById("start");
var comEl = document.getElementById("com");
var itemButtonEl = document.getElementById('item-buttons');
var timerId;

function game (item) {
    var next = items.getnext(item);
    if (item === currentitem){
        alert("무승부입니다.");
    }
    else if (next === currentitem){
        alert("패배입니다.");
    }
    else {alert("승리입니다.");}

    clearInterval(timerId);
    startEl.removeAttribute('disabled');
    items.getall().forEach(function(item){
        item.disable(true);
    })

    
}


var items = new CircleItem([
    new Item('sissor', "가위", game),
    new Item('rock', "바위", game),
    new Item('paper', "보", game),
]);

var currentitem = items.getall()[0];


items.getall().forEach(function(item){
    item.rander(itemButtonEl);
    item.disable(true);
})

startEl.onclick = function() {
    startEl.setAttribute('disabled', true);
    items.getall().forEach(function(item){
        item.disable(false);
    })

    timerId = setInterval(() => {
        currentitem = items.getnext(currentitem);
        comEl.textContent = currentitem.name;
    }, 100);
};

