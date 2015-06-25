var FindTheLongestWord = function(strings_array)
{	
	var max_len=strings_array[0].length;
	var max_pos=0;
	for(var i=1; i < strings_array.length; i++)
	{
		 if(max_len < strings_array[i].length)
		  {
		  	 max_len=strings_array[i].length;
		  	 max_pos=i;
		  }
	}
	console.log(strings_array[max_pos]);
};
FindTheLongestWord(["the","in","an","on"]);