var count=0;
var xoro = 'x';
var arr={};
var ocount=0;
var xcount=0;
var winner;

var fill=function()
{

	document.getElementById("ocount").innerHTML=ocount;
	document.getElementById("xcount").innerHTML=xcount;
}
var reset=function()
{

	document.getElementById("one").innerHTML='+';
	document.getElementById("two").innerHTML='+';
	document.getElementById("three").innerHTML='+';
	document.getElementById("four").innerHTML='+';
	document.getElementById("five").innerHTML='+';
	document.getElementById("six").innerHTML='+';
	document.getElementById("seven").innerHTML='+';
	document.getElementById("eight").innerHTML='+';
	document.getElementById("nine").innerHTML='+';	

	fill();
	arr={};
	winner='';

}
var checkwin=function(xoro)
{
	console.log(arr);
	for(var i=0;i<9;i++)
	{
			if(arr["one"]==xoro && arr["two"]==xoro && arr["three"]==xoro ||
				arr["four"]==xoro && arr["five"]==xoro && arr["six"]==xoro ||
				arr["seven"]==xoro && arr["eight"]==xoro && arr["nine"]==xoro ||
				arr["one"]==xoro && arr["five"]==xoro && arr["nine"]==xoro ||
				arr["three"]==xoro && arr["five"]==xoro && arr["seven"]==xoro||
				arr["one"]==xoro && arr["four"]==xoro && arr["seven"]==xoro ||
				arr["two"]==xoro && arr["five"]==xoro && arr["eight"]==xoro ||
				arr["three"]==xoro && arr["six"]==xoro && arr["nine"]==xoro)
				
				{
						alert(xoro.toUpperCase()+"WINS");
							if(xoro=='o')
								{
									ocount+=1;
									
								}
							else
								{
									xcount+=1;
									
								}
								return xoro;
						 
				}

	}
	

}
var check=function()
{
		if(winner == 'o' || winner == 'x')
			return;
		
		else{ 

				if(document.getElementById(event.target.id).innerHTML == 'x' || document.getElementById(event.target.id).innerHTML == 'o')
				
				{
					alert("Choose some other!");
				}

				else

				{
							count = count +1;
							if(count%2==1)
								xoro='o';
							else
								xoro='x';

					        console.log(event.target.id);
					        //alert(xoro);

					       	/*var b = document.createElement('button');
							b.setAttribute('content', 'test content');
							b.setAttribute('class', 'btn');
							b.innerHTML = xoro;

							var wrapper = document.getElementById(event.target.id);
							wrapper.appendChild(b);*/
							
							document.getElementById(event.target.id).innerHTML=xoro;

							arr[event.target.id]=xoro;
							winner=checkwin(xoro);
							if(winner=='o' || winner=='x')
								return;
							
						}

				

}
 }



