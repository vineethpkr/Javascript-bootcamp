var max_of_three = function(a,b,c)
{
	if(a>b && a>c)
		return a;
	else if ( b>a && b>c)
		return b;
	else
	 return c;
};
var max_number=max_of_three(10,12,3);
console.log(max_number);