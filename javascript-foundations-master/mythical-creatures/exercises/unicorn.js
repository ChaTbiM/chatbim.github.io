class Unicorn {
  constructor(name,color='white') {
    this.name = name;
    this.color = color; 
  }

  isWhite(){
    return this.color === 'white' ? true : false;
  }

  says(what){
    return (`**;* ${what} *;**`);
  }
}

module.exports = Unicorn;
