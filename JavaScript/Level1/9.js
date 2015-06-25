var FilterTheLongestWord = function(strings_array,len)
{	
	long_strings=[];
	for(var i=0; i < strings_array.length; i++)
	{
		 if(len < strings_array[i].length)
		  {
		  	 long_strings.push(strings_array[i]);
		  }
	}
	console.log(long_strings);
	
};
FilterTheLongestWord(["the","ina","an","on"],2);


