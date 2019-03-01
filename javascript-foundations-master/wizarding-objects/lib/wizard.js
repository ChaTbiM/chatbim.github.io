

class Wizard{
    constructor(name){
        this.name = name;
        this.pets = [];
        this.petsCount = 0;
        this.List = '';
    }

    givePet(pet){
        this.petsCount++;
        this.pets.push(pet);

    }

    petList(){
        
        this.List += `${this.pets[0].name}, a ${this.pets[0].type}, ${this.pets[1].name}, an ${this.pets[1].type}.`;

        return this.List;
    }

    giveWand(wand){
        this.wand = wand;
    }

    castSpell(str){
        return this.wand.cast(str);
    }

}


module.exports = Wizard;
