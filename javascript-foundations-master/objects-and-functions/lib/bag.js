
class Bag {
    constructor(){
        this.empty = true;
        this.count = 0;
        this.candies = [];
        
    }


    fill(candy){

        this.candies.push(candy);
        
        this.count++;
    }

    contains(sugar){
        if(this.candies[0].type === sugar){
            return true;
        }else if (this.candies[0].type !== sugar){
            return false;
        }
    }




}


module.exports = Bag;