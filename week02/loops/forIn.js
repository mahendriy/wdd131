let student = {
  name: "mah",
  age: 25,
  course: "WDD 131",
  country: "Madagascar"
};
for (const key in student) {
  console.log(key + ": " + student[key]);
};
