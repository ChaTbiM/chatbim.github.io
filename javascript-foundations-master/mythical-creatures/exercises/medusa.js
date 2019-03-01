

class Medusa{
    constructor(name,status){
        this.name = name;
        this.statues = [];
    }

    stare(victim){
        if(this.statues.length < 3){

            this.statues.push(victim);
            victim.stoned = true;

        }else if(this.statues.length > 3){
            this.statues.push(victim);
            this.statues.shift();
        }
        
    }

}

module.exports = Medusa;