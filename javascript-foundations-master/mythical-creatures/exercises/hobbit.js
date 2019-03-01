
class Hobbit {
    constructor(name,age){
        this.name = name;
        this.disposition = 'homebody';
        this.age = 0;
        this.adult = true;
        this.isShort = true;
        this.old = false;
        this.hasRing = this.name === 'Frodo' ? true : false ;
    }

    check(){

       if(this.age === 32){
            this.adult = false;
        }else if (this.age === 33){
            this.adult = true;
        }else if (this.age === 101){
            this.old = true;
        }
    }


    celebrateBirthday(){
        this.age++;
        this.check();

    }


   
}

    


module.exports = Hobbit;