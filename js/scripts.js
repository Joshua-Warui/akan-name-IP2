function akanName(CC,YY,MM,DD){
  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
	var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var female = ["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama"];
  var date = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var gender = document.getElementById("gender").value;
  var arrayPosition = new Date(`${year}-${month}-${date}`);
  arrayPosition = arrayPosition.getDay();
  console.log(date);
  
  if (date < 1 || date >31 || date !== date){
    alert("Type a date between 01 and 31")
  } else if(month <1 || month>12 || month !== month){
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