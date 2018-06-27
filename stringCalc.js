function stringCalc(id){
	let string_numbers = id;
	//Testing for the negative numbers 
	if(string_numbers.includes('-')){
		throw new Error('negative numbers are not allowed');
	}
	//replaces the numbers with a comma symbol
	var numbers = string_numbers.replace(/\n|;|\/|\\/g,",");
	console.log(numbers);
	//Splitting by commas 
	var rem = numbers.split(',');
	var sum = 0;
		for(var i = 0; i < rem.length;i++){
			//to check if an array element is not an empty string
			if(rem[i] != ''){
				sum = sum + parseInt(rem[i]);
			}
		}
		alert('the sum is '+sum);
		return sum;
	}
	
module.exports = stringCalc;
