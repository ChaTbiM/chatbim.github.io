
class Warewolf {
    constructor(name,location){
        this.name = name; 
        this.location = location;
        this.human = true;
        this.wolf = false;
        this.hungry = false;
        this.didEat = [];
    }


    change(){
        
        this.human = !this.human;
        this.wolf = !this.wolf;
        this.hungry = !this.hungry;
    }

    

    eat(victim){
        if(this.hungry === true){
            this.didEat.push(victim.name);
            victim.alive = false;
    
        }else if(this.human === true){
            return 'Iam not Hungry';
        }
    }



}

module.exports = Warewolf;