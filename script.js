/*const dropBtn = document.getElementById("dropdown");
dropBtn.addEventListener("click", () => {
  console.log("clicked");
  const open = document.querySelector(".toggle");
  open.classList.toggle("active");
});*/
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Asabeneh", "Yetayeh");

console.log(person1);

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  getFood() {
    console.log("eat");
  }

  getSleep() {
    console.log("sleep");
  }
}

class Bird extends Animal {
  getFly() {
    console.log("I can fly");
  }
}
const bird1 = new Bird("Pero", 2, "blue", 2);
console.log(bird1.getFood());
