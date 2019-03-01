
class Dragon {
    constructor(name,rider,color){
        this.name = name; 
        this.rider = rider; 
        this.color = color; 
        this.hungry = true; 
        this.count = 1;
    }

    eat(){
        if(this.count === 3){
            this.hungry = false;
        } else {
            this.count++;
        }
    }

}

module.exports = Dragon;