function valfname()
{
	var fname=document.getElementById("fname").value;
	if(fname=="")
		document.getElementById("sfname").innerHTML="First Name cannot be empty";
	else
	{
		var testcase=/^[a-zA-Z]{3,15}$/;
		if(!testcase.test(fname))
			document.getElementById("sfname").innerHTML="Enter a valid First Name";
		else
			document.getElementById("sfname").innerHTML="";
	}
}
function valphone()
{
	var phone=document.getElementById("phone").value;
	var testcase=/^\d{3}[\-]\d{3}[\-]\d{4}$/;
	if(phone=="")
		document.getElementById("sphone").innerHTML="Phone number cannot be empty";
	else
	{
		if(!testcase.test(phone))
			document.getElementById("sphone").innerHTML="Enter in valid format";
		else
			document.getElementById("sphone").innerHTML="";
	}
}
function valpass1()
{
	var pass1 =document.getElementById("pass1").value;
	var testcase=/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
	if(pass1=="")
		document.getElementById("spass1").innerHTML="Password field cannot be empty";
	else
	{	
		if(!testcase.test(pass1))
			document.getElementById("spass1").innerHTML="Enter a Strong password";
		else
			document.getElementById("spass1").innerHTML="";
	}
}
function valpass2()
{
	var pass2=document.getElementById("pass2").value;
	var pass1=document.getElementById("pass1").value;
	if(pass1!=pass2)
		document.getElementById("spass2").innerHTML="Passwords are not matching";
	else	
		document.getElementById("spass2").innerHTML="";
}
function valfinish()
{
	if(!document.getElementById("pp").checked)
		document.getElementById("sfinish").innerHTML="Must Check this checkBox";
	else
		document.getElementById("sfinish").innerHTML="";
	valfname();
	valphone();
	valpass1();
	valpass2();
}
