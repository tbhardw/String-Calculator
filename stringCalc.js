// function stringCalc(id){
// 	let string_numbers = id;
// 	var numbers = string_numbers.replace(/\n|;|\\/g,",").split(',');
// 	console.log(numbers);
// 		var sum = 0;
// 		for(var i = 0; i < numbers.length;i++){
// 			console.log('entering')
// 			if(numbers[i] < 0){
// 				throw new Error('negative numbers are not allowed');
// 			}

// 			if(isNaN(numbers[i])){
// 				sum = sum + 0;
// 			}
// 			// else if(numbers[i] < 0){
// 			// 	throw new Error('Negative numbers not allowed');
// 			// }
// 			else if(numbers.length === 1){
// 				sum = parseInt(numbers);
// 			}
// 			else{
// 				sum = sum + parseInt(numbers[i]);
// 			}
// 		}
// 			alert('the sum is '+sum);
// 			return sum;
// }
// module.exports = stringCalc;


function stringCalc(id){
	let string_numbers = id;
	console.log(string_numbers);
	if(string_numbers.includes('-')){
		throw new Error('negative numbers are not allowed');
	}
	var numbers = string_numbers.replace(/\n|;|\\/g,",");
	console.log(numbers);
	var sum = 0;
	if(numbers == ''){
		alert('the sum is '+0);
		return 0;
	}
	else if(numbers.length == 1){
		alert('the sum is '+parseInt(numbers));
		return parseInt(numbers);
	}
	else{
		var rem = numbers.split(',');
		for(var i = 0; i < rem.length;i++){
			sum = sum + parseInt(rem[i]);
		}
		return sum;
	}
			alert('the sum is '+sum);
}
module.exports = stringCalc;
