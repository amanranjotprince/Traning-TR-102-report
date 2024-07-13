//normal javascript
	console.log('Hello Word!!!');
	//variable operator 
	var num1 = 2;
	var num2 = 3;
	console.log(num1,num2);
	console.log('num1+num2 is '+(num1+num2));
	console.log('num1-num2 is '+(num1-num2));
	console.log('num1*num2 is '+(num1*num2));
	console.log('num1/num2 is '+(num1/num2));
	console.log('num1**num2 is '+(num1**num2));
	console.log('num1++ '+(num1++));
	console.log('++num1 '+(++num1));
	console.log('num1-- '+(num1--));
	console.log('--num1 '+(--num1));
	num1=-num1;
	console.log(num1);
	//string and string methods
	var string = `That's a real string with double codes""...`
	console.log(string);
	var name = "Aman"
    console.log(name);
	var len = name.length;
	console.log(len);
	console.log(`my name is ${name}\nmy lenght of my name is\t${len}\b`);
	//string functions
    var str = `how are you guys?...`;
	console.log(str);
    //locate wrod first one
	var position1 = str.indexOf('o');
	console.log(position1);
	//locate word last one
	var position2 = str.lastIndexOf('o');
    console.log(position2);	
	//substring from string
	//print 1 to n-1 index also take negatve value
	var substr = str.slice(1,6);
	console.log(substr);
	//print 1 to n its not take negative value
	var substr2= str.substring(1,6);
	console.log(substr2);
	//replaace a string
	var replace = str.replace('guys','AMAN');
	//its does not replace the content in original string
	console.log(str);
	console.log(replace);
	//convert in upper case
	console.log(str.toUpperCase());
	//convert to lower case
	console.log(replace.toLowerCase());
	//adding without using +
	var newstr = str.concat('Lets explore...');
	console.log(newstr);
	//removing the space using trim function its remove the white space from starting and ending
    var remove = "      this is a big white space occupy      ...      "	
	console.log(remove);
	console.log(remove.trim());
	//return variable
	var variable = str.charAt(5);
	console.log(variable);
	//return code
	var variable2 = str.charCodeAt(5);
	console.log(variable2);
	//slicing 
	console.log(str[5]);
	//let and const variable
	let a = 4;
	//let canot be redeclare
	console.log(a);
	const b= 2;
	//const value not be changed
	console.log(b);
	//if else statements
	let age=18;
	if(age<18)
	{
	    console.log("you are a younger");
	}
	else if(age<45)
	{
	    console.log("You are the elder");
	}
	else{
	    console.log("you are the adult")
	}
	//swith case
	let cup = 4;
	switch(cup)
	{
	    case 1:
		    console.log('ordering tea');
			break;
		case 2:
		    console.log('ordering simple water');
		    break;
		case 3:
		    console.log('ordering cold drink');
			break;
		default:
		    console.log('take him/her water');
			break;
	}
	//array and object
    let arr = {
	    name:"taran",
		salary:20000,
		company:"Google"
	}
	console.log(arr);
	let array = [1,45,2,"Aman","Microsoft"];
	console.log(array);
	console.log(array.length);
	array = array.sort();
	console.log(array);
	array.push(100);
	console.log(array);
	//Functions 
	//simple function
	let name1 = "aman";
	let name2 = "taran";
	let name3 = "jot";
	let greet = "Good morning";
	function give(hi,greet="sorry"){
	console.log(greet +" HI "+hi)
	}
	give(name1,greet);
	give(name2,greet);
	give(name3,greet);
	give(name2);
	// add three numbers funcions
	function add(a,b,c)
	{
	    return a+b+c;
	}
	console.log(add(2,3,4));
