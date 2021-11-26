function person(FirstName ,LastName,Office_Address){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.Office_Address=Office_Address
}
var p1 = new person("kavya","chowdary","london , losangels,1111");
var p2 = new person("rajesh","kumar","hyderabad,1111");
var p3 = new person("sri","chowdary","patna,1111");

console.log(p1);
console.log(p2);
console.log(p3);