let registered_Email="xyz@gmail.com";
registeredPassword="Pass@1234"

let entered_Email="xyzw@gmail.com";
enteredPassword="Pass@1234";

if (entered_Email==registered_Email){
  if (enteredPassword==registeredPassword)
  {
    console.log("Login Successful");
  } 

else {
  console.log("Incorrect Password");
}
}else{
  console.log("Incorrect Email");
}


