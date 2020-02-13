var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female = ["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama"];

function akanName(CC,YY,MM,DD){
  var arrayPosition = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
  console.log(arrayPosition);
  var name = male[arrayPosition];
  console.log(name);
}

akanName(19,96.08,19);