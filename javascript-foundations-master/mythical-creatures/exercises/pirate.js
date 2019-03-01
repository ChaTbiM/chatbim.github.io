
class Pirate{
    constructor(name,job='Scallywag'){
        this.name = name;
        this.job = job;
        this.cursed = false;
        this.count = 0;
        this.booty = 0;
    }

    check(){
        if(this.count === 3)
            this.cursed = true;
    }

    commitHeinousAct(){
        this.count++;

        this.check();
    }

    robShip(){
        this.booty = 100;
        return 'YAARRR!';
        
    }
    





}

module.exports = Pirate;