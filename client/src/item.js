export function Item(key, name,onClick) {
    this.key = key;
    this.name = name;

    this.button = document.createElement('button');
    this.button.textContent = name;

    var _self = this;
    this.button.onclick = function(){
        onClick(_self);
    }

}

Item.prototype.rander = function(parentEl) {
    parentEl.append(this.button);
}

Item.prototype.disable = function(check){
    if (check) {
        this.button.setAttribute('disabled', true);
    }
    else{
        this.button.removeAttribute('disabled');
    }    
}