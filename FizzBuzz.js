$(document).ready(function() {

	var input = parseInt(prompt("Enter an integer: "));
	console.log(input); 

	function fizzBuzz(input) {

		for (i = 1; i <= input; i++) {

			if (i % 3 === 0 & i % 5 === 0) {
				$("ul").append("<li>FizzBuzz</li>");
			} else if (i % 3 === 0) {
				$("ul").append("<li>Fizz</li>");
			} else if (i % 5 === 0) {
				$("ul").append("<li>Buzz</li>")
			} else {
				$("ul").append("<li>" + i + "</li>")

			};
		}; 
	};

	fizzBuzz(input);
});

