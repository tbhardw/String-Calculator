function stringCalc(id){
	let string_numbers = document.getElementById(id).value;
	//var .number = string_numbers;
	var numbers = string_numbers.replace(/(\r\n|\n|\r)/gm,",");
	// var i;
	// for(i = 0; i < numbers.length;i++){
	// 	if(numbers[i] == ''){
	// 		replace(numbers[i],0);
	// 	}
	// }

	// numbers = this.number.replace(/\n/g, ",");
	// if(isNaN(numbers)){
	// 	numbers = 0;
	// }
	// if(numbers == ''){
	// 	alert('the sum is '+0);
	// 	console.log('the sum is',0);
	// 	return 0;
	// }

		var sum = 0;
		for(var i = 0; i < numbers.length;i++){
			if(isNaN(numbers[i])){
				sum = sum + 0;
			}
			else{
				sum = sum + (+numbers[i]);
			}
		}

			alert('the sum is '+sum);
	// else if(numbers.length === 1){
	// 	alert('the sum is '+parseInt(numbers));
	// 	return parseInt(numbers);
		
	// }
	// else {
	// 		num = numbers.split(',');
	// 		var total = 0;
	// 		for(var i = 0; i < num.length;i++){
	// 			total = total + parseInt(num[i]);
	// 		}
	// 		alert('the sum is '+total);
	// 		return total;
			
	// 	}

}
