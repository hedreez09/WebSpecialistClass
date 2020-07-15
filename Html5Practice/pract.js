//Way of iterating a nodelist
for (var i  = 0; i < items.length; i++){
    console.log(items[i].innerText);
}

//Way of iterating a nodelist using forEach method
var forEach = Array.prototype.forEach;
var items = document.querySelectorAll('#example-container li');
forEach.call(items,function(item){
    console.log(item.innerText);});