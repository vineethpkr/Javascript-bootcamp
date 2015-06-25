var reverse_string = function(string)
{
	reverse_string=[];
	for(var i=string.length-1 ; i >= 0 ; i--)
	{
		reverse_string.push(string[i]);
	}
	console.log(reverse_string);
};
reverse_string("vineeth");