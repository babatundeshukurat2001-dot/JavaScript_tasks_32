//student GPA

let student = {
    name: "John Doe",
    age: 22
};

student.age = 23;
student.GPA = 3.8;

student.getDetails = function() {
    return `${student.name} is ${student.age} years old and has a GPA of ${student.GPA}`;
};

console.log(student.getDetails());
