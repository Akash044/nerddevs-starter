//https://jschallenger.com/javascript-practice/javascript-objects/access-object-properties
function myFunction(obj) {
  return obj["country"];
}
console.log(myFunction({ continent: "Asia", country: "Japan" }));
