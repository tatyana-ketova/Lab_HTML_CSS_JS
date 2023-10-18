class Person{
  constructor(firstName, lastName,age,email) {
  this.firstname=firstName;
  this.lastname=lastName;
  this.email=email;
  this.age=age;
  }
  get toString(){
    return this.firstname + ' '+this.lastname + " (age: "+ this.age + ", email: "+ this.email+')'
  }


}
let person = new Person('Maria','Petterson',22,'mp@gmail.com');
console.log(person.toString)
