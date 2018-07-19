function stringCalc(id){
	let string_numbers = id;

	//replaces the special characters like newline, slashes, asterisks in the numbers with a comma symbol
	var numbers = string_numbers.replace(/\n|;|\/|\\|[.*]|[%]|[$]/g,",");
	//console.log(numbers);
	//Splitting by commas 
	var rem = numbers.split(',');
	//defining an array of negative numbers
	var neg = [];
	
	var sum = 0;
	for(var i = 0; i < rem.length;i++){
		//to push a number into the negative array if it is less than zero
		if(rem[i] < 0){
			neg.push(rem[i])
		}
		//to check if an array element is not an empty string and is less than 1000
		else if(rem[i] != '' && rem[i] < 1000){
			sum = sum + parseInt(rem[i]);
		}
	}
	//to check if there are negative numbers in the string
	if(neg.length > 0){
		throw('negatives not allowed '+neg);
	}
	//alert('the sum is '+sum);
	//console.log(sum);
	console.log('the result is '+sum);
	return sum;

}
module.exports = stringCalc;
