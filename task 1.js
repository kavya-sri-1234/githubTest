function person(FirstName ,LastName,Office_Address){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.Office_Address=Office_Address
}

var p1 = new person("KAVYA","SREE","Ameerpet , Hyderabad");
var p2 = new person("MYTHILY","SREE SAI","Kukatpally , Hyderabad");
var p3 = new person("RAJESH","KUMAR","Gachibowli,Hyderabad");

console.log(p1);
console.log(p2);
console.log(p3);