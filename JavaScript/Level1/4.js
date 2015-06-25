var double_consonant = function(string)
{
	var new_string=[];
	for(var i=0 ; i < string.length ; i++)
	{
		switch(string[i])
		{
			case 'a': 
			case 'e':
			case 'i':
			case 'o':
			case 'u': new_string.push(string[i]);
				break;
			default: new_string.push(string[i] + 'o' + string[i]);
					 
		}
	}
	console.log(new_string);
};
double_consonant("this is fun");

