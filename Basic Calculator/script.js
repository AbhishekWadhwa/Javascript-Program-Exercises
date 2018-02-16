function calculator() {
      var x,y,a, b;
      var addition , subtraction , multiply , divide , modulus;

	  x=document.getElementById("form1");
	  a=x.elements["name"].value;
	  y=document.getElementById("form2");
	  b=y.elements["name"].value;
	  
	 
      addition = Number(a)+Number(b);
      subtraction = Number(a)-Number(b);
      multiply = Number(a)*Number(b);
      divide = Number(a)/Number(b);
      modulus = Number(a)%Number(b);


      document.getElementById("demo").innerHTML="addition is " + addition + "<br>";
      //ocument.write(x+"+"+y+"="+addition);
      document.getElementById("demo").innerHTML+="subtraction is " + subtraction+"<br>";
  
      document.getElementById("demo").innerHTML+="multiplication is " + multiply+"<br>";
      
      document.getElementById("demo").innerHTML+="dividion is  " + divide+"<br>";

	document.getElementById("demo").innerHTML+="modulus is " + modulus+"<br>";
}