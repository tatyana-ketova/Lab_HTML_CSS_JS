
let getPerson=function(){
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstname = firstName;
      this.lastname = lastName;
      this.email = email;
      this.age = age;
    }

    get instances() {
      return [this.firstname,this.lastname , this.age ,this.email];
    }

  }

  let person1 = new Person('Maria','Petterson',22,'mp@gmail.com');
  let person2 = new Person('Lexicon');
  let person3 = new Person('Stefan','Larsson',25);
  let person4 = new Person('Peter','Jansson',24);

  let users=[person1.instances,person2.instances,person3.instances,person4.instances];
  let users2=[person1, person2, person3,person4];
  return users2;
}
console.log(getPerson())

