function stringCalc(id){
	let string_numbers = document.getElementById(id).value;
	var numbers = string_numbers.replace(/(\r\n|\n|\r)/gm,",");
	var sum = 0;
		for(var i = 0; i < numbers.length;i++){
			if(isNaN(numbers[i])){
				sum = sum + 0;
			}
			else if(numbers.length === 1){
				sum = parseInt(numbers);
			}
			else{
				sum = sum + parseInt(numbers[i]);
			}
		}
			alert('the sum is '+sum);
			return sum;
}
module.exports = stringCalc;
