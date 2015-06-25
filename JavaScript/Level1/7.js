var hash_swedish = {
"merry":"god",
 "christmas":"jul", 
 "and":"och", 
 "happy":"gott", 
 "new":"nytt", 
 "year":"år"
 };
 var swedish_wish= function(strings)
 {
 	string_array=strings.split(' ');
 	for(var i=0; i<string_array.length;i++)
 	{
 			console.log(hash_swedish[string_array[i]]);	
 	}
 };
 swedish_wish("merry christmas and happy new year");
