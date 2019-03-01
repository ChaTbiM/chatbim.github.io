

class Centaur{
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.count = 1;
    }

    shoot(){
        if(this.count < 3 && this.layingDown === false){
            this.count++;
            return 'Twang!!!';
        }else if (this.count === 3 || this.layingDown === true ){
            this.cranky = true;
            return 'NO!';
        }
    }

    run(){
        if(this.count < 3 && this.layingDown === false){
            this.count++;
            return 'Clop clop clop clop!!!';

        }else if (this.count === 3 || this.layingDown === true){
            this.cranky = true;
            return 'NO!';
        }
    }

    sleep(){
        if(this.standing === true){
            return 'NO!';
        }else if(this.layingDown === true){
            this.cranky = false;
            this.count = 0;
            return 'ZZZZ';
        }
    }

    layDown(){
        this.standing = false;
        this.layingDown = true;
    }

    standUp(){
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion(){

        if (this.cranky === false){
            this.cranky = true;
            this.count = 3;
        }else if(this.standing === true){
            this.cranky = false; 
            this.count = 0;
            
        }else if (this.layingDown === true){
            return 'Not while I\'m laying down!';
        }
        
        
    }

}


module.exports = Centaur;