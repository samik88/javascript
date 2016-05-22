function deepEqual(val1 , val2){
	if(val1 === null || val2 ===null){
		return false;
	}
	if(val1 instanceof object){
		if(val2 instanceof object){

		}else{
			return false;
		}
	}else{
		return val1 === val2;
	}
}