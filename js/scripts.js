function akanName(CC,YY,MM,DD){
  var date = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
	var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var female = ["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama"];
  

  var DD = parseInt(document.getElementById("day").value);
  var MM = parseInt(document.getElementById("month").value);
  var year = document.getElementById("year").value;
  var YY = parseInt(year.slice(2,4));
  var CC = parseInt(year.slice(0,2));
  var gender = document.getElementById("gender").value;
  

  var arrayPosition = Math.abs((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7);
  arrayPosition = Math.floor(arrayPosition);
  console.log(arrayPosition); 

  if(gender === "male"){
    sex = male;
  } else {
    sex = female;
  };

  var name = sex[arrayPosition];
  date = date[arrayPosition];

  console.log(date);
  
  document.getElementById("akan-name").innerHTML = "Your Akan name is " + name + " and you were born on a " + date + ".";
};