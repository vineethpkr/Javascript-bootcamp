var sum = function(numbers)
{
	sum_of=0;
	for(var i=0; i<numbers.length;i++)
	{
		sum_of+=numbers[i];
	}
	return sum_of;
};
var multiply = function(numbers)
{
	multiply_of=1;
		for(var i=0;i<numbers.length;i++)
		{
			multiply_of*=numbers[i];
		}
		return multiply_of;
};
console.log("sum:" + sum([1,2,3,4]) + "multiply:" + multiply([1,2,3,4]));

