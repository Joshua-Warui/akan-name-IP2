function akanName(){
  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
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
  if (DD < 1 || DD >31 || DD !== DD){
    alert("Type a date between 01 and 31")
  } else if(MM <1 || MM>12 || MM !== MM){
    alert("Type a month between 01 and 12")
  }else{
    console.log("DOB seems fine");
  };
  if(gender === "male"){
    sex = male;
  } else {
    sex = female;
  };
  var name = sex[arrayPosition];
  day = day[arrayPosition];
  document.getElementById("akan-name").innerHTML = "Your Akan name is " + name + " and you were born on a " + day + ".";
};