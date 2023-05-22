export function CircleItem(items) {
    this.items = items;   
}

CircleItem.prototype.getall = function(){
    return this.items;
}

CircleItem.prototype.getnext = function(item){
    var index = this.items.indexOf(item);
    var next = this.items[index + 1];
    return next ? next : this.items[0];
}
