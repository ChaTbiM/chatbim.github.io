function iteratorFactory() {

};

iteratorFactory.prototype.sum = (array)=>{
	let res;

	if(typeof array[0] === 'string'){
		res = '';
	}else if(typeof array[0] === 'number') {
		res = 0;
	}

	array.forEach((el)=>{
		res +=el ;
	})

	return res;
};

iteratorFactory.prototype.sumAndSquare = (array)=>{
	let s = iteratorFactory.prototype.sum(array);

	return s*s;
};

module.exports = iteratorFactory;