let allUsers = [
    "anurag",
    "mithun",
    "Soumya",
    "Hitesh",
    "Urvi"
];
function isPresentUsers (user)

{
  if(allUsers.includes(user))
  {
    console.log(`yes ${user} is valid!`);
    return true;
  }
  else{
    console.log(`not a valid ${user}`);
    return true;
  }
}
isPresentUsers("mithun");
isPresentUsers("min");