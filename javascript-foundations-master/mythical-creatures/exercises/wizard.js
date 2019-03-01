

class Wizard{
    constructor(obj1){
       this.name = obj1.name;
       this.bearded = obj1.hasOwnProperty('bearded') ? obj1.bearded : true;
       this.isRested = true;
       this.casted = 1;
    }


    incantation(string){
        
        return (string.toUpperCase());
    }

    cast(){
        if(this.casted < 3){
            this.casted++;
            return 'MAGIC BULLET'; 

        }else if (this.casted === 3 ){
            this.isRested = false;
            return 'I SHALL NOT CAST!';

        }

         
            

        
        

    }

}


module.exports = Wizard;