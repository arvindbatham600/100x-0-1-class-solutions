// Write a program that prints all the male people's first name given a complex object -->

const people = [
  {
    firstName: "Alex",
    gender: "male",
  },
  {
    firstName: "joe",
    gender: "female",
  },
  {
    firstName: "jane",
    gender: "female",
  },
  {
    firstName: "Arvind",
    gender: "male",
  },
];

people.forEach((people) => {
  if (people["gender"] == "male") {
    console.log(people["firstName"]);
  }
});
