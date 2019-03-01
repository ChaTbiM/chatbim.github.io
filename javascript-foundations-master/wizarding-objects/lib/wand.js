function Wand(type,size,core){
    this.type = type; 
    this.size = size;
    this.core = core;

}

Wand.prototype.cast = (str) => {
    return `Casting ${str}!`;
}


module.exports = Wand;