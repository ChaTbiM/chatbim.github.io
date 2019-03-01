

class Potion{
    constructor(name,rareness=0){
        this.name = name;
        this.rareness = rareness;
    }

    isRare(){
        if(this.rareness <= 7){
            return false;
        }else {
            return true;
        }
    }
}

module.exports = Potion;